// Pull last-24h per-country visitor counts from the Microsoft Clarity Data
// Export API and maintain visitors-daily.json / visitors.json.
//
// 算法（临时值 + 定稿）：
// Clarity 只能给"过去 24h"的滚动窗口聚合，没有日期维度，无法按自然日
// 精确拆分。因此每天的数据分两种状态：
// - 当天条目为临时值（final: false），每班更新：
//   临时值 = max(0, 当前滚动样本 − 昨天定稿样本)（按国家逐项），
//   近似"今天截至目前"，越接近午夜越准。
// - 新一天早晨（UTC 0–8 点的班次）拉到非空数据时，滚动窗口
//   [昨天凌晨 → 今天凌晨] 恰为"昨天全天"的最佳近似，用它把昨天的
//   条目覆盖并定稿（final: true），此后不再改动。
// 防御：API 返回空数据时不写任何条目，避免把已有数据覆盖成空。
//
// Usage: CLARITY_TOKEN=<token> node scripts/sync-visitors.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const dailyPath = join(here, '../src/data/visitors-daily.json');
const aggPath = join(here, '../src/data/visitors.json');

const token = process.env.CLARITY_TOKEN;
if (!token) {
  console.error('CLARITY_TOKEN environment variable is required');
  process.exit(1);
}

// Clarity "Country/Region" names → canonical keys in visitors.json.
// Kept for continuity with historical data; extend as new mismatches show up.
const NAME_MAP = {
  'United States': 'United States of America',
};

const url =
  'https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays=1&dimension1=' +
  encodeURIComponent('Country/Region');

const res = await fetch(url, {
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
});
if (!res.ok) {
  console.error(`Clarity API error ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const payload = await res.json();
// 诊断日志：列出返回里每个指标的行数，方便排查空数据问题。
if (Array.isArray(payload)) {
  console.log(
    'Clarity metrics: ' +
      payload.map((m) => `${m.metricName}(${(m.information ?? []).length})`).join(', '),
  );
}
// 兼容 Clarity 的返回结构变化：分国家明细行曾经挂在 Traffic 指标下
// （字段 Country/Region + totalSessionCount/totalBotSessionCount），
// 现在在独立的 Country 指标里（字段 name + sessionsCount，无 bot 拆分）。
const metrics = Array.isArray(payload) ? payload : [];
const countryMetric =
  metrics.find((m) => (m.information ?? []).some((r) => r['Country/Region'])) ??
  metrics.find((m) => m.metricName === 'Country');
const rows = countryMetric?.information ?? [];

// 当前滚动样本：过去 24h 分国家的会话数。
const sample = {};
for (const row of rows) {
  const raw = row['Country/Region'] ?? row.name;
  if (!raw) continue;
  const name = NAME_MAP[raw] ?? raw;
  // 旧结构可剔除 bot 会话；新结构只有总会话数，可能略含 bot。
  const humans =
    row.sessionsCount != null
      ? Number(row.sessionsCount)
      : Math.max(0, Number(row.totalSessionCount ?? 0) - Number(row.totalBotSessionCount ?? 0));
  if (!(humans > 0)) continue;
  sample[name] = (sample[name] ?? 0) + humans;
}
const hasData = Object.keys(sample).length > 0;
if (!hasData) {
  console.log('Clarity returned no country rows; keeping existing data untouched');
}

const DAY = 24 * 3600 * 1000;
const now = Date.now();
const today = new Date(now).toISOString().slice(0, 10); // UTC date
const yesterday = new Date(now - DAY).toISOString().slice(0, 10);
const hour = new Date(now).getUTCHours();

// 兼容旧格式 {date: {country: n}} → {date: {final, counts}}。
// 历史条目中只有非空的才视为已定稿；空条目（曾被空响应覆盖的日子）
// 保持临时状态，留给次日早晨的班次修正。
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

// 1) 定稿昨天。只有次日早晨（UTC 0–8 点）的非空样本才是"昨天全天"的
//    有效近似；过了早晨还没定稿就冻结现有临时值，不再等待。
const y = daily[yesterday];
if (y && !y.final) {
  if (hasData && hour < 8) y.counts = sample;
  y.final = true;
} else if (!y && hasData && hour < 8) {
  // 首次运行或缺了一天：直接用当前样本补记昨天。
  daily[yesterday] = { final: true, counts: sample };
}

// 2) 更新今天的临时值 = 当前样本 − 昨天定稿样本（按国家，不为负）。
//    昨天还没定稿时（如首日）退化为直接使用当前样本。
if (hasData) {
  const base = daily[yesterday]?.final ? daily[yesterday].counts : null;
  const prov = {};
  for (const [name, value] of Object.entries(sample)) {
    const diff = value - (base?.[name] ?? 0);
    if (diff > 0) prov[name] = diff;
  }
  daily[today] = { final: false, counts: prov };
}

// 3) 更早的临时条目（比如停跑了几天）直接冻结，不再有机会修正。
for (const [date, entry] of Object.entries(daily)) {
  if (!entry.final && date < yesterday) entry.final = true;
}

writeFileSync(dailyPath, JSON.stringify(daily, null, 2) + '\n');

const agg = {};
for (const entry of Object.values(daily)) {
  for (const [name, value] of Object.entries(entry.counts)) {
    agg[name] = (agg[name] ?? 0) + value;
  }
}
writeFileSync(aggPath, JSON.stringify(agg, null, 2) + '\n');

console.log(
  `Synced ${Object.keys(sample).length} countries at ${today} ${hour}:00 UTC; ` +
    `yesterday ${yesterday} final=${daily[yesterday]?.final ?? 'n/a'}`,
);
