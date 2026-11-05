// Checks every draft fact's quote against its live source page.
// Usage: node scripts/check-highlight-quotes.mjs   (runs in GitHub Actions, which has open network access)
// Updates each draft in data/highlights/drafts/ with sources[].quoteFound (true/false/null when the page failed)
// and writes data/highlights/drafts/_quote-check.md with a summary.
import fs from 'node:fs';

const DIR = 'data/highlights/drafts';
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json'));

const norm = (s) => String(s || '')
  .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;|&rsquo;|&#39;|’/g, "'")
  .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;|&quot;|[“”]/g, '"').replace(/&#8211;|&#8212;|&ndash;|&mdash;|[–—]/g, '-')
  .replace(/\s+/g, ' ').trim().toLowerCase();

const cache = new Map();
async function page(url) {
  if (cache.has(url)) return cache.get(url);
  let text = null, finalUrl = url, status = 0;
  try {
    const r = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (compatible; afterhighschool-factcheck/1.0)' }, signal: AbortSignal.timeout(15000) });
    status = r.status; finalUrl = r.url;
    if (r.ok) text = norm(await r.text());
  } catch { /* network error */ }
  const res = { text, finalUrl, status };
  cache.set(url, res);
  return res;
}

const rows = [];
const recheck = process.argv.includes('--all');
const docs = files.map((f) => ({ f, d: JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8')) }));
const jobs = [];
for (const { d } of docs) for (const fact of d.facts) for (const s of fact.sources) {
  if (!recheck && s.quoteFound !== undefined) continue; // already checked
  jobs.push(s);
}
// Fetch pages with limited concurrency.
const urls = [...new Set(jobs.map((s) => s.url))];
let next = 0;
await Promise.all(Array.from({ length: 8 }, async () => { while (next < urls.length) await page(urls[next++]); }));
for (const s of jobs) {
  const p = await page(s.url);
  s.httpStatus = p.status;
  s.finalUrl = p.finalUrl;
  s.quoteFound = p.text == null ? null : Boolean(s.quote) && p.text.includes(norm(s.quote));
}
for (const { f, d } of docs) {
  for (const fact of d.facts) {
    for (const s of fact.sources) rows.push({ slug: d.slug, url: s.url, status: s.httpStatus, found: s.quoteFound ?? null });
    fact.quoteVerified = fact.sources.some((s) => s.quoteFound === true);
  }
  fs.writeFileSync(`${DIR}/${f}`, JSON.stringify(d, null, 2) + '\n');
}

const found = rows.filter((r) => r.found === true).length;
const missing = rows.filter((r) => r.found === false).length;
const failed = rows.filter((r) => r.found === null).length;
const md = [
  `# Quote check`, '', `Checked ${rows.length} sources on ${new Date().toISOString().slice(0, 10)}.`, '',
  `- Quote found on page: ${found}`, `- Page loaded, quote not found: ${missing}`, `- Page failed to load: ${failed}`, '',
  '| School | Status | Quote found | URL |', '| --- | --- | --- | --- |',
  ...rows.map((r) => `| ${r.slug} | ${r.status} | ${r.found === null ? 'page failed' : r.found ? 'yes' : 'no'} | ${r.url} |`)
].join('\n');
fs.writeFileSync(`${DIR}/_quote-check.md`, md + '\n');
console.log(`found ${found}, not found ${missing}, failed ${failed}`);
