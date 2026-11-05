// Import externally researched highlight drafts (e.g. from Gemini) for review.
// Usage: node scripts/import-highlights.mjs path/to/batch.json [--depth]
//   --depth  accept schools that already have published facts (for adding more facts to them);
//            new facts that repeat a published or drafted fact are skipped.
// Accepts a JSON array or JSON Lines. Valid entries are written to data/highlights/drafts/<slug>.json,
// which the site does NOT render. Each draft gets source-checked before it moves up to data/highlights/.
import fs from 'node:fs';

const file = process.argv.slice(2).find((a) => !a.startsWith('--'));
const DEPTH = process.argv.includes('--depth');
const key = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const readJson = (p) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null);
if (!file) { console.error('Usage: node scripts/import-highlights.mjs <file>'); process.exit(1); }

const raw = fs.readFileSync(file, 'utf8').trim();
const badLines = [];
const entries = raw.startsWith('[') ? JSON.parse(raw) : raw.split('\n').filter((l) => l.trim()).flatMap((l, i) => {
  try { return [JSON.parse(l)]; } catch { badLines.push(i + 1); return []; }
});

const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const slugs = new Set(schools.map((s) => s.slug));
const BAD_HOSTS = /(google\.|wikipedia\.|collegevine|niche\.com|usnews\.com|prepscholar|reddit\.|quora\.|collegeconfidential|empowerly|orieladmissions|chatgpt|openai|gemini)/i;

fs.mkdirSync('data/highlights/drafts', { recursive: true });
const report = { written: [], skipped: [] };

for (const e of entries) {
  const problems = [];
  if (!slugs.has(e.slug)) problems.push('unknown slug');
  const published = readJson(`data/highlights/${e.slug}.json`);
  const draft = readJson(`data/highlights/drafts/${e.slug}.json`);
  if (published && !DEPTH) problems.push('already published');
  const seen = new Set([...(published?.facts || []), ...(draft?.facts || [])].map((f) => key(f.text)));
  const facts = (e.facts || []).filter((f) => {
    const p = [];
    if (!f.text || f.text.length < 40 || f.text.length > 360) p.push('text length');
    if (!Array.isArray(f.sources) || !f.sources.length) p.push('no sources');
    for (const s of f.sources || []) {
      if (!/^https:\/\//.test(s.url || '')) p.push(`bad url ${s.url}`);
      else if (BAD_HOSTS.test(new URL(s.url).hostname)) p.push(`weak source ${s.url}`);
    }
    if (seen.has(key(f.text))) p.push('repeats an existing fact');
    if (p.length) problems.push(`fact dropped (${p.join(', ')}): ${String(f.text).slice(0, 60)}…`);
    return !p.length;
  });
  if (!slugs.has(e.slug) || !facts.length || (published && !DEPTH)) {
    report.skipped.push({ slug: e.slug, problems });
    continue;
  }
  const out = {
    slug: e.slug,
    reviewedBy: 'draft-external',
    reviewedAt: null,
    researchedAt: e.researchedAt || null,
    facts: [...(draft?.facts || []), ...facts.map((f) => ({ text: f.text, sources: f.sources.map((s) => ({ title: s.title, url: s.url, quote: s.quote || null })) }))],
    concerns: e.concerns || null
  };
  fs.writeFileSync(`data/highlights/drafts/${e.slug}.json`, JSON.stringify(out, null, 2) + '\n');
  report.written.push({ slug: e.slug, facts: facts.length, problems });
}

console.log(`Wrote ${report.written.length} drafts, skipped ${report.skipped.length}, unreadable lines: ${badLines.length ? badLines.join(', ') : 'none'}.`);
for (const s of report.skipped) console.log(`SKIP ${s.slug}: ${s.problems.join('; ')}`);
for (const w of report.written.filter((x) => x.problems.length)) console.log(`NOTE ${w.slug}: ${w.problems.join('; ')}`);
