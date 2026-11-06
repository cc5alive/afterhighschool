// Debug helper: writes the text and table rows the CDS reader gets from each document, so the
// label patterns in extract-cds.mjs can be tuned. Usage: node scripts/dump-cds-text.mjs slug [slug...]
// Uses the school's entry in data/cds/sources.json (following landing pages like the reader does),
// or its draft's source URL.
import fs from 'node:fs';
import { resolveCds, closeBrowser } from './lib/cds-resolve.mjs';
const sources = JSON.parse(fs.readFileSync('data/cds/sources.json', 'utf8'));
fs.mkdirSync('cds-dump', { recursive: true });
for (const slug of process.argv.slice(2)) {
  const p = `data/cds/drafts/${slug}.json`;
  const url = sources[slug]?.url || (fs.existsSync(p) && JSON.parse(fs.readFileSync(p, 'utf8')).source?.url);
  if (!url) continue;
  let r;
  try { r = await resolveCds(url); } catch (e) { fs.writeFileSync(`cds-dump/${slug}.txt`, `${url}\nerror ${e.message}\n`); continue; }
  const d = r.doc;
  fs.writeFileSync(`cds-dump/${slug}.txt`, `${r.url || url}\n${d.kind} ${d.status}\n\n` + (d.rows || []).map((row) => row.map((c) => `${Math.round(c.x)}:${c.s}`).join(' | ')).join('\n'));
}
await closeBrowser();
