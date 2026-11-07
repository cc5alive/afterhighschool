// Debug helper: writes the text and table rows the CDS reader gets from each document, so the
// label patterns in extract-cds.mjs can be tuned. Usage: node scripts/dump-cds-text.mjs slug [slug...]
// Uses the school's entry in data/cds/sources.json (following landing pages like the reader does),
// or its draft's source URL.
import fs from 'node:fs';
import { resolveCds, closeBrowser, cdsLinks, getDoc, rawHtml } from './lib/cds-resolve.mjs';
const sources = JSON.parse(fs.readFileSync('data/cds/sources.json', 'utf8'));
fs.mkdirSync('cds-dump', { recursive: true });
for (const slug of process.argv.slice(2)) {
  const p = `data/cds/drafts/${slug}.json`;
  const url = sources[slug]?.url || (fs.existsSync(p) && JSON.parse(fs.readFileSync(p, 'utf8')).source?.url);
  if (!url) continue;
  let r;
  try { r = await resolveCds(url); } catch (e) { fs.writeFileSync(`cds-dump/${slug}.txt`, `${url}\nerror ${e.message}\n`); continue; }
  const d = r.doc;
  // When the source is a page that didn't lead to a CDS, say which links were tried and what came back.
  let probe = '';
  if (d.kind === 'html' && !(d.rows || []).length) {
    try {
      const page = await rawHtml(url);
      const links = page ? cdsLinks(page.html, page.url) : [];
      probe = `links: ${links.length}\n`;
      for (const l of links.slice(0, 4)) {
        const g = (await getDoc(l.href)).doc;
        probe += `${l.y} file=${l.file} ${l.href.replace(/\?.*/, '?…')} -> ${g.kind} ${g.status} ${(g.text || '').slice(0, 120).replace(/\s+/g, ' ')}\n`;
      }
    } catch (e) { probe += `probe error ${e.message}\n`; }
  }
  fs.writeFileSync(`cds-dump/${slug}.txt`, `${r.url || url}\n${d.kind} ${d.status}\n${probe}\n` + (d.rows || []).map((row) => row.map((c) => `${Math.round(c.x)}:${c.s}`).join(' | ')).join('\n'));
}
await closeBrowser();
