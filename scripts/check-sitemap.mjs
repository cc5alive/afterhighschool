// Runs after every build and fails it if the sitemaps and the pages disagree, so a bad build never deploys.
// Checks every URL in every sitemap:
//   - the page exists in dist/ and isn't blocked by robots.txt
//   - it has no noindex tag (a hidden page must never be in a sitemap)
//   - its canonical link points to itself
//   - it's listed once, on our own domain, with a valid lastmod that isn't in the future
// Also fails if a sitemap section shrinks sharply compared with scripts/sitemap-baseline.json, which is
// how we'd notice pages dropping out of search by accident. When a drop is intended (a school closes,
// a section is retired), update the baseline: node scripts/check-sitemap.mjs --update-baseline
// Indexable pages that no sitemap lists are reported as warnings, not errors.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://afterhighschool.me';
const BASELINE = 'scripts/sitemap-baseline.json';
const update = process.argv.includes('--update-baseline');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);

const read = (p) => fs.readFileSync(p, 'utf8');
const locs = (xml, tag) => [...xml.matchAll(new RegExp(`<${tag}>\\s*<loc>([^<]+)</loc>(?:\\s*<lastmod>([^<]+)</lastmod>)?`, 'g'))].map((m) => ({ loc: m[1].trim(), lastmod: m[2]?.trim() }));

// The file Cloudflare serves for a path: /x -> x.html or x/index.html, / -> index.html.
function fileFor(p) {
  const clean = decodeURIComponent(p).replace(/\/$/, '');
  const options = clean === '' ? ['index.html'] : [`${clean.slice(1)}.html`, `${clean.slice(1)}/index.html`];
  return options.map((o) => path.join(DIST, o)).find((f) => fs.existsSync(f)) || null;
}

const disallowed = (() => {
  const txt = fs.existsSync(`${DIST}/robots.txt`) ? read(`${DIST}/robots.txt`) : '';
  return [...txt.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
})();

const noindex = (html) => /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
const canonicalOf = (html) => html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] || null;

if (!fs.existsSync(`${DIST}/sitemap.xml`)) {
  console.error('check-sitemap: dist/sitemap.xml is missing');
  process.exit(1);
}

const today = new Date(Date.now() + 864e5).toISOString().slice(0, 10); // a day of slack for time zones
const seen = new Set();
const counts = {};
const index = locs(read(`${DIST}/sitemap.xml`), 'sitemap');
if (!index.length) err('sitemap.xml lists no sitemaps');

for (const { loc } of index) {
  if (!loc.startsWith(`${SITE}/`)) { err(`sitemap index points off-site: ${loc}`); continue; }
  const file = path.join(DIST, loc.slice(SITE.length));
  if (!fs.existsSync(file)) { err(`sitemap index lists ${loc}, but it wasn't built`); continue; }
  const xml = read(file);
  const section = path.basename(file, '.xml');
  if (Buffer.byteLength(xml) > 50 * 1024 * 1024) err(`${section}: over the 50 MB sitemap limit`);
  const urls = locs(xml, 'url');
  counts[section] = urls.length;
  if (urls.length > 50000) err(`${section}: ${urls.length} URLs, over the 50,000 limit`);
  for (const { loc: u, lastmod } of urls) {
    const where = `${section}: ${u}`;
    if (!u.startsWith(SITE)) { err(`${where} is not on ${SITE}`); continue; }
    if (seen.has(u)) err(`${where} is listed more than once`);
    seen.add(u);
    if (lastmod && (!/^\d{4}-\d{2}-\d{2}/.test(lastmod) || lastmod.slice(0, 10) > today)) err(`${where} has a bad lastmod (${lastmod})`);
    const p = u.slice(SITE.length) || '/';
    if (disallowed.some((d) => p.startsWith(d))) err(`${where} is blocked by robots.txt`);
    const f = fileFor(p);
    if (!f) { err(`${where} has no built page`); continue; }
    const html = read(f);
    if (noindex(html)) err(`${where} is marked noindex but is in the sitemap`);
    const c = canonicalOf(html);
    if (!c) err(`${where} has no canonical link`);
    else if (c.replace(/\/$/, '') !== u.replace(/\/$/, '')) err(`${where} has a canonical pointing elsewhere (${c})`);
  }
}

// Indexable pages no sitemap lists: usually a launched page someone forgot to add.
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? (d.name.startsWith('_') ? [] : walk(p)) : p.endsWith('.html') ? [p] : [];
  });
}
for (const f of walk(DIST)) {
  const html = read(f);
  if (noindex(html)) continue;
  const c = canonicalOf(html);
  if (!c || seen.has(c) || seen.has(c.replace(/\/$/, ''))) continue;
  const rel = f.slice(DIST.length + 1);
  if (rel === '404.html') continue;
  warnings.push(`indexable but in no sitemap: ${c}`);
}

// Compare section sizes with the baseline.
if (update) {
  fs.writeFileSync(BASELINE, JSON.stringify({ updated: new Date().toISOString().slice(0, 10), counts }, null, 2) + '\n');
  console.log(`check-sitemap: baseline updated: ${JSON.stringify(counts)}`);
} else if (fs.existsSync(BASELINE)) {
  const base = JSON.parse(read(BASELINE)).counts;
  for (const [section, before] of Object.entries(base)) {
    const now = counts[section] ?? 0;
    const allowed = Math.max(25, Math.round(before * 0.02));
    if (before - now > allowed) err(`${section} sitemap dropped from ${before} to ${now} URLs. If that's intended, run: node scripts/check-sitemap.mjs --update-baseline`);
  }
}

const total = Object.values(counts).reduce((a, b) => a + b, 0);
if (warnings.length) {
  console.warn(`check-sitemap: ${warnings.length} warning(s)`);
  for (const w of warnings.slice(0, 20)) console.warn(`  ${w}`);
  if (warnings.length > 20) console.warn(`  ...and ${warnings.length - 20} more`);
}
if (errors.length) {
  console.error(`check-sitemap: ${errors.length} problem(s) in ${total} sitemap URLs`);
  for (const e of errors.slice(0, 40)) console.error(`  ${e}`);
  if (errors.length > 40) console.error(`  ...and ${errors.length - 40} more`);
  process.exit(1);
}
console.log(`check-sitemap: ${total} URLs in ${Object.keys(counts).length} sitemaps, all live, indexable and self-canonical`);
