// Confirms each candidate test policy's quote on its live page, then publishes the confirmed ones.
// Usage: node scripts/check-test-policy.mjs [--all]   (runs in GitHub Actions, which has open network access)
//   1. data/test-policy/candidates.json: policies with a quote from the college's own page (from Gemini).
//   2. A plain fetch, then a headless browser for pages a fetch couldn't confirm (if playwright is installed).
//   3. Every confirmed candidate is written to data/test-policy.json with today's date; others are left out.
// Writes data/test-policy/_check.md with the results.
import fs from 'node:fs';
import { fetchDocText } from './lib/doc-text.mjs';

const CAND = 'data/test-policy/candidates.json';
const LIVE = 'data/test-policy.json';
const today = new Date().toISOString().slice(0, 10);
const all = process.argv.includes('--all');

// Quotes are compared without quotation marks, dash styles or spacing differences.
const norm = (s) => String(s || '')
  .replace(/[‘’ʼ]/g, "'").replace(/["“”]/g, '').replace(/[‐‑‒–—]/g, '-')
  .replace(/[  ]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

const cand = JSON.parse(fs.readFileSync(CAND, 'utf8'));
const live = JSON.parse(fs.readFileSync(LIVE, 'utf8'));
const todo = Object.entries(cand.schools).filter(([, c]) => all || c.quoteFound !== true);
console.log(`checking ${todo.length} quotes`);

// Pass 1: plain fetch (8 at a time).
const pages = new Map();
const urls = [...new Set(todo.map(([, c]) => c.source.url))];
let next = 0;
await Promise.all(Array.from({ length: 8 }, async () => {
  while (next < urls.length) {
    const u = urls[next++];
    try { pages.set(u, await fetchDocText(u, { timeout: 20000 })); } catch { pages.set(u, { status: 0, text: null }); }
  }
}));
for (const [, c] of todo) {
  const p = pages.get(c.source.url);
  c.httpStatus = p.status;
  c.quoteFound = p.text != null && norm(p.text).includes(norm(c.quote));
  c.checkedAt = today;
}

// Pass 2: real browser for the rest (JavaScript-rendered pages, basic bot checks).
const rest = todo.filter(([, c]) => !c.quoteFound);
let chromium = null;
try { ({ chromium } = await import('playwright')); } catch { /* not installed */ }
if (chromium && rest.length) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36', locale: 'en-US' });
  for (const [, c] of rest) {
    const page = await ctx.newPage();
    try {
      await page.goto(c.source.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(2500);
      const t = await page.evaluate(() => (document.body ? document.body.innerText : ''));
      c.browserChecked = true;
      if (norm(t).includes(norm(c.quote))) c.quoteFound = true;
    } catch { /* leave as not found */ }
    await page.close();
  }
  await browser.close();
}

// Publish confirmed candidates (never overwrite an entry that came from a person's own check).
let added = 0;
for (const [slug, c] of Object.entries(cand.schools)) {
  if (!c.quoteFound) continue;
  const prev = live.schools[slug];
  if (prev && !prev.fromCandidates) continue;
  live.schools[slug] = { policy: c.policy, ...(c.note ? { note: c.note } : {}), checkedAt: c.checkedAt, source: c.source, quote: c.quote, fromCandidates: true };
  if (!prev) added++;
}
live.schools = Object.fromEntries(Object.entries(live.schools).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(LIVE, JSON.stringify(live, null, 2) + '\n');
fs.writeFileSync(CAND, JSON.stringify(cand, null, 2) + '\n');

const rows = Object.entries(cand.schools);
const ok = rows.filter(([, c]) => c.quoteFound).length;
const md = ['# Test policy quote check', '', `Checked ${today}: ${ok} of ${rows.length} quotes found on their pages; ${added} newly published.`, '',
  '| School | Policy | HTTP | Quote found | Page |', '| --- | --- | --- | --- | --- |',
  ...rows.map(([s, c]) => `| ${s} | ${c.policy} | ${c.httpStatus ?? ''} | ${c.quoteFound ? 'yes' : 'no'}${c.browserChecked ? ' (browser)' : ''} | ${c.source.url} |`)].join('\n');
fs.writeFileSync('data/test-policy/_check.md', md + '\n');
console.log(`found ${ok} of ${rows.length}; added ${added}`);
