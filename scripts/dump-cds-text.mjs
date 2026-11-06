// Debug helper: writes the text and table rows the CDS reader gets from each document, so the
// label patterns in extract-cds.mjs can be tuned. Usage: node scripts/dump-cds-text.mjs slug [slug...]
import fs from 'node:fs';
import { fetchDocText } from './lib/doc-text.mjs';
const drafts = 'data/cds/drafts';
fs.mkdirSync('cds-dump', { recursive: true });
for (const slug of process.argv.slice(2)) {
  const p = `${drafts}/${slug}.json`;
  if (!fs.existsSync(p)) continue;
  const { source } = JSON.parse(fs.readFileSync(p, 'utf8'));
  const d = await fetchDocText(source.url, { timeout: 60000 });
  fs.writeFileSync(`cds-dump/${slug}.txt`, `${source.url}\n${d.kind}\n\n` + (d.rows || []).map((r) => r.map((c) => `${Math.round(c.x)}:${c.s}`).join(' | ')).join('\n'));
}
