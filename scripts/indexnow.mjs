// Tells IndexNow (Bing, Yandex, Seznam, Naver and others) which pages changed since the last run.
// Run after `npm run build`. Reads the sitemaps in dist/, hashes each page's <main> (so a CSS or
// script change that touches every page doesn't count), compares with the state file, and submits
// new, changed and removed URLs. Usage:
//   node scripts/indexnow.mjs <state.json> [--dry]
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const SITE = 'https://afterhighschool.me';
const HOST = 'afterhighschool.me';
const DIST = 'dist';
const [statePath = 'indexnow-state.json', flag] = process.argv.slice(2);
const dry = flag === '--dry';

const key = readdirSync('public').map((f) => f.match(/^([0-9a-f]{32})\.txt$/)).find(Boolean)?.[1];
if (!key) throw new Error('No IndexNow key file in public/');

const locs = readdirSync(join(DIST, 'sitemaps'))
  .filter((f) => f.endsWith('.xml'))
  .flatMap((f) => [...readFileSync(join(DIST, 'sitemaps', f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

const fileFor = (url) => {
  const p = new URL(url).pathname.replace(/\/$/, '');
  for (const f of [p ? `${p}.html` : '/index.html', `${p}/index.html`]) if (existsSync(join(DIST, f))) return join(DIST, f);
  return null;
};

const now = {};
for (const url of locs) {
  const f = fileFor(url);
  if (!f) { console.warn(`No file for ${url}`); continue; }
  const html = readFileSync(f, 'utf8');
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? html;
  const title = html.match(/<title>[^<]*<\/title>/)?.[0] ?? '';
  now[url] = createHash('sha1').update(title + main).digest('hex').slice(0, 16);
}

const before = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : {};
const changed = Object.keys(now).filter((u) => before[u] !== now[u]);
const removed = Object.keys(before).filter((u) => !(u in now));
const urls = [...changed, ...removed];
console.log(`${Object.keys(now).length} pages; ${changed.length} new or changed, ${removed.length} removed.`);

if (urls.length && !dry) {
  for (let i = 0; i < urls.length; i += 10000) {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls.slice(i, i + 10000) })
    });
    console.log(`IndexNow: HTTP ${res.status} for ${Math.min(10000, urls.length - i)} URLs`);
    if (res.status >= 300) { console.log(await res.text()); process.exit(1); }
  }
}
if (!dry) writeFileSync(statePath, `${JSON.stringify(now)}\n`);
