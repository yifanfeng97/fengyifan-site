// 从源数据重建世界地图 GeoJSON（一次性完成全部处理，可重复执行）：
//   1. 台湾多边形并入中国
//   2. 删除南极洲
//   3. 用 Natural Earth 50m 的真实海岸线注入香港、新加坡（johan 数据缺失）
//   4. 修复跨对蹠子午线碎片：仅对俄罗斯生效——楚科奇半岛整条环都在 160°W 之外
//      （max(lon) < -160），整体 +360° 接回 180° 右侧，避免俄罗斯被画到地图两端。
//      阿拉斯加本土及其西侧岛屿保持原位（美国主体在地图左侧）。
//
// 用法：node scripts/build-world-geo.mjs
// 需要两份源数据（不存在会自动下载到系统临时目录）：
//   world-johan.json    https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json
//   countries-50m.json  https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { feature } from 'topojson-client';

const here = dirname(fileURLToPath(import.meta.url));
const tmp = process.env.TEMP || '/tmp';

const SOURCES = {
  'world-johan.json':
    'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
  'countries-50m.json': 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
};
for (const [name, url] of Object.entries(SOURCES)) {
  const p = join(tmp, name);
  if (!existsSync(p)) {
    console.log(`下载 ${url}`);
    execFileSync('curl', ['-sL', '-m', '120', url, '-o', p], { stdio: 'inherit' });
  }
}

const world = JSON.parse(readFileSync(join(tmp, 'world-johan.json'), 'utf8'));
const topo = JSON.parse(readFileSync(join(tmp, 'countries-50m.json'), 'utf8'));
const ne = feature(topo, topo.objects.countries);

const byName = (n) => world.features.find((f) => f.properties.name === n);
const polys = (feat) =>
  feat.geometry.type === 'MultiPolygon' ? feat.geometry.coordinates : [feat.geometry.coordinates];

// 1. 台湾并入中国
const china = byName('China');
china.geometry = {
  type: 'MultiPolygon',
  coordinates: [...polys(china), ...polys(byName('Taiwan'))],
};
world.features = world.features.filter((f) => f.properties.name !== 'Taiwan');

// 2. 删除南极洲
world.features = world.features.filter((f) => f.properties.name !== 'Antarctica');

// 3. 真实海岸线注入香港、新加坡
for (const [id, name, iso3] of [
  ['344', 'Hong Kong', 'HKG'],
  ['702', 'Singapore', 'SGP'],
]) {
  const f = ne.features.find((x) => x.id === id);
  if (!f) throw new Error(`Natural Earth 50m 中未找到 ${name}`);
  world.features.push({ type: 'Feature', id: iso3, properties: { name }, geometry: f.geometry });
}

// 4. 对蹠子午线碎片修复（仅俄罗斯）
let fixed = 0;
for (const f of world.features) {
  if (f.properties.name !== 'Russia') continue;
  for (const poly of polys(f)) {
    for (const ring of poly) {
      const lons = ring.map((pt) => pt[0]);
      if (Math.max(...lons) < -160) {
        for (const pt of ring) pt[0] += 360;
        fixed++;
      }
    }
  }
}

const out = join(here, '../src/assets/world.geo.json');
writeFileSync(out, JSON.stringify(world));
console.log(`完成：features=${world.features.length}，修复跨线碎片环=${fixed}`);
