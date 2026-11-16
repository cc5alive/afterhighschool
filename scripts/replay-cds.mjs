// Replays the CDS reader on saved document rows, so a change to the reader can be tested on every
// college's real document without the network.
//   1. Run the "Dump CDS text (debug)" workflow with the slugs you want (it accepts all of them at once).
//   2. git fetch origin cds-debug && git --work-tree=/tmp/dump checkout FETCH_HEAD -- cds-dump
//   3. node scripts/replay-cds.mjs /tmp/dump/cds-dump before.json   (on main)
//      node scripts/replay-cds.mjs /tmp/dump/cds-dump after.json    (with your change)
//   4. Compare the two files: every difference is a value your change adds, removes or alters.
// In Nov 2026 the replay matched the stored reads for 10,724 of 10,726 values at 311 schools.
import fs from 'node:fs';
const mod = await import(new URL('./extract-cds.mjs', import.meta.url));
const D = process.argv[2];
const out = {};
for (const f of fs.readdirSync(D)) {
  const slug = f.slice(0, -4);
  const lines = fs.readFileSync(`${D}/${f}`, 'utf8').split('\n');
  const rows = lines.slice(3).filter((l) => l.length).map((l) => l.split(' | ').map((c) => { const i = c.indexOf(':'); return { x: Number(c.slice(0, i)), s: c.slice(i + 1) }; }).filter((c) => Number.isFinite(c.x)));
  if (rows.length < 50) continue;
  try { const v = mod.readValues(rows); out[slug] = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, x.value])); out[slug]._quotes = Object.fromEntries(Object.entries(v).map(([k, x]) => [k, x.quote])); }
  catch (e) { out[slug] = { _error: e.message }; }
}
fs.writeFileSync(process.argv[3], JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, 'schools replayed');
