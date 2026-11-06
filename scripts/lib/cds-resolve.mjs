import { fetchDocText, docFromBuffer, norm } from './doc-text.mjs';

// Browser fallback for sites that block plain requests (403s, bot checks) or build their link lists
// with JavaScript. Uses Playwright when it's installed; otherwise these sites just stay unread.
let browser = null, ctx = null;
async function context() {
  if (ctx) return ctx;
  let pw; try { pw = await import('playwright'); } catch { return null; }
  browser = await pw.chromium.launch();
  ctx = await browser.newContext({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36', locale: 'en-US' });
  return ctx;
}
export async function closeBrowser() { if (browser) await browser.close(); browser = null; ctx = null; }
async function browserDoc(url) {
  const c = await context();
  if (!c) return null;
  const page = await c.newPage();
  try {
    let html = null, finalUrl = url;
    try {
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(2500);
      finalUrl = page.url();
      if (resp && /html/i.test(resp.headers()['content-type'] || '')) html = await page.content();
    } catch { /* PDFs start a download instead of rendering: fetch them with the context below */ }
    if (html) {
      const d = await docFromBuffer(Buffer.from(html), 'text/html', finalUrl);
      return { doc: { ...d, status: 200, finalUrl }, html, url: finalUrl };
    }
    const r = await c.request.get(url, { timeout: 60000 });
    if (!r.ok()) return null;
    const d = await docFromBuffer(Buffer.from(await r.body()), r.headers()['content-type'] || '', url);
    return { doc: { ...d, status: r.status(), finalUrl: url }, html: null, url };
  } catch { return null; } finally { await page.close(); }
}
const blocked = (doc) => doc.text == null && [0, 401, 403, 405, 406, 429, 503].includes(doc.status);
// Some schools post their CDS on Google Drive, Google Sheets or Box. Their share links open a viewer,
// so read the file through the host's download link instead (the share link stays the cited source).
export function downloadUrl(u) {
  let m;
  if ((m = u.match(/^https:\/\/drive\.google\.com\/file\/d\/([\w-]+)/))) return `https://drive.google.com/uc?export=download&id=${m[1]}`;
  if ((m = u.match(/^https:\/\/docs\.google\.com\/spreadsheets\/d\/([\w-]+)/))) return `https://docs.google.com/spreadsheets/d/${m[1]}/export?format=xlsx`;
  if ((m = u.match(/^https:\/\/([\w-]+\.)?box\.com\/s\/(\w+)/))) return `https://${m[1] || 'app.'}box.com/shared/static/${m[2]}`;
  return null;
}
async function getDoc(url, mapped = false) {
  const dl = mapped ? null : downloadUrl(url);
  if (dl) {
    const d = await getDoc(dl, true);
    return { doc: { ...d.doc, finalUrl: url }, html: d.html };
  }
  const doc = await fetchDocText(url, { timeout: 60000 });
  if (!blocked(doc)) return { doc, html: null };
  const b = await browserDoc(url);
  return b ? { doc: b.doc, html: b.html } : { doc, html: null };
}

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
function cdsLinks(html, base) {
  const links = [];
  for (const m of html.matchAll(/<a\b[^>]*href\s*=\s*["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    let href; try { href = new URL(m[1].replace(/&amp;/g, '&'), base).toString(); } catch { continue; }
    let decoded = href; try { decoded = decodeURIComponent(href); } catch { /* keep raw */ }
    const label = norm(m[2]) + ' ' + decoded.toLowerCase();
    if (!/common.?data.?set|\bcds\b|cds[_-]/.test(label)) continue;
    const y = yearOf(label);
    const file = /\.(pdf|xlsx?)(\?|$)/i.test(href) || !!downloadUrl(href);
    links.push({ href, y, file, score: y * 10 + (file ? 5 : 0) });
  }
  return links.sort((a, b) => b.score - a.score);
}

export async function resolveCds(url, depth = 2) {
  const { doc, html: browserHtml } = await getDoc(url);
  if (doc.text == null || doc.kind !== 'html' || looksLikeCds(doc.text) || depth === 0) return { doc, url: doc.finalUrl || url };
  let links = [];
  const page = browserHtml ? { html: browserHtml, url: doc.finalUrl || url } : await rawHtml(url);
  if (page) links = cdsLinks(page.html, page.url);
  if (!links.length && !browserHtml) {
    // The link list may be built by JavaScript: look again in a real browser.
    const b = await browserDoc(url);
    if (b?.html) links = cdsLinks(b.html, b.url);
  }
  for (const l of links.slice(0, 4)) {
    if (l.y && l.y < 2023) break;
    const r = l.file ? { doc: (await getDoc(l.href)).doc, url: l.href } : await resolveCds(l.href, depth - 1);
    if (r.doc.text && looksLikeCds(r.doc.text)) return { ...r, year: l.y ? `${l.y}-${l.y + 1}` : null };
  }
  return { doc, url };
}
