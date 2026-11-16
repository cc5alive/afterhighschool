// Reads each school's Common Data Set document straight from its URL and pulls out the standard
// CDS values by their printed labels, so every value comes with the exact line it was read from.
// Usage: node scripts/extract-cds.mjs   (reads data/cds/sources.json: { "<slug>": { "url", "year", "title" } };
//        skips schools that already have a draft; runs in GitHub Actions with pdfjs-dist and xlsx installed)
// Writes data/cds/extracted/<slug>.json (same shape as Gemini drafts). Every value is read from the document
// itself, with the row it came from as its quote; scripts/build-cds.mjs sanity-checks and publishes.
import fs from 'node:fs';
import crypto from 'node:crypto';
const hashOf = (p) => { try { return crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex').slice(0, 12); } catch { return null; } };
import { norm, docFromBuffer } from './lib/doc-text.mjs';
import { resolveCds, yearOf, looksLikeCds, closeBrowser, downloadUrl } from './lib/cds-resolve.mjs';
import { CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const SOURCES = 'data/cds/sources.json';
const DIR = 'data/cds/extracted';
fs.mkdirSync(DIR, { recursive: true });
const sources = JSON.parse(fs.readFileSync(SOURCES, 'utf8'));
const force = process.argv.includes('--force');
const pages = process.argv.includes('--pages'); // monthly refresh: re-read sources that are school pages, in case a newer CDS was posted
// Bump when the reading rules change: schools read by an older version are read again.
const READER_VERSION = 13; // 13: C1 gender-row sums kept beside residency totals; 12: split "first | - | time" labels, "waiting list", C9 percent/number columns, residency tables; 6: D2 transfer admissions; 7: C18 deferred admission; 8: answer codes in the official Excel template; 9: code values must nest, no mixed C11 sets; 10: no C11 from split groups only; 11: "students admitted" C1 label (WPI)
// A school needs a fresh read when the reader changed or its listed source changed.
const isFile = (u) => /\.(pdf|xlsx?|docx)(\?|$)/i.test(u) || !!downloadUrl(u);
const current = (slug, src) => {
  try {
    const e = JSON.parse(fs.readFileSync(`${DIR}/${slug}.json`, 'utf8'));
    if (e.readerVersion !== READER_VERSION) return false;
    if (src.mirror && (e.mirror !== src.mirror || e.mirrorHash !== hashOf(src.mirror))) return false;
    if (JSON.stringify(e.extra || []) !== JSON.stringify(src.extra || [])) return false;
    if (e.sourceUrl) return e.sourceUrl === src.url;
    return !isFile(src.url) || e.source?.url === src.url;
  } catch { return false; }
};
// Sources that failed are remembered so each run doesn't spend minutes re-trying them.
// A failed school is tried again when its URL in sources.json changes, after 14 days, or with --retry.
const FAILED = 'data/cds/_failed.json';
const failed = fs.existsSync(FAILED) ? JSON.parse(fs.readFileSync(FAILED, 'utf8')) : {};
const retry = force || process.argv.includes('--retry');
const today = new Date().toISOString().slice(0, 10);
const fresh = (f, url) => f && f.url === url && (Date.now() - Date.parse(f.at)) < 14 * 864e5;
const fail = (slug, url, reason) => { failed[slug] = { url, at: today, reason }; log.push(`${slug}: ${reason}`); };

// Each CDS value is read from the table row that carries its printed label. Values in the same
// row (or a numbers-only row right below, as wrapped PDF tables often have) are the candidates.
// pick: 'first' = first number after the label; 'last' = rightmost column (the C1 "Total" column).
const ROWS = {
  applied_total: [/^total first-time, first-years? (?:\(degree-seeking\) )?(?:students )?who applied/, 'count', 'last'],
  admitted_total: [/^total first-time, first-years? (?:\(degree-seeking\) )?(?:students )?(?:who were )?admitted/, 'count', 'last'],
  enrolled_total: [/^total (?:full-time )?first-time, first-years? (?:\(degree-seeking\) )?(?:students )?(?:who )?enrolled/, 'count', 'last'],
  waitlist_offered: [/^number of qualified applicants offered a place on (?:the )?wait(?:ing)? ?list/, 'count', 'first'],
  waitlist_accepted: [/^number accepting a place on (?:the )?wait(?:ing)? ?list/, 'count', 'first'],
  waitlist_admitted: [/^number of wait-?listed students admitted/, 'count', 'first'],
  sat_submit_pct: [/^percent submitting sat scores/, 'pct', 'first'],
  act_submit_pct: [/^percent submitting act scores/, 'pct', 'first'],
  rank_top10_pct: [/^percent in top tenth of high school graduating class/, 'pct', 'first'],
  rank_top25_pct: [/^percent in top quarter of high school graduating class/, 'pct', 'first'],
  rank_submit_pct: [/^percent of total first-time, first-year students who submitted high school class rank/, 'pct', 'first'],
  gpa_400_pct: [/^percent who had gpa of 4\.0/, 'pct', 'first'],
  gpa_375_pct: [/^percent who had gpa between 3\.75 and 3\.99/, 'pct', 'first'],
  gpa_350_pct: [/^percent who had gpa between 3\.50 and 3\.74/, 'pct', 'first'],
  gpa_325_pct: [/^percent who had gpa between 3\.25 and 3\.49/, 'pct', 'first'],
  gpa_300_pct: [/^percent who had gpa between 3\.00 and 3\.24/, 'pct', 'first'],
  gpa_250_pct: [/^percent who had gpa between 2\.50 and 2\.99/, 'pct', 'first'],
  gpa_200_pct: [/^percent who had gpa between 2\.0 and 2\.49/, 'pct', 'first'],
  gpa_100_pct: [/^percent who had gpa between 1\.0 and 1\.99/, 'pct', 'first'],
  gpa_below1_pct: [/^percent who had gpa below 1\.0/, 'pct', 'first'],
  gpa_average: [/^average high school gpa\b/, 'gpa', 'first'],
  gpa_submit_pct: [/^percent (?:of total first-time, first-year students who submitted high school gpa|submitting gpa)/, 'pct', 'first'],
  ed_applied: [/^number of early decision applications received by (?:your|the) institution/, 'count', 'first'],
  ed_admitted: [/^number of applicants admitted under early decision plan/, 'count', 'first'],
  ea_applied: [/^number of early action applications received by (?:your|the) institution/, 'count', 'first'],
  ea_admitted: [/^number of applicants admitted under early action plan/, 'count', 'first']
};

const parse = (s, type) => {
  const t = s.replace(/[,\s]/g, '').replace(/%$/, '');
  if (!/^\d+(\.\d+)?$/.test(t)) return null;
  const v = Number(t);
  if (type === 'pct') return v <= 100 ? v : null;
  if (type === 'gpa') return v >= 1 && v <= 5 && t.includes('.') ? v : null;
  return Number.isInteger(v) ? v : null;
};
const rowText = (r) => norm(r.map((c) => c.s).join(' '));
// Some PDFs print the item code (C1, C11 …) in front of each row's label, and some say "(freshman)".
// Some fillable 2025-26 PDFs embed a font whose letters come out shifted by 29 code points, so
// "unknown sex" reads "XQNQRZQ VH[" (UCLA, RIT, Chapman). Put those two words back so the row is recognized.
const unshift = (t) => t.replace(/\u0003/g, ' ').replace(/xqnqrzq/g, 'unknown').replace(/vh\[/g, 'sex').replace(/\s+/g, ' ').trim();
// Some PDFs split a label into cells at each hyphen or comma ("Total first | - | time | , | first | - | year",
// Stanford, Yale) or inside a word ("year m | ales", Michigan). Join those back so the label is recognized.
const rejoin = (t) => t.replace(/([a-z]) ?- ?(?=[a-z])/g, '$1-').replace(/ ,/g, ',').replace(/\b(fe)?m ales\b/g, '$1males').replace(/\byear s who\b/g, 'years who');
const labelText = (r) => rejoin(unshift(rowText(r))).replace(/^c\d{1,2}[a-z]?\.?\s+/, '').replace(/\s*\(freshmen?\)/g, '');
const isNumbersOnly = (r) => r.length > 0 && r.every((c) => /^[\d,.\s%]+$/.test(c.s));
const isFooter = (r) => /common data set|page \d|^totals? should/.test(rowText(r));

function readRows(rows) {
  const out = {};
  if (!rows) return out;
  const gpaCols = {};
  for (const [key, [re, type, pick]] of Object.entries(ROWS)) {
    for (let i = 0; i < rows.length && !out[key]; i++) {
      const text = labelText(rows[i]);
      if (!re.test(text)) continue;
      let cells = rows[i], quoteRows = [rows[i]];
      // A row whose answer cells hold placeholders ("C or t", "n/a") is complete: the number on the next
      // row is something else (Pitt's page number "13" under its blank residency table).
      const placeholder = rows[i].some((c) => /^(?:c or t|n\/?a)$/.test(norm(c.s)));
      // Nor is a row whose label is another question: a blank answer stays blank (Bowdoin's empty "Number
      // accepting a place on the waiting list" took the number admitted from the row below).
      const nextIsQuestion = rows[i + 1] && Object.values(ROWS).some(([r]) => r.test(labelText(rows[i + 1])));
      if (!placeholder && !nextIsQuestion && !cells.some((c) => parse(c.s, type) != null) && rows[i + 1] && !isFooter(rows[i + 1])
          && (isNumbersOnly(rows[i + 1]) || rowText(rows[i + 1]).replace(/[\d.,%\s]/g, '').length < 40)) {
        cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]);
      } else if (!placeholder && pick === 'last' && rows[i + 1] && isNumbersOnly(rows[i + 1]) && !isFooter(rows[i + 1])) {
        cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]);
      }
      // Numbers that are part of the label itself ("4.0", "3.75 and 3.99") can sit in their own cells:
      // skip the cells that make up the matched label, then only cells further right count.
      const matchLen = (text.match(re) || [''])[0].replace(/\s/g, '').length;
      let used = 0, k = 0;
      const label = rows[i].map((c) => norm(c.s).replace(/^c\d{1,2}[a-z]?\.?$/, '')).map((t) => t.replace(/\s*\(freshmen?\)/g, ''));
      while (k < rows[i].length && used < matchLen) { used += label[k].replace(/\s/g, '').length; k++; }
      const labelEndX = rows[i][Math.max(0, k - 1)].x;
      // In the Excel template's answer sheet a row can carry a second, unrelated question to the right
      // ("... class | C.1125 | Percent who had GPA between 3.00 and 3.24 | 0.054"). Nothing from that
      // other question's code onward belongs to this row.
      const codeX = Math.min(...rows[i].filter((c, ci) => ci >= k && /^[A-J]\.\d{3,4}$/.test(c.s.trim())).map((c) => c.x), Infinity);
      const usable = (c, ci) => (ci >= k || cells !== rows[i] && ci >= rows[i].length) && c.x > labelEndX && c.x < codeX && parse(c.s, type) != null;
      let nums = cells.filter(usable).sort((a, b) => a.x - b.x);
      if (!nums.length) continue;
      if (pick === 'last' && cells !== rows[i]) {
        // The row's own numbers come first: if they already hold a total (one number that equals the sum
        // of the others), the numbers-only row below is something else (UW-Stevens Point 2025-26).
        const own = rows[i].filter((c, ci) => ci >= k && c.x > labelEndX && c.x < codeX && parse(c.s, type) != null).sort((a, b) => a.x - b.x);
        const ov = own.map((c) => parse(c.s, type)), os = ov.reduce((a, b) => a + b, 0);
        if (ov.some((x) => ov.length > 2 && Math.abs(x * 2 - os) <= 2)) { nums = own; quoteRows = [rows[i]]; }
      }
      let value = parse(nums[0].s, type), fromResidency = false;
      if (/^gpa_\d|^gpa_below/.test(key)) { gpaCols[key] = nums.map((c) => parse(c.s, type)); }
      if (pick === 'last') {
        // C1 rows list men, women, another gender and a total, but schools order the columns differently
        // (total first in the 2025-26 template, last in older ones). The total is the number that equals
        // the sum of the others; failing that, the largest.
        const vals = nums.map((c) => parse(c.s, type));
        const sum = vals.reduce((a, b) => a + b, 0);
        value = vals.length === 1 ? vals[0] : (vals.find((x) => vals.length > 2 && Math.abs(x * 2 - sum) <= 2) ?? null);
        // The optional residency table repeats these labels with Total, In-State, Out-of-State, International
        // and Unknown columns, sometimes split over two tables (Florida 2025-26) or with only the Total filled
        // in (Middlebury, Clark). There, a number counts only if it adds up as the total or sits under "Total";
        // a lone number under "International" is the international applicants, not the total.
        // A PDF that splits digits ("2,56 | 1", Ohio Wesleyan) gives fragments there, so a total must be at
        // least as large as every other number on its row.
        const above = rows.slice(Math.max(0, i - 4), i);
        const residency = above.some((r) => /residency|in-state|out-of-state/.test(labelText(r)));
        if (residency && (value == null || vals.length < 3)) {
          const heads = above.flat().filter((c) => { const t = norm(c.s); return t && t.length < 20 && !/\d/.test(t); });
          const underTotal = (c) => heads.length && norm(heads.reduce((a, b) => (Math.abs(b.x - c.x) < Math.abs(a.x - c.x) ? b : a)).s) === 'total';
          const t = nums.find(underTotal);
          value = t ? parse(t.s, type) : null;
        }
        if (residency && (nums.some((c) => /\d,\d{0,2}(?!\d)/.test(c.s)) || vals.some((x) => x > value))) continue;
        fromResidency = residency;
        if (!value) continue; // a blank or broken total field: C1 falls back to the gender rows below
      }
      out[key] = { value, quote: quoteRows.map(rowText).join(' '), ...(fromResidency ? { residency: true } : {}) };
    }
  }
  // C11 now has up to three columns (students who sent test scores, who didn't, and all students).
  // Use the column that adds up to 100% — the rightmost one ("all students") when several do.
  const keys = Object.keys(gpaCols);
  const width = Math.max(0, ...keys.map((k) => gpaCols[k].length));
  if (width > 1) {
    const ok = (t) => (t >= 95 && t <= 105) || (t >= 0.95 && t <= 1.05);
    for (let j = width - 1; j >= 0; j--) {
      const t = keys.reduce((a, k) => a + (gpaCols[k][j] ?? 0), 0);
      if (ok(t)) { for (const k of keys) if (gpaCols[k][j] != null) out[k].value = gpaCols[k][j]; break; }
    }
  }
  return out;
}

// C1 also lists applicants, admits and enrollees by gender. When the total row is blank, broken ("##")
// or reads 0, the total is the sum of those rows.
// Matched with the spaces taken out: some PDFs split words at random ("f | irst", "ap | plied", Hawaii 2025-26),
// and a gender row whose label isn't recognized would silently leave its students out of the total.
const C1_VERB = { applied_total: /whoapplied$/, admitted_total: /(whowere)?admitted$/, enrolled_total: /(who)?enrolled$/ };
const squash = (t) => t.replace(/\s+/g, '');
function c1FromGender(rows, out) {
  for (const [key, verb] of Object.entries(C1_VERB)) {
    if (out[key]?.value) continue;
    let sum = 0, n = 0; const quote = [], parts = [];
    for (let i = 0; i < (rows || []).length; i++) {
      let r = rows[i];
      if (!/^totalfirst-time,first-years?(men|women|males|females|studentsof|ofanother|ofunknown|another|unknown)/.test(squash(labelText(r)))) continue;
      // Long labels wrap: the number and the rest of the label can sit on the next one or two rows.
      // A row that already has its number and its verb is complete: a numbers-only row below it belongs
      // to something else (UW-Stevens Point 2025-26 has a stray "7902 7902" under its enrolled rows).
      const complete = () => r.slice(1).some((c) => parse(c.s, 'count') != null) && verb.test(squash(labelText(r.filter((c) => parse(c.s, 'count') == null))));
      for (let j = i + 1; j <= i + 2 && rows[j] && !complete(); j++) {
        const t = rowText(rows[j]);
        if (/^total |first-time, first-year student/.test(t) || isFooter(rows[j])) break;
        if (isNumbersOnly(rows[j]) || t.replace(/[\d,]/g, '').trim().length < 25) r = r.concat(rows[j]); else break;
      }
      const text = squash(labelText(r.filter((c) => parse(c.s, 'count') == null)));
      if (!verb.test(text)) continue;
      const nums = r.slice(1).map((c) => parse(c.s, 'count')).filter((x) => x != null);
      parts.push(nums.length ? nums[nums.length - 1] : 0);
      n++; quote.push(rowText(r));
    }
    // A college can put its total in the last gender row (Florida A&M 2025-26 prints men, women and then
    // their sum on the "unknown" row). A row that equals the sum of the rows above it is the total, not a group.
    const last = parts[parts.length - 1], rest = parts.slice(0, -1).reduce((a, b) => a + b, 0);
    const repeated = parts.length >= 3 && last > 0 && last === rest;
    sum = repeated ? last : parts.reduce((a, b) => a + b, 0);
    if (n >= 2 && sum > 0) out[key] = { value: sum, quote: quote.join(' / '), how: repeated ? 'sum of gender rows (last row repeats the total)' : 'sum of gender rows' };
  }
  return out;
}

// C9 in the 2025-26 template: "Submitting SAT Scores" rows under "Percent" and "Number" headers. The two
// values can sit in either column, or on the row below the label (Bates), so each number goes to the header
// it sits closest to; a "%" sign settles it. Returns the percent and, when given, the number of students.
function readSubmit(rows) {
  const out = {};
  for (const name of ['sat', 'act']) {
    for (let i = 0; i < (rows || []).length && !out[`${name}_submit_pct`]; i++) {
      if (!new RegExp(`^(?:c\\d{3,4} )?submitting ${name} scores\\b`).test(labelText(rows[i]))) continue;
      let hdr = null;
      for (let j = i - 1; j >= Math.max(0, i - 4) && !hdr; j--) if (rows[j].some((c) => norm(c.s) === 'percent')) hdr = rows[j];
      if (!hdr) continue;
      const pctX = hdr.find((c) => norm(c.s) === 'percent').x, numX = hdr.find((c) => norm(c.s) === 'number')?.x;
      let cells = rows[i].slice(1).filter((c) => parse(c.s, 'pct') != null || parse(c.s, 'count') != null);
      const quoteRows = [rows[i]];
      if (rows[i + 1] && isNumbersOnly(rows[i + 1])) { cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]); }
      const isPct = (c) => /%\s*$/.test(c.s) || numX == null || Math.abs(c.x - pctX) < Math.abs(c.x - numX);
      const p = cells.find((c) => isPct(c) && parse(c.s, 'pct') != null);
      if (!p) continue;
      const n = cells.find((c) => c !== p && !isPct(c) && parse(c.s, 'count') != null);
      out[`${name}_submit_pct`] = { value: parse(p.s, 'pct'), quote: quoteRows.map(rowText).join(' '), number: n ? parse(n.s, 'count') : null };
    }
  }
  return out;
}

// SAT/ACT composite rows: three scores (25th, 50th, 75th percentile).
function readScores(rows) {
  const out = {};
  for (const [name, lo, hi] of [['sat', 400, 1600], ['act', 1, 36]]) {
    for (let i = 0; i < (rows || []).length; i++) {
      let r = rows[i];
      if (!new RegExp(`^${name} composite\\b`).test(labelText(r))) continue;
      // Percentiles can fall between whole scores when a school interpolates (UVA reports an ACT 75th
      // percentile of 34.25, Oregon State an SAT 25th percentile of 1127.5).
      const read = (cells) => cells.map((c) => (/^\d{1,4}\.\d{1,2}$/.test(c.s.trim()) ? Number(c.s.trim()) : parse(c.s, 'count'))).filter((x) => x != null && x >= lo && x <= hi);
      let v = read(r.slice(1));
      // Some PDFs put the label on one line and its three scores on the next (William & Mary).
      if (!v.length && rows[i + 1] && isNumbersOnly(rows[i + 1])) { r = r.concat(rows[i + 1]); v = read(rows[i + 1]); }
      if (v.length < 3 || !(v[0] <= v[1] && v[1] <= v[2])) continue;
      const q = rowText(r);
      out[`${name}_p25`] = { value: v[0], quote: q }; out[`${name}_p50`] = { value: v[1], quote: q }; out[`${name}_p75`] = { value: v[2], quote: q };
      break;
    }
  }
  return out;
}

// C18: deferred admission. Yes/No (a ticked box, or the only Yes or No given) and the longest postponement, in the school's words.
const TICK = '(?:x|☒|☑|■|✓|✔)';
function readDeferral(rows) {
  if (!rows) return {};
  let best = null;
  rows.forEach((r, i) => {
    const k = r.findIndex((c) => /postpone enrollment after/.test(norm(c.s)));
    if (k >= 0 && !/practice of permitting/.test(rowText(r)) && (!best || k < best.k)) best = { i, k };
  });
  if (!best) return {};
  let end = best.i + 1;
  while (end < Math.min(rows.length, best.i + 5) && !/maximum period of postponement|^c19\b|early admission/.test(rowText(rows[end]))) end++;
  const cells = [...rows[best.i].slice(best.k), ...rows.slice(best.i + 1, end).flat()];
  const text = norm(cells.map((c) => c.s).join(' ')).replace(/\(?yes or no\)?/g, ' ');
  let answer = null;
  const yesTick = new RegExp(`${TICK}\\s*yes\\b`).test(text), noTick = new RegExp(`${TICK}\\s*no\\b`).test(text);
  if (yesTick !== noTick) answer = yesTick ? 'yes' : 'no';
  else if (!/[☐□]/.test(text)) {
    const y = /\byes\b/.test(text), n = /\bno\b/.test(text);
    if (y !== n) answer = y ? 'yes' : 'no';
  }
  if (!answer) return {};
  const out = { deferral_allowed: { value: answer, quote: `C18 ${text.slice(0, 160)}` } };
  const m = rows[end] && /maximum period of postponement/.test(rowText(rows[end])) ? end : -1;
  if (answer === 'yes' && m < 0) {
    // Some files drop the "maximum period" label and leave only the answer ("One academic year").
    const r = rows.slice(best.i + 1, end).find((x) => rowText(x).length < 80 && /\b(years?|semesters?|terms?|months?)\b/.test(rowText(x)) && !/postpone/.test(rowText(x)));
    if (r) { const period = r.map((c) => c.s).join(' ').replace(/\s+/g, ' ').trim().replace(/\.$/, ''); out.deferral_max = { value: period[0].toUpperCase() + period.slice(1), quote: `C18 ${period}` }; }
  }
  if (answer === 'yes' && m >= 0) {
    const r = rows[m];
    const at = r.findIndex((c) => /maximum period/.test(norm(c.s)));
    let period = r.slice(at + 1).map((c) => c.s).join(' ').replace(/^[\s:]+/, '').trim();
    const next = rows[m + 1];
    if (!period && next && !/^c19\b|early admission|^c\d/.test(rowText(next)) && rowText(next).length <= 200) period = next.map((c) => c.s).join(' ').trim();
    period = period.replace(/\s+/g, ' ').replace(/\.$/, '');
    if (period && period.length <= 200 && /[a-z]/i.test(period) && !/common data set|\bcds\b|page \d/i.test(period)) out.deferral_max = { value: period[0].toUpperCase() + period.slice(1), quote: `C18 maximum period of postponement: ${period}` };
  }
  return out;
}

// The official CDS Excel template (2025-26 on) repeats every answer next to a fixed question number
// ("C.116", "D.204") under a header row with "Question Number" and "Answer" columns, both in each
// section sheet and in an all-answers sheet. When a file has them, these are the most reliable reads.
// The template's variable names for C11 are shifted, so GPA rows go by question number, which matches
// the printed labels: C.1101-1109 students who sent scores, C.1111-1119 those who didn't, C.1121-1129 all.
const FACTOR_KEYS = ['rigor', 'class_rank', 'gpa', 'test_scores', 'essay', 'recommendations', 'interview', 'extracurriculars', 'talent', 'character', 'first_generation', 'alumni', 'geography', 'state_residency', 'religion', 'volunteer', 'work', 'interest'];
const GPA_KEYS = ['gpa_400_pct', 'gpa_375_pct', 'gpa_350_pct', 'gpa_325_pct', 'gpa_300_pct', 'gpa_250_pct', 'gpa_200_pct', 'gpa_100_pct', 'gpa_below1_pct'];
const CODE_FIELDS = {
  'C.116': ['applied_total', 'int'], 'C.117': ['admitted_total', 'int'], 'C.118': ['enrolled_total', 'int'],
  'C.202': ['waitlist_offered', 'int'], 'C.203': ['waitlist_accepted', 'int'], 'C.204': ['waitlist_admitted', 'int'],
  'C.901': ['sat_submit_pct', 'pct'], 'C.902': ['act_submit_pct', 'pct'],
  'C.905': ['sat_p25', 'int'], 'C.906': ['sat_p50', 'int'], 'C.907': ['sat_p75', 'int'],
  'C.914': ['act_p25', 'num'], 'C.915': ['act_p50', 'num'], 'C.916': ['act_p75', 'num'],
  'C.1001': ['rank_top10_pct', 'pct'], 'C.1002': ['rank_top25_pct', 'pct'], 'C.1006': ['rank_submit_pct', 'pct'],
  'C.1201': ['gpa_average', 'num'], 'C.1202': ['gpa_submit_pct', 'pct'],
  'C.1801': ['deferral_allowed', 'yesno'], 'C.1802': ['deferral_max', 'text'],
  'C.2101': ['ed_offered', 'yesno'], 'C.2110': ['ed_applied', 'int'], 'C.2111': ['ed_admitted', 'int'],
  'D.204': ['transfer_applied', 'int'], 'D.208': ['transfer_admitted', 'int'], 'D.212': ['transfer_enrolled', 'int']
};
FACTOR_KEYS.forEach((k, i) => { CODE_FIELDS[`C.${701 + i}`] = [`factor_${k}`, 'factor']; });

function codeAnswers(rows) {
  const ans = {};
  if (!rows) return ans;
  let codeX = null, qX = null, aX = null;
  for (const r of rows) {
    const h = r.findIndex((c) => /^question num/i.test(c.s.trim()));
    const a = r.findIndex((c) => /^answer$/i.test(c.s.trim()));
    if (h >= 0 && a >= 0) { codeX = r[h].x; aX = r[a].x; const q = r.find((c) => /^question$/i.test(c.s.trim())); qX = q ? q.x : null; continue; }
    if (codeX == null) continue;
    const c = r.find((x) => x.x === codeX);
    if (!c || !/^[A-J]\.\d{3,4}$/.test(c.s.trim())) continue;
    const code = c.s.trim();
    if (ans[code]) continue;
    const v = r.find((x) => x.x === aX);
    const q = qX != null ? r.find((x) => x.x === qX) : null;
    ans[code] = { answer: v ? String(v.s).trim() : '', question: q ? norm(q.s) : '' };
  }
  return ans;
}

function readCodes(rows) {
  const ans = codeAnswers(rows);
  if (Object.keys(ans).length < 50) return {};
  const out = {};
  const num = (s) => { const n = Number(String(s).replace(/[,%$\s]/g, '')); return s !== '' && Number.isFinite(n) ? n : null; };
  const pct = (s) => { const n = num(s); if (n == null) return null; const v = n <= 1 ? n * 100 : n; return Math.round(v * 100) / 100; };
  const quote = (code, a) => `${code} ${a.question}: ${a.answer}`.slice(0, 240);
  for (const [code, [key, type]] of Object.entries(CODE_FIELDS)) {
    const a = ans[code];
    if (!a || a.answer === '') continue;
    let value = null;
    if (type === 'int') { const n = num(a.answer); value = n != null && Number.isInteger(n) ? n : null; }
    else if (type === 'num') value = num(a.answer);
    else if (type === 'pct') value = pct(a.answer);
    else if (type === 'yesno') { const s = norm(a.answer); value = /^y(es)?$/.test(s) ? 'yes' : /^no?$/.test(s) ? 'no' : null; }
    else if (type === 'factor') {
      const s = norm(a.answer);
      value = { 'very important': 'Very Important', important: 'Important', considered: 'Considered', 'not considered': 'Not Considered' }[s] || null;
    } else if (type === 'text') { const s = a.answer.replace(/\s+/g, ' ').replace(/\.$/, ''); value = s && /[a-z]/i.test(s) && s.length <= 200 ? s[0].toUpperCase() + s.slice(1) : null; }
    if (value != null) out[key] = { value, quote: quote(code, a) };
  }
  if (out.deferral_allowed?.value !== 'yes') delete out.deferral_max;
  // C11: the "all students" block. Some colleges fill only one block (often the first) for everyone,
  // so a single filled block is used too. If only the two split groups are filled (sent test scores /
  // didn't), neither describes the whole class, so C11 is left out (Grand Valley State 2025-26).
  const block = (start) => GPA_KEYS.map((_, i) => { const a = ans[`C.${start + i}`]; return a && a.answer !== '' ? pct(a.answer) : null; });
  const adds = (vals) => { const s = vals.reduce((a, v) => a + (v ?? 0), 0); return vals.some((v) => v != null) && s >= 95 && s <= 105; };
  const blocks = [1121, 1101, 1111].map((start) => ({ start, vals: block(start) })).filter((b) => adds(b.vals));
  const use = blocks.find((b) => b.start === 1121) || (blocks.length === 1 ? blocks[0] : null);
  if (use) GPA_KEYS.forEach((k, i) => { if (use.vals[i] != null) out[k] = { value: use.vals[i], quote: quote(`C.${use.start + i}`, ans[`C.${use.start + i}`]) }; });
  // Mark that the file has the template's C11 so the printed-form read of C11 isn't used instead.
  if (!use && blocks.length > 1) out._c11_split = true;
  return out;
}

// D2: transfer applicants, admits and enrollees. The "Total" row in the few rows after the D2 heading,
// read left to right (applicants, admitted, enrolled).
function readTransfer(rows) {
  if (!rows) return {};
  const start = rows.findIndex((r) => /degree ?-? ?seeking transfer\b|enrolled as degree ?-?$/.test(rowText(r)));
  if (start < 0) return {};
  for (let j = start + 1; j < Math.min(rows.length, start + 16); j++) {
    const t = rowText(rows[j]);
    if (/^d3\b|application for admission|indicate terms/.test(t)) break;
    // The row's own label must be "Total" (some spreadsheets carry a second, unrelated table to the right).
    const k = rows[j].findIndex((c) => /^total:?$/.test(norm(c.s)));
    if (k < 0 || rows[j].slice(0, k).some((c) => parse(c.s, 'count') != null)) continue;
    const nums = rows[j].slice(k + 1).map((c) => parse(c.s, 'count')).filter((x) => x != null).slice(0, 3);
    if (nums.length < 3) continue;
    const [a, b, e] = nums;
    if (!(a > 0 && b <= a && e <= b)) return {};
    const quote = `D2 ${rowText(rows[j].slice(k, k + 4))}`;
    return { transfer_applied: { value: a, quote }, transfer_admitted: { value: b, quote }, transfer_enrolled: { value: e, quote } };
  }
  return {};
}

// C7 grid: the column of each factor row's checkmark, using cell positions.
const MARK = /^(x|✓|✔|√|☒|■|●|•)$/i;
function factors(rows) {
  if (!rows) return {};
  let head = null;
  // The column headings can sit on one row or be split over up to three ("Very | Not" / "Important |
  // Considered" / "Important | Considered"): gather heading words and group them by position.
  for (let i = 0; i < rows.length && !head; i++) {
    if (!rows[i].some((c) => /important|considered/i.test(c.s))) continue;
    const words = rows.slice(i, i + 3).flatMap((r) => r.filter((c) => /^(very|not)?\s*(important|considered)$|^(very|not)$/i.test(c.s.trim())));
    const cols = [];
    for (const c of words.sort((a, b) => a.x - b.x)) {
      const last = cols[cols.length - 1];
      if (last && c.x - last.x1 < 25) { last.x1 = c.x; last.xs.push(c.x); } else cols.push({ x1: c.x, xs: [c.x] });
    }
    if (cols.length === 4) {
      const at = i + rows.slice(i, i + 3).reduce((n, r, k) => (r.some((c) => /important|considered/i.test(c.s)) ? k : n), 0);
      head = { at, cols: cols.map((g, k) => ({ x: g.xs.reduce((a, b) => a + b, 0) / g.xs.length, level: FACTOR_LEVELS[k] })) };
    }
  }
  if (!head) return {};
  const out = {};
  const sq = (s) => norm(s).replace(/[^a-z0-9]/g, '');
  for (const [key, label] of Object.entries(CDS_FACTORS)) {
    const l = sq(label).slice(0, 14);
    const row = rows.slice(head.at + 1, head.at + 60).find((r) => sq(labelText(r)).startsWith(l));
    const marks = row ? row.filter((c) => MARK.test(c.s)) : [];
    if (marks.length !== 1) continue; // none or ambiguous
    const col = head.cols.reduce((a, b) => (Math.abs(b.x - marks[0].x) < Math.abs(a.x - marks[0].x) ? b : a));
    out[key] = { value: col.level, quote: label };
  }
  return out;
}

// The entering fall a CDS describes, from its own instructions ("... and enrolled (full- or part-time) in
// Fall 2025", "questions below for Fall 2025 admissions"). Only a fallback for documents whose link and
// file name carry no year: colleges sometimes leave last year's wording in the template, so the link wins.
export function fallYearOf(text) {
  const seen = {};
  for (const re of [/and enrolled \(full- ?or part- ?time\) in (?:the )?fall (?:of )?(20\d\d)/g, /questions below for fall (20\d\d) admissions/g,
    /enrolled in fall (20\d\d) who submitted national/g, /still enrolled at your institution as of the official enrollment date in fall (20\d\d)/g])
    for (const m of String(text || '').matchAll(re)) seen[m[1]] = (seen[m[1]] || 0) + 1;
  const best = Object.entries(seen).sort((a, b) => b[1] - a[1])[0];
  return best ? `${best[0]}-${Number(best[0]) + 1}` : null;
}

// Every value the reader takes from one document's rows: the printed-form readers, then the template's
// answer codes on top. Pure (no network), so it can be replayed on saved rows in tests.
// Some PDFs split one number into cells a character apart ("9 | 58" for 958, "2,56 | 1"; Corpus Christi,
// Ohio Wesleyan, Southeastern Louisiana 2025-26). Real columns are far wider apart, so a number that starts
// where the previous one ends (2.5 to 7.5 points a character) is joined back to it.
const joinSplitDigits = (r) => r.reduce((acc, c) => {
  const p = acc[acc.length - 1], num = (t) => /^[\d,.]+%?$/.test(t.trim());
  const gap = p ? c.x - p.x : 0, len = p ? p.s.trim().length : 0;
  // Spreadsheet cells carry column numbers (1, 2, 3 …), not points: a step under 2.5 a character is never a split.
  // A fragment is short or a broken thousands group ("2,56"); a whole number like "4,727" is its own column
  // even when the next column starts close by (Binghamton's D2 table).
  const fragment = p && (len <= 3 || /,\d{0,2}$/.test(p.s.trim()));
  if (p && fragment && num(p.s) && num(c.s) && !/%$/.test(p.s.trim()) && gap >= len * 2.5 && gap <= len * 7.5 + 1.5) acc[acc.length - 1] = { x: p.x, s: p.s.trim() + c.s.trim() };
  else acc.push(c);
  return acc;
}, []);

export function readValues(rows) {
    rows = (rows || []).map(joinSplitDigits);
    const codes = readCodes(rows);
    const values = { ...c1FromGender(rows, readRows(rows)), ...readScores(rows), ...factors(rows), ...readTransfer(rows), ...readDeferral(rows) };
    // C9 percents from the Percent/Number layout. When the number of students is printed too, the percent
    // must match it against the enrolled class (within 2 points), or it's left out: the columns were misread.
    for (const [k, x] of Object.entries(readSubmit(rows))) {
      if (values[k]) continue;
      const enrolled = values.enrolled_total?.value, pct = x.value <= 1 ? x.value * 100 : x.value;
      if (x.number != null && enrolled && Math.abs(x.number / enrolled * 100 - pct) > 2) continue;
      values[k] = { value: x.value, quote: x.quote };
    }
    // Answer codes win. C11 rows are one set: never mix rows from two readers (one may read fractions, one percents).
    if (codes._c11_split || Object.keys(codes).some((k) => /^gpa_\d|^gpa_below/.test(k))) for (const k of Object.keys(values)) if (/^gpa_\d|^gpa_below/.test(k)) delete values[k];
    delete codes._c11_split;
    const before = { ...values };
    Object.assign(values, codes);
    // A school's template can link an answer to the wrong row (Cornell's 2025-26 file puts its early
    // decision applications in the admits cell). A code value that breaks a basic nesting rule goes back
    // to what the printed form says, or is left out.
    const v = (k) => values[k]?.value;
    const LE = [['admitted_total', 'applied_total'], ['enrolled_total', 'admitted_total'], ['ed_admitted', 'ed_applied'], ['ed_admitted', 'admitted_total'],
      ['waitlist_accepted', 'waitlist_offered'], ['waitlist_admitted', 'waitlist_offered'], ['transfer_admitted', 'transfer_applied'], ['transfer_enrolled', 'transfer_admitted']];
    for (const [a, b] of LE) {
      if (typeof v(a) !== 'number' || typeof v(b) !== 'number' || v(a) <= v(b)) continue;
      for (const k of [a, b]) if (codes[k]) { if (before[k]) values[k] = before[k]; else delete values[k]; }
    }
    // C1 from a residency table can disagree with the same report's gender rows (VCU 2024-25: 24,804 applied
    // in the table, 21,201 in the gender rows). Keep the gender-row sums as an alternative; build-cds uses
    // whichever set is closer to the federal admit rate.
    const gender = c1FromGender(rows, {});
    for (const k of Object.keys(C1_VERB)) {
      if (values[k]?.residency && gender[k] && gender[k].value !== values[k].value) values[k].alt = gender[k];
      if (values[k]) delete values[k].residency;
    }
    if (values.ed_applied) values.ed_offered = { value: 'yes', quote: null };
    if (values.ea_applied) values.ea_offered = { value: 'yes', quote: null };
    return values;
}

const log = [];
export { readRows, readSubmit, readScores, factors, c1FromGender, readTransfer, readDeferral, readCodes };
// Run only when called directly (tests import the readers above).
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  let made = 0;
  for (const [slug, src] of Object.entries(sources)) {
    if (!force && current(slug, src) && !(pages && !isFile(src.url))) continue;
    if (!retry && !src.mirror && fresh(failed[slug], src.url)) continue;
    let resolved;
    try {
      // Some schools block automated downloads (bot checks). For those, a person downloads the official file
      // and we keep a copy in data/cds/mirror/; the page still cites the school's own link (src.url).
      if (src.mirror && fs.existsSync(src.mirror) && src.mirror.endsWith('.rows.json')) {
        // A scanned report: rows made by OCR (scripts/ocr-cds.py), checked by the same consistency rules.
        const rows = JSON.parse(fs.readFileSync(src.mirror, 'utf8'));
        resolved = { doc: { kind: 'ocr', status: 200, rows, text: norm(rows.map((r) => r.map((c) => c.s).join(' ')).join(' ')) }, url: src.url };
      } else if (src.mirror && fs.existsSync(src.mirror)) {
        const buf = fs.readFileSync(src.mirror);
        const ext = src.mirror.split('.').pop().toLowerCase();
        const type = { pdf: 'application/pdf', xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', xls: 'application/vnd.ms-excel', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }[ext] || '';
        resolved = { doc: { ...(await docFromBuffer(buf, type, src.mirror)), status: 200 }, url: src.url };
      } else resolved = await resolveCds(src.url);
    } catch (err) { fail(slug, src.url, `error ${err.message}`); continue; }
    const doc = resolved.doc;
    // Some colleges post each CDS section as its own file (William & Mary): `extra` lists the other
    // section files, read and added after the main one. `cite` is then the page that lists them all.
    for (const u of src.extra || []) {
      try {
        const x = (await resolveCds(u)).doc;
        if (x?.rows?.length) { doc.rows = (doc.rows || []).concat(x.rows); doc.text = `${doc.text || ''} ${x.text || ''}`; }
      } catch (err) { log.push(`${slug}: extra file ${u} failed (${err.message})`); }
    }
    if (doc.text == null) { fail(slug, src.url, `document failed to load (HTTP ${doc.status})`); continue; }
    if (!looksLikeCds(doc.text)) { fail(slug, src.url, `no CDS document found from ${src.url}`); continue; }
    delete failed[slug];
    const values = readValues(doc.rows);
    // Temporary download hosts (Box, Google) expire: cite the listed link instead.
    const docUrl = src.cite || (resolved.url && !/boxcloud\.com|googleusercontent\.com|dropboxusercontent\.com/.test(resolved.url) ? resolved.url : src.url);
    const d = { slug, cdsYear: (isFile(src.url) && src.year) || resolved.year || (yearOf(docUrl) ? `${yearOf(docUrl)}-${yearOf(docUrl) + 1}` : null) || src.year || fallYearOf(doc.text) || null, source: { title: src.title || 'Common Data Set', url: docUrl }, sourceUrl: src.url, extra: src.extra || undefined, mirror: src.mirror || undefined, mirrorHash: src.mirror ? hashOf(src.mirror) : undefined,
      researchedAt: new Date().toISOString().slice(0, 10), extractedBy: 'extract-cds', readerVersion: READER_VERSION, docKind: doc.kind, values, concerns: null };
    if (!Object.keys(values).length) d.concerns = 'no CDS values recognized (document may be scanned or laid out unusually)';
    fs.writeFileSync(`${DIR}/${slug}.json`, JSON.stringify(d, null, 2) + '\n');
    made++;
    log.push(`${slug}: ${doc.kind}, ${Object.keys(values).length} values`);
  }
  for (const k of Object.keys(failed)) if (!sources[k]) delete failed[k];
  fs.writeFileSync(FAILED, JSON.stringify(failed, null, 1) + '\n');
  console.log(log.join('\n'));
  console.log(`wrote ${made} drafts; ${Object.keys(failed).length} sources currently failing (see ${FAILED})`);
  await closeBrowser();
}
