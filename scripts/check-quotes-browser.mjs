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
  if (s.quoteFound !== true && !s.browserChecked) todo.push(s);
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

let found = 0;
for (const s of todo) {
  const t = await text(s.url);
  s.browserChecked = true;
  if (t && s.quote && t.includes(norm(s.quote))) { s.quoteFound = true; found++; }
}
await browser.close();

for (const { f, d } of docs) {
  for (const fact of d.facts) fact.quoteVerified = fact.sources.some((s) => s.quoteFound === true);
  fs.writeFileSync(`${DIR}/${f}`, JSON.stringify(d, null, 2) + '\n');
}
console.log(`confirmed ${found} of ${todo.length} in browser`);
