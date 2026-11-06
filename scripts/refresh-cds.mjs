// Monthly check for newer Common Data Sets. Colleges post each year's CDS through the fall and spring.
// - A source that is a school page: extract-cds.mjs --pages re-reads it, and the resolver follows the newest CDS link.
// - A source that is the CDS file itself: try the same address with the year moved forward
//   (CDS_2025-2026.pdf -> CDS_2026-2027.pdf). If that file exists and reads as a CDS, list it instead.
// Writes data/cds/sources.json and data/cds/_refresh.md. Runs in GitHub Actions (needs network).
import fs from 'node:fs';
import { resolveCds, yearOf, looksLikeCds, closeBrowser, downloadUrl } from './lib/cds-resolve.mjs';

const FILE = 'data/cds/sources.json';
const sources = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const isFile = (u) => /\.(pdf|xlsx?|docx)(\?|$)/i.test(u) || !!downloadUrl(u);
const two = (n) => String(n % 100).padStart(2, '0');

// Addresses to try for next year's file.
export function nextYearUrls(url) {
  const u = url.replace(/%20/g, ' ');
  const out = new Set();
  // 2025-2026, 2025_2026, 2025-26, 2025 2026, 202526
  out.add(u.replace(/(?<!\d)(20)(\d\d)([-_– ])?(20)?(\d\d)(?!\d)/g, (m, c, a, sep, c2, b) =>
    Number(b) === (Number(a) + 1) % 100 ? `${c}${two(+a + 1)}${sep || ''}${c2 || ''}${two(+b + 1)}` : m));
  // cds2425, CDS_24-25
  out.add(u.replace(/(cds[_-]?)(\d\d)([-_]?)(\d\d)(?!\d)/gi, (m, p, a, sep, b) =>
    Number(b) === (Number(a) + 1) % 100 ? `${p}${two(+a + 1)}${sep}${two(+b + 1)}` : m));
  // A single year in the file name (cds-2025.docx)
  if (!yearOf(u)) {
    const i = u.lastIndexOf('/');
    out.add(u.slice(0, i) + u.slice(i).replace(/(20[1-3]\d)(?!.*20[1-3]\d)/, (y) => String(+y + 1)));
  }
  out.delete(u);
  return [...out].map((x) => x.replace(/ /g, '%20'));
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  const found = [], tried = [];
  for (const [slug, src] of Object.entries(sources)) {
    if (!isFile(src.url) || downloadUrl(src.url)) continue; // pages are re-read by extract-cds --pages; share links can't be guessed
    const have = yearOf(`${src.url} ${src.year || ''}`) || 0;
    for (const u of nextYearUrls(src.url)) {
      tried.push(slug);
      let r;
      try { r = await resolveCds(u, 0); } catch { continue; }
      if (!r.doc.text || !looksLikeCds(r.doc.text)) continue;
      const y = yearOf(u) || (have ? have + 1 : 0);
      if (y <= have) continue;
      // Some hosts ignore the file name (docs.gato.txst.edu/<id>/<anything>), so the document itself must say the new year.
      if (yearOf(r.doc.text.slice(0, 6000)) < y) continue;
      sources[slug] = { url: u, year: `${y}-${y + 1}`, title: `Common Data Set ${y}-${y + 1}` };
      found.push(`| ${slug} | ${src.url} | ${u} |`);
      break;
    }
  }
  fs.writeFileSync(FILE, JSON.stringify(sources, null, 1));
  fs.writeFileSync('data/cds/_refresh.md', ['# CDS refresh', '', `Checked ${new Date().toISOString().slice(0, 10)}: tried next year's address for ${new Set(tried).size} schools, found ${found.length}.`, '',
    '| School | Was | Now |', '| --- | --- | --- |', ...found].join('\n') + '\n');
  console.log(`newer CDS files found for ${found.length} schools`);
  await closeBrowser();
}
