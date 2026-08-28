// Pull last-24h per-country visitor counts from the Microsoft Clarity Data
// Export API, store a daily snapshot in visitors-daily.json and rebuild the
// aggregated visitors.json consumed by the homepage world map.
//
// Usage: CLARITY_TOKEN=<token> node scripts/sync-visitors.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const dailyPath = join(here, '../src/data/visitors-daily.json');
const aggPath = join(here, '../src/data/visitors.json');
const geoPath = join(here, '../src/assets/world.geo.json');

const token = process.env.CLARITY_TOKEN;
if (!token) {
  console.error('CLARITY_TOKEN environment variable is required');
  process.exit(1);
}

// Clarity "Country/Region" names → names used by src/assets/world.geo.json.
// Extend this map as new mismatches show up in the sync logs.
const NAME_MAP = {
  'United States': 'United States of America',
  Taiwan: 'China', // 地图上台湾已并入中国
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
const traffic = (Array.isArray(payload) ? payload : []).find((m) => m.metricName === 'Traffic');
const rows = traffic?.information ?? [];

const counts = {};
for (const row of rows) {
  const raw = row['Country/Region'];
  if (!raw) continue;
  const name = NAME_MAP[raw] ?? raw;
  // Human sessions only: subtract bot traffic.
  const humans = Math.max(0, Number(row.totalSessionCount ?? 0) - Number(row.totalBotSessionCount ?? 0));
  counts[name] = (counts[name] ?? 0) + humans;
}

// Warn about country names not present in the world map (need NAME_MAP entries).
const geo = JSON.parse(readFileSync(geoPath, 'utf8'));
const geoNames = new Set(geo.features.map((f) => f.properties?.name));
for (const name of Object.keys(counts)) {
  if (!geoNames.has(name)) console.warn(`Unmapped country name: ${name}`);
}

const today = new Date().toISOString().slice(0, 10); // UTC date
const daily = JSON.parse(readFileSync(dailyPath, 'utf8'));
daily[today] = counts;
writeFileSync(dailyPath, JSON.stringify(daily, null, 2) + '\n');

const agg = {};
for (const day of Object.values(daily)) {
  for (const [name, value] of Object.entries(day)) {
    agg[name] = (agg[name] ?? 0) + value;
  }
}
writeFileSync(aggPath, JSON.stringify(agg, null, 2) + '\n');

console.log(`Synced ${Object.keys(counts).length} countries for ${today}`);
