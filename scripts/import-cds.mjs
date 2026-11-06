// Import Common Data Set extractions (Gemini JSONL) as drafts for checking.
// Usage: node scripts/import-cds.mjs path/to/file.jsonl
// Writes data/cds/drafts/<slug>.json. Unknown keys and values without a quote are dropped.
import fs from 'node:fs';
import { CDS_FIELDS, CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const file = process.argv[2];
if (!file) { console.error('Usage: node scripts/import-cds.mjs <file>'); process.exit(1); }
const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const slugs = new Set(schools.map((s) => s.slug));
const sources = fs.existsSync('data/cds/sources.json') ? JSON.parse(fs.readFileSync('data/cds/sources.json', 'utf8')) : {};
// Gemini sometimes names score keys the long way; map them to ours.
const ALIAS = { sat_composite_p25: 'sat_p25', sat_composite_p50: 'sat_p50', sat_composite_p75: 'sat_p75',
  act_composite_p25: 'act_p25', act_composite_p50: 'act_p50', act_composite_p75: 'act_p75' };
const bad = [], out = [];
const lines = fs.readFileSync(file, 'utf8').split('\n').filter((l) => l.trim());
lines.forEach((l, i) => { try { out.push(JSON.parse(l)); } catch { bad.push(i + 1); } });
fs.mkdirSync('data/cds/drafts', { recursive: true });

let written = 0;
for (const e of out) {
  const notes = [];
  if (!slugs.has(e.slug)) { console.log(`SKIP ${e.slug}: unknown slug`); continue; }
  // No document link from Gemini: fall back to the CDS page we already list for the school.
  if ((!e.source?.url || !/^https:\/\//.test(e.source.url)) && sources[e.slug]?.url) {
    e.source = { title: e.source?.title || 'Common Data Set', url: sources[e.slug].url };
    notes.push('used the CDS page from sources.json');
  }
  if (!e.source?.url || !/^https:\/\//.test(e.source.url)) { console.log(`SKIP ${e.slug}: no CDS document URL${e.concerns ? ` (${e.concerns})` : ''}`); continue; }
  const values = {};
  for (const [k0, v] of Object.entries(e.values || {})) {
    const k = ALIAS[k0] || k0;
    if (v == null || v.value == null || v.value === '') continue;
    if (!CDS_FIELDS[k] && !CDS_FACTORS[k]) { notes.push(`unknown key ${k}`); continue; }
    if (CDS_FACTORS[k] && !FACTOR_LEVELS.some((lv) => lv.toLowerCase() === String(v.value).toLowerCase())) { notes.push(`bad factor level for ${k}`); continue; }
    if (!CDS_FACTORS[k] && CDS_FIELDS[k].type !== 'yesno' && !v.quote) { notes.push(`no quote for ${k}`); continue; }
    values[k] = { value: v.value, quote: v.quote || null };
  }
  if (!Object.keys(values).length) { console.log(`SKIP ${e.slug}: no usable values`); continue; }
  const d = { slug: e.slug, cdsYear: e.cdsYear || null, source: { title: e.source.title || 'Common Data Set', url: e.source.url },
    researchedAt: e.researchedAt || null, values, concerns: e.concerns || null };
  fs.writeFileSync(`data/cds/drafts/${e.slug}.json`, JSON.stringify(d, null, 2) + '\n');
  written++;
  if (notes.length) console.log(`NOTE ${e.slug}: ${notes.join('; ')}`);
}
console.log(`Wrote ${written} CDS drafts; unreadable lines: ${bad.length ? bad.join(', ') : 'none'}.`);
