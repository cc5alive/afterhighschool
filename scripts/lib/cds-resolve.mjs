import { fetchDocText, norm } from './doc-text.mjs';

// A source URL can be the CDS document itself or a school page that links to it. For a page,
// follow the link to the newest CDS (2023-24 or later), preferring PDF/Excel files, up to two levels deep.
export const yearOf = (s) => {
  const t = s.toLowerCase();
  let best = 0;
  for (const m of t.matchAll(/(20\d\d)\s*[-_–]?\s*(?:20)?(\d\d)/g)) {
    const a = Number(m[1]), b = Number(m[2]);
    if (b === (a + 1) % 100 && a >= 2015 && a <= 2030) best = Math.max(best, a);
  }
  for (const m of t.matchAll(/cds[\s_-]*(\d\d)[\s_-]?(\d\d)/g)) {
    const a = 2000 + Number(m[1]);
    if (Number(m[2]) === (a + 1) % 100) best = Math.max(best, a);
  }
  return best;
};
async function rawHtml(url) {
  try {
    const r = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (compatible; afterhighschool-factcheck/1.0)' }, signal: AbortSignal.timeout(30000) });
    if (!r.ok || !/html/i.test(r.headers.get('content-type') || '')) return null;
    return { html: await r.text(), url: r.url };
  } catch { return null; }
}
export const looksLikeCds = (text) => /percent who had gpa|who applied|early decision applications|relative importance/.test(text || '');
export async function resolveCds(url, depth = 2) {
  const doc = await fetchDocText(url, { timeout: 60000 });
  if (doc.text == null || doc.kind !== 'html' || looksLikeCds(doc.text) || depth === 0) return { doc, url: doc.finalUrl || url };
  const page = await rawHtml(url);
  if (!page) return { doc, url };
  const links = [];
  for (const m of page.html.matchAll(/<a\b[^>]*href\s*=\s*["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    let href; try { href = new URL(m[1], page.url).toString(); } catch { continue; }
    const label = norm(m[2]) + ' ' + decodeURIComponent(href).toLowerCase();
    if (!/common.?data.?set|\bcds\b|cds[_-]/.test(label)) continue;
    const y = yearOf(label);
    const file = /\.(pdf|xlsx?)(\?|$)/i.test(href);
    links.push({ href, y, file, score: y * 10 + (file ? 5 : 0) });
  }
  links.sort((a, b) => b.score - a.score);
  for (const l of links.slice(0, 4)) {
    if (l.y && l.y < 2023) break;
    const r = l.file ? { doc: await fetchDocText(l.href, { timeout: 60000 }), url: l.href } : await resolveCds(l.href, depth - 1);
    if (r.doc.text && looksLikeCds(r.doc.text)) return { ...r, year: l.y ? `${l.y}-${l.y + 1}` : null };
  }
  return { doc, url };
}

