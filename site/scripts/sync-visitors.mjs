// Pull per-country visitor counts (pageviews) from the Cloudflare GraphQL
// Analytics API (RUM dataset) and maintain visitors-daily.json / visitors.json.
//
// 算法（精确自然日窗口，临时值 + 定稿）：
// - Cloudflare 支持任意时间段查询，因此每天的数据就是当天
//   00:00:00Z → 次日 00:00:00Z 的精确聚合，不需要滚动窗口近似。
// - 当天条目为临时值（final: false），每次运行刷新为"今天截至目前"。
// - 每次运行都会检查最近 7 天内所有未定稿的过去日期，用精确窗口
//   补记并定稿（final: true）——任务中断后能自动回填，7 天后
//   Cloudflare 端会降采样，所以只回填 7 天。
// - 全链路统一 UTC（Actions cron、查询窗口、daily 日期键）。
//
// Usage: CF_API_TOKEN=<token> CF_ACCOUNT_ID=<id> CF_SITE_TAG=<tag> \
//          node scripts/sync-visitors.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const dailyPath = join(here, '../src/data/visitors-daily.json');
const aggPath = join(here, '../src/data/visitors.json');

const { CF_API_TOKEN, CF_ACCOUNT_ID, CF_SITE_TAG } = process.env;
if (!CF_API_TOKEN || !CF_ACCOUNT_ID || !CF_SITE_TAG) {
  console.error('CF_API_TOKEN, CF_ACCOUNT_ID and CF_SITE_TAG are required');
  process.exit(1);
}

// ISO alpha-2 国家/地区代码 → visitors.json 里的规范英文键
// （与 src/components/VisitorStats.astro 的 ZH_NAMES 对应，未列出的回退为代码本身）。
const CODE_MAP = {
  CN: 'China',
  HK: 'Hong Kong',
  TW: 'Taiwan',
  MO: 'Macau',
  US: 'United States of America',
  SG: 'Singapore',
  JP: 'Japan',
  GB: 'United Kingdom',
  DE: 'Germany',
  KR: 'South Korea',
  CA: 'Canada',
  AU: 'Australia',
  FR: 'France',
  IN: 'India',
  NL: 'Netherlands',
  CH: 'Switzerland',
  IT: 'Italy',
  SE: 'Sweden',
  ES: 'Spain',
  IL: 'Israel',
  DK: 'Denmark',
  BE: 'Belgium',
  AT: 'Austria',
  BR: 'Brazil',
  RU: 'Russia',
  FI: 'Finland',
  IE: 'Ireland',
  PL: 'Poland',
  NZ: 'New Zealand',
  NO: 'Norway',
  MY: 'Malaysia',
  TH: 'Thailand',
  VN: 'Vietnam',
  ID: 'Indonesia',
  PH: 'Philippines',
  MX: 'Mexico',
  AR: 'Argentina',
  CL: 'Chile',
  CO: 'Colombia',
  ZA: 'South Africa',
  EG: 'Egypt',
  NG: 'Nigeria',
  TR: 'Turkey',
  SA: 'Saudi Arabia',
  AE: 'United Arab Emirates',
  UA: 'Ukraine',
  CZ: 'Czechia',
  PT: 'Portugal',
  GR: 'Greece',
  HU: 'Hungary',
  RO: 'Romania',
};

/** 查询 [geq, lt) 窗口内分国家的 pageview 数。 */
async function queryCounts(geq, lt) {
  const query = `{
    viewer {
      accounts(filter: { accountTag: "${CF_ACCOUNT_ID}" }) {
        rumPageloadEventsAdaptiveGroups(
          limit: 500
          filter: { siteTag: "${CF_SITE_TAG}", datetime_geq: "${geq}", datetime_lt: "${lt}" }
        ) {
          count
          dimensions { countryName }
        }
      }
    }
  }`;
  const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${CF_API_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    throw new Error(`Cloudflare API HTTP error ${res.status}: ${await res.text()}`);
  }
  const payload = await res.json();
  if (payload.errors?.length) {
    throw new Error(`Cloudflare API error: ${JSON.stringify(payload.errors)}`);
  }
  const groups = payload.data?.viewer?.accounts?.[0]?.rumPageloadEventsAdaptiveGroups ?? [];
  const counts = {};
  for (const g of groups) {
    const code = g.dimensions?.countryName;
    const value = Number(g.count ?? 0);
    if (!code || value <= 0) continue;
    const name = CODE_MAP[code] ?? code;
    counts[name] = (counts[name] ?? 0) + value;
  }
  return counts;
}

const DAY = 24 * 3600 * 1000;
const now = new Date();
const today = now.toISOString().slice(0, 10); // UTC date
const dayStart = (date) => `${date}T00:00:00Z`;
const nextDay = (date) => new Date(Date.parse(dayStart(date)) + DAY).toISOString().slice(0, 10);

// 兼容旧格式 {date: {country: n}} → {date: {final, counts}}。
const raw = JSON.parse(readFileSync(dailyPath, 'utf8'));
const daily = {};
for (const [date, entry] of Object.entries(raw)) {
  if (entry?.counts) {
    daily[date] = entry;
  } else {
    const counts = entry ?? {};
    daily[date] = { final: Object.keys(counts).length > 0, counts };
  }
}

try {
  // 1) 回填并定稿最近 7 天内的未定稿过去日期（含缺失的日期）。
  //    7 天是 Cloudflare 未采样数据的保留期，超过后准确度下降，不再回填。
  for (let i = 7; i >= 1; i--) {
    const date = new Date(Date.parse(dayStart(today)) - i * DAY).toISOString().slice(0, 10);
    if (daily[date]?.final) continue;
    const counts = await queryCounts(dayStart(date), dayStart(nextDay(date)));
    // 空结果视为当天确实没有访问，同样定稿。
    daily[date] = { final: true, counts };
    console.log(`Finalized ${date}: ${Object.values(counts).reduce((s, v) => s + v, 0)} pageviews`);
  }

  // 2) 今天的临时值：00:00:00Z → 现在。
  const counts = await queryCounts(dayStart(today), now.toISOString());
  daily[today] = { final: false, counts };
  console.log(`Today ${today} so far: ${Object.values(counts).reduce((s, v) => s + v, 0)} pageviews`);
} catch (err) {
  // 保底：查询失败时不写任何文件，页面上保留最近一次成功的数据。
  console.error(err.message);
  process.exit(1);
}

writeFileSync(dailyPath, JSON.stringify(daily, null, 2) + '\n');

const agg = {};
for (const entry of Object.values(daily)) {
  for (const [name, value] of Object.entries(entry.counts)) {
    agg[name] = (agg[name] ?? 0) + value;
  }
}
writeFileSync(aggPath, JSON.stringify(agg, null, 2) + '\n');
