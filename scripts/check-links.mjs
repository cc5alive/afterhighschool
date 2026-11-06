// Monthly broken-link check: every outside link in the built site (dist/), tested once.
// Writes data/linkcheck/latest.json and report.md. A link counts as broken only on 404/410 or a
// host that no longer exists; sites that block automated checks (401/403/429) are listed separately.
// Usage (after `npm run build`): node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';

const pages = new Map(); // url -> set of site paths linking to it
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) {
      const html = fs.readFileSync(p, 'utf8');
      const where = '/' + path.relative('dist', p).replace(/\.html$/, '').replace(/(^|\/)index$/, '');
      for (const m of html.matchAll(/<a\b[^>]*\bhref="(https?:\/\/[^"#]+)/g)) {
        const u = m[1].replace(/&amp;/g, '&');
        if (/^https?:\/\/(www\.)?afterhighschool\.me/.test(u)) continue;
        if (!pages.has(u)) pages.set(u, new Set());
        pages.get(u).add(where);
      }
    }
  }
}
walk('dist');
// College Scorecard school pages are one app that answers every ID; test one of them, not thousands.
let scorecardSample = null;
const urls = [...pages.keys()].filter((u) => {
  if (/collegescorecard\.ed\.gov\/school\//.test(u)) { scorecardSample ||= u; return false; }
  return true;
});
if (scorecardSample) urls.push(scorecardSample);

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';
async function check(u) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(u, { method, redirect: 'follow', headers: { 'user-agent': UA, accept: '*/*' }, signal: AbortSignal.timeout(25000) });
      if (method === 'HEAD' && (r.status >= 400 || r.status === 0)) continue; // many servers mishandle HEAD
      if (method === 'GET') r.body?.cancel().catch(() => {});
      return { status: r.status, final: r.url !== u ? r.url : undefined };
    } catch (e) {
      const code = e.cause?.code || e.name;
      if (method === 'GET') return { status: 0, error: code };
    }
  }
  return { status: 0, error: 'unknown' };
}
const classify = (r) => r.status >= 200 && r.status < 400 ? 'ok'
  : [404, 410].includes(r.status) || r.error === 'ENOTFOUND' || /ERR_NAME_NOT_RESOLVED/.test(r.error || '') ? 'broken'
  : [401, 403, 405, 406, 429, 999].includes(r.status) ? 'blocked' : 'error';

// A few requests at a time, and never more than two to one host at once.
const results = {};
const busy = new Map();
let i = 0;
async function worker() {
  while (i < urls.length) {
    const u = urls[i++];
    const host = new URL(u).host;
    while ((busy.get(host) || 0) >= 2) await new Promise((r) => setTimeout(r, 200));
    busy.set(host, (busy.get(host) || 0) + 1);
    results[u] = await check(u);
    busy.set(host, busy.get(host) - 1);
  }
}
await Promise.all(Array.from({ length: 24 }, worker));
// Re-test failures once, later, to rule out blips.
for (const u of urls.filter((u) => classify(results[u]) !== 'ok' && classify(results[u]) !== 'blocked')) {
  const again = await check(u);
  if (classify(again) === 'ok' || classify(again) === 'blocked') results[u] = again;
}

// Many sites answer automated requests with 404 or refuse them. Before calling a link broken,
// open it in a real browser; only links that fail there too are reported (and hidden on the site).
try {
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ userAgent: UA, locale: 'en-US' });
  for (const u of urls.filter((u) => classify(results[u]) === 'broken')) {
    const page = await ctx.newPage();
    try {
      const resp = await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const st = resp ? resp.status() : 0;
      if (st && st < 400) results[u] = { status: st, final: page.url() !== u ? page.url() : undefined, via: 'browser' };
      else {
        // Some sites block data-center traffic with a bare 404. Count it as confirmed only when the page itself says not found.
        const text = await page.evaluate(() => `${document.title} ${document.body ? document.body.innerText.slice(0, 2000) : ''}`).catch(() => '');
        results[u] = { ...results[u], status: st || results[u].status, via: 'browser', confirmed: /not found|404|no longer (exists|available)|doesn.t exist|page you requested|cannot be found|can.t be found/i.test(text) };
      }
    } catch (e) {
      // PDFs and downloads abort navigation; a download means the file exists.
      if (/download|ERR_ABORTED/i.test(e.message)) results[u] = { status: 200, via: 'browser (download)' };
      else results[u] = { ...results[u], via: 'browser', error: results[u].error || e.message.split('\n')[0].slice(0, 80), confirmed: /ERR_NAME_NOT_RESOLVED/.test(e.message) };
    } finally { await page.close(); }
  }
  await browser.close();
} catch (e) { console.log('browser recheck skipped:', e.message); }

const rows = urls.map((u) => ({ url: u, ...results[u], kind: classify(results[u]), pages: [...pages.get(u)].slice(0, 5), pageCount: pages.get(u).size }));
const count = (k) => rows.filter((r) => r.kind === k).length;
fs.mkdirSync('data/linkcheck', { recursive: true });
fs.writeFileSync('data/linkcheck/latest.json', JSON.stringify({ checkedAt: new Date().toISOString(), total: rows.length, ok: count('ok'), broken: count('broken'), blocked: count('blocked'), error: count('error'),
  links: rows.filter((r) => r.kind !== 'ok') }, null, 1) + '\n');
const line = (r) => `| ${r.url} | ${r.status || r.error} | ${r.pages.join(', ')}${r.pageCount > 5 ? ` (+${r.pageCount - 5})` : ''} |`;
fs.writeFileSync('data/linkcheck/report.md', [
  '# Link check', '', `Checked ${new Date().toISOString().slice(0, 10)}: ${rows.length} outside links. ${count('ok')} work, ${count('broken')} broken, ${count('error')} errors (timeouts, server errors), ${count('blocked')} blocked automated checks.`, '',
  '## Broken (404, 410 or the site no longer exists)', '', '| Link | Status | Linked from |', '| --- | --- | --- |', ...rows.filter((r) => r.kind === 'broken').map(line), '',
  '## Errors (check by hand; may be temporary)', '', '| Link | Status | Linked from |', '| --- | --- | --- |', ...rows.filter((r) => r.kind === 'error').map(line), ''
].join('\n'));
console.log(`${rows.length} links: ${count('ok')} ok, ${count('broken')} broken, ${count('error')} errors, ${count('blocked')} blocked`);
