// Re-checks every published "What's special" fact against its source page as it reads today.
// A fact is checked when it goes live, but pages change: tuition promises get new income limits, programs
// are renamed, pages move. For each fact this loads each source and looks for the fact's own specifics on it:
//   - every number in the fact ($345, 92%, 1876, 200,000)
//   - every distinctive name in the fact (capitalized words that aren't the school's own name)
// It never edits a fact. It writes data/highlights/recheck/latest.json and report.md, listing facts whose
// source no longer loads or no longer shows a number or name the fact states, for a person to look at.
// Usage: node scripts/recheck-highlights.mjs [--sample N]   (runs in GitHub Actions; needs pdfjs-dist for PDF sources)
import fs from 'node:fs';
import { norm, fetchDocText } from './lib/doc-text.mjs';

const DIR = 'data/highlights';
const sampleArg = process.argv.indexOf('--sample');
const SAMPLE = sampleArg > -1 ? Number(process.argv[sampleArg + 1]) : 0;
const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const nameOf = new Map(schools.map((s) => [s.slug, `${s.name} ${s.alias || ''} ${s.city}`]));

// Numbers as they'd appear on a page: "$200,000" -> 200000 / 200,000 / 200k; "92%" -> 92.
export function numbersIn(text) {
  const out = [];
  for (const m of String(text).matchAll(/\$?\d[\d,]*(?:\.\d+)?/g)) {
    const raw = m[0].replace(/^\$/, '').replace(/,(?=\d{3})/g, '').replace(/[,.]$/, '');
    if (raw && !out.includes(raw)) out.push(raw);
  }
  return out;
}
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
export function pageHasNumber(page, n) {
  const digits = page.replace(/(\d),(?=\d{3})/g, '$1');
  const esc = n.replace('.', '\\.');
  if (new RegExp(`(^|[^\\d.])${esc}(?![\\d]|\\.\\d)`).test(digits)) return true;
  const v = Number(n);
  if (Number.isInteger(v) && v <= 12 && new RegExp(`\\b${WORDS[v]}\\b`).test(page)) return true; // "four years"
  if (Number.isInteger(v) && v >= 1000 && v % 1000 === 0 && new RegExp(`(^|[^\\d.])${v / 1000}\\s?k\\b`).test(digits)) return true; // "$200k"
  if (Number.isInteger(v) && v >= 1e6 && v % 1e5 === 0 && new RegExp(`(^|[^\\d.])${String(v / 1e6).replace('.', '\\.')}\\s?million`).test(digits)) return true;
  return false;
}
// Distinctive names: capitalized words of 4+ letters that don't start a sentence and aren't part of the
// school's own name ("Rat Line", "Breakout", "Short Term", "Aggie Pathway").
const COMMON = new Set(['university', 'college', 'school', 'institute', 'students', 'state', 'january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'fall', 'spring', 'summer', 'winter', 'american', 'english', 'united', 'states', 'bachelor', 'master', 'associate', 'science', 'arts']);
export function namesIn(text, schoolName = '') {
  const own = new Set(norm(schoolName).split(/[^a-z]+/).filter(Boolean));
  const out = [];
  for (const sentence of String(text).split(/(?<=[.!?])\s+/)) {
    const words = sentence.split(/\s+/);
    words.forEach((w, i) => {
      const clean = w.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '').replace(/['’]s$/, '');
      if (i === 0 || clean.length < 4 || !/^[A-Z][a-z]/.test(clean)) return;
      const l = clean.toLowerCase();
      if (own.has(l) || COMMON.has(l) || out.includes(l)) return;
      out.push(l);
    });
  }
  return out;
}

async function main() {
  let facts = [];
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.json'))) {
    const h = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
    h.facts.forEach((fact, i) => facts.push({ slug: h.slug, i, text: fact.text, sources: fact.sources.map((s) => s.url), quotes: fact.sources.map((s) => s.quote).filter(Boolean), reviewedAt: h.reviewedAt }));
  }
  if (SAMPLE) { // every k-th fact: spread across schools, same sample on every run
    const k = Math.max(1, Math.floor(facts.length / SAMPLE));
    facts = facts.filter((_, i) => i % k === 0).slice(0, SAMPLE);
  }
  const urls = [...new Set(facts.flatMap((f) => f.sources))];
  const pages = new Map();
  let next = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (next < urls.length) { const u = urls[next++]; pages.set(u, await fetchDocText(u, { timeout: 25000 })); }
  }));
  const rows = [];
  for (const f of facts) {
    const loaded = f.sources.map((u) => pages.get(u)).filter((p) => p && p.text);
    const statuses = f.sources.map((u) => pages.get(u)?.status ?? 0);
    const row = { slug: f.slug, fact: f.i, text: f.text, sources: f.sources, statuses, reviewedAt: f.reviewedAt };
    if (!loaded.length) {
      // 401/403/429 and timeouts are sites turning away automated requests, not a missing page.
      row.result = statuses.every((s) => s === 404 || s === 410) ? 'source gone' : 'could not load';
    } else {
      const text = loaded.map((p) => p.text).join(' ');
      row.missingNumbers = numbersIn(f.text).filter((n) => !pageHasNumber(text, n));
      row.missingNames = namesIn(f.text, nameOf.get(f.slug)).filter((n) => !text.includes(n));
      // Facts published since Nov 2026 keep the sentence they were checked against.
      row.quoteGone = f.quotes.length > 0 && !f.quotes.some((q) => text.includes(norm(q)));
      row.result = row.missingNumbers.length ? 'number not on page' : row.quoteGone ? 'supporting sentence not on page' : row.missingNames.length ? 'name not on page' : 'ok';
    }
    rows.push(row);
  }
  const count = (r) => rows.filter((x) => x.result === r).length;
  const today = new Date().toISOString().slice(0, 10);
  fs.mkdirSync(`${DIR}/recheck`, { recursive: true });
  fs.writeFileSync(`${DIR}/recheck/latest.json`, JSON.stringify({ checkedAt: today, facts: rows.length, rows: rows.filter((r) => r.result !== 'ok') }, null, 1) + '\n');
  const line = (r) => `| ${r.slug} | ${r.result} | ${[...(r.missingNumbers || []), ...(r.missingNames || [])].join(', ') || r.statuses.join(', ')} | ${r.text.replace(/\|/g, '/').slice(0, 160)} | ${r.sources[0]} |`;
  fs.writeFileSync(`${DIR}/recheck/report.md`, [
    '# "What\'s special" recheck', '', `Checked ${rows.length} published facts against their sources on ${today}.`, '',
    `- Source still shows every number and name in the fact: ${count('ok')}`,
    `- A number in the fact isn't on the page now: ${count('number not on page')}`,
    `- The sentence the fact was checked against isn't on the page now: ${count('supporting sentence not on page')}`,
    `- A name in the fact isn't on the page now: ${count('name not on page')}`,
    `- Source page is gone (404/410): ${count('source gone')}`,
    `- Couldn't load the page (blocked, timed out or needs a browser): ${count('could not load')}`, '',
    'A flag means "look at this", not "this is wrong": pages spell numbers out, split content across tabs, or block automated requests.', '',
    '| School | Result | Missing / status | Fact | Source |', '| --- | --- | --- | --- | --- |',
    ...rows.filter((r) => r.result === 'number not on page' || r.result === 'source gone' || r.result === 'supporting sentence not on page').map(line),
    ...rows.filter((r) => r.result === 'name not on page').map(line),
    ...rows.filter((r) => r.result === 'could not load').map(line)
  ].join('\n') + '\n');
  console.log(`checked ${rows.length}: ok ${count('ok')}, number missing ${count('number not on page')}, name missing ${count('name not on page')}, gone ${count('source gone')}, not loaded ${count('could not load')}`);
}
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) await main();
