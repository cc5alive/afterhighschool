// Second pass for draft facts whose quote wasn't confirmed by a plain fetch:
// loads each page in a real (headless) Chromium so JavaScript-rendered pages and
// basic bot checks don't cause false misses. Updates quoteFound / quoteVerified in place.
// Usage: node scripts/check-quotes-browser.mjs   (needs `npx playwright install chromium`)
import fs from 'node:fs';
import { chromium } from 'playwright';

const DIR = 'data/highlights/drafts';
const norm = (s) => String(s || '')
  .replace(/[‘’ʼ]/g, "'").replace(/[“”"]/g, '').replace(/[–—]/g, '-')
  .replace(/ /g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

const docs = fs.readdirSync(DIR).filter((f) => f.endsWith('.json'))
  .map((f) => ({ f, d: JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8')) }));
const todo = [];
for (const { d } of docs) for (const fact of d.facts) for (const s of fact.sources) {
  if (s.quoteFound !== true && (!s.browserChecked || s.closest === undefined)) todo.push(s);
}
console.log(`browser-checking ${todo.length} sources`);

const browser = await chromium.launch();
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36',
  locale: 'en-US'
});
const cache = new Map();
async function text(url) {
  if (cache.has(url)) return cache.get(url);
  const page = await ctx.newPage();
  let t = null;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2500);
    t = norm(await page.evaluate(() => document.body ? document.body.innerText : ''));
  } catch { /* leave null */ }
  await page.close();
  cache.set(url, t);
  return t;
}

// For quotes that still aren't found verbatim, keep the page passage that shares the
// most words with the quote, so a reviewer can check the fact against what the page says.
const words = (x) => x.split(/[^a-z0-9$%]+/).filter((w) => w.length > 2);
function closest(t, quote) {
  const q = new Set(words(norm(quote)));
  if (!q.size) return { text: '', score: 0 };
  const tw = t.split(' ');
  const n = Math.max(12, Math.min(80, norm(quote).split(' ').length + 10));
  let best = { i: 0, score: 0 };
  for (let i = 0; i < tw.length; i += 4) {
    const win = new Set(words(tw.slice(i, i + n).join(' ')));
    let hit = 0; for (const w of q) if (win.has(w)) hit++;
    if (hit / q.size > best.score) best = { i, score: hit / q.size };
  }
  return { text: tw.slice(best.i, best.i + n).join(' '), score: Math.round(best.score * 100) / 100 };
}

let found = 0;
for (const s of todo) {
  const t = await text(s.url);
  s.browserChecked = true;
  if (t && s.quote && t.includes(norm(s.quote))) { s.quoteFound = true; found++; continue; }
  if (t && s.quote) { const c = closest(t, s.quote); s.closest = c.text; s.closestScore = c.score; }
  else s.closest = null;
}
await browser.close();

for (const { f, d } of docs) {
  for (const fact of d.facts) fact.quoteVerified = fact.sources.some((s) => s.quoteFound === true);
  fs.writeFileSync(`${DIR}/${f}`, JSON.stringify(d, null, 2) + '\n');
}
console.log(`confirmed ${found} of ${todo.length} in browser`);
