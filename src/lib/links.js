// School website and net price calculator links come from what schools report to the federal government,
// and some are out of date. The monthly link check (scripts/check-links.mjs) opens each one in a real
// browser; links that fail there are left off the page rather than sending students to a dead end.
const check = Object.values(import.meta.glob('../../data/linkcheck/latest.json', { eager: true, import: 'default' }))[0];
const broken = new Set((check?.links || []).filter((l) => l.kind === 'broken' && /browser/.test(l.via || '')).map((l) => l.url));

export function schoolLink(u) {
  if (!u) return null;
  const url = /^https?:\/\//.test(u) ? u : `https://${u}`;
  if (/^https?:\/\/(www\.)?https?\/\//.test(url) || broken.has(url)) return null; // malformed or confirmed broken
  return url;
}
