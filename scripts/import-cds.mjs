// Import Common Data Set extractions (Gemini JSONL) as drafts for checking.
// Usage: node scripts/import-cds.mjs path/to/file.jsonl
// Writes data/cds/drafts/<slug>.json. Unknown keys and values without a quote are dropped.
import fs from 'node:fs';
import { CDS_FIELDS, CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const file = process.argv[2];
if (!file) { console.error('Usage: node scripts/import-cds.mjs <file>'); process.exit(1); }
const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const slugs = new Set(schools.map((s) => s.slug));
const bad = [], out = [];
const lines = fs.readFileSync(file, 'utf8').split('\n').filter((l) => l.trim());
lines.forEach((l, i) => { try { out.push(JSON.parse(l)); } catch { bad.push(i + 1); } });
fs.mkdirSync('data/cds/drafts', { recursive: true });

let written = 0;
for (const e of out) {
  const notes = [];
  if (!slugs.has(e.slug)) { console.log(`SKIP ${e.slug}: unknown slug`); continue; }
  if (!e.source?.url || !/^https:\/\//.test(e.source.url)) { console.log(`SKIP ${e.slug}: no CDS document URL${e.concerns ? ` (${e.concerns})` : ''}`); continue; }
  const values = {};
  for (const [k, v] of Object.entries(e.values || {})) {
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
