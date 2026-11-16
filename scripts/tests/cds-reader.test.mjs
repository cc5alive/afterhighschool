// Regression tests for the CDS reader, on rows taken from the colleges' own 2025-26 documents
// (saved by the "Dump CDS text" workflow on 2026-11-15). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { readValues, fallYearOf } from '../extract-cds.mjs';

const fx = JSON.parse(fs.readFileSync(new URL('./cds-rows.fixture.json', import.meta.url), 'utf8'));
const val = (rows) => Object.fromEntries(Object.entries(readValues(rows)).map(([k, x]) => [k, x.value]));

test('Florida A&M: a total printed on the "unknown" row is not added to the gender rows', () => {
  const v = val(fx.famu);
  assert.equal(v.applied_total, 26494); // 7,688 men + 18,806 women; was read as 52,988
  assert.equal(v.admitted_total, 4942); // was 9,884
  assert.equal(v.enrolled_total, 1232);
});

test('UW-Stevens Point: a stray numbers-only row is not added to the enrolled count', () => {
  const v = val(fx.uwsp);
  assert.equal(v.applied_total, 11135);
  assert.equal(v.admitted_total, 10294);
  assert.equal(v.enrolled_total, 2017); // 842 men + 1,175 women; was read as 9,919
});

test('UCLA: the "unknown sex" row is counted even when its label comes out in a shifted font', () => {
  const v = val(fx.ucla);
  assert.equal(v.applied_total, 145086); // 65,079 + 73,508 + 6,499; was 138,587
  assert.equal(v.admitted_total, 13659); // 5,546 + 7,274 + 839; was 12,820
});

test('Kenyon: a blank class-rank row does not borrow the next question\'s answer', () => {
  const v = val(fx.kenyon);
  assert.equal(v.rank_top10_pct, undefined); // was 0.054, the share with a 3.00-3.24 GPA
  assert.equal(v.rank_top25_pct, undefined);
});

test('Colgate: a total that wraps onto the next row is still read', () => {
  const v = val(fx.colgate);
  assert.equal(v.admitted_total, 3030);
});

test('fallYearOf reads the entering fall from the document\'s own instructions', () => {
  assert.equal(fallYearOf('who applied, were admitted, and enrolled (full- or part-time) in fall 2025. include early'), '2025-2026');
  assert.equal(fallYearOf('if yes, please answer the questions below for fall 2023 admissions: waiting list'), '2023-2024');
  assert.equal(fallYearOf('no year here'), null);
});

test('Stanford: C1 labels split into "first | - | time" cells are still read', () => {
  const v = val(fx.stanford);
  assert.equal(v.applied_total, 60646); // 31,609 + 29,011 + 26; was missing
  assert.equal(v.admitted_total, 2302);
  assert.equal(v.enrolled_total, 1839);
});

test('Michigan: a label split inside a word ("m | ales") is still read', () => {
  const v = val(fx.michigan);
  assert.equal(v.applied_total, 109112); // 53,044 + 56,068; was missing
  assert.equal(v.admitted_total, 17915);
  assert.equal(v.enrolled_total, 8178);
});

test('Florida: the residency table\'s "International" column is not taken for the C1 total', () => {
  const v = val(fx.florida);
  assert.equal(v.applied_total, 90523); // was 8,931, the international applicants
  assert.equal(v.admitted_total, 18403); // was 930
  assert.equal(v.enrolled_total, 7619); // was 155
});

test('C9: "Submitting SAT Scores" under Percent and Number columns reads the percent', () => {
  assert.deepEqual([val(fx.amherst_c9).sat_submit_pct, val(fx.amherst_c9).act_submit_pct], [40, 16]); // not 192 or 78
  const b = val(fx.bates_c9); // the percent sits on the row below the label; 64 is the number of students
  assert.equal(Math.round(b.sat_submit_pct * 100) / 100, 12.98);
  assert.equal(Math.round(b.act_submit_pct * 100) / 100, 8.32);
  const u = val(fx.butler_c9); // percent and number in separate blocks
  assert.deepEqual([u.sat_submit_pct, u.act_submit_pct], [35, 19]);
});

test('C2: "waiting list" is read like "wait list"', () => {
  const v = val(fx.amherst_c2);
  assert.deepEqual([v.waitlist_offered, v.waitlist_accepted, v.waitlist_admitted], [1294, 740, 44]);
});

test('Hawaii: a gender row whose words are split at random is still counted', () => {
  const v = val(fx.hawaii);
  assert.equal(v.applied_total, 17389); // 5,451 + 11,870 + 68; was 17,321 without the "unknown sex" row
  assert.equal(v.admitted_total, 15297);
});

test('NCCU: a residency-table total is read when its label splits "year | s"', () => {
  const v = val(fx.nccu_res);
  assert.equal(v.applied_total, 17831); // 6,449 in-state + 11,382 out-of-state
  assert.equal(v.enrolled_total, 1688);
});

test('Corpus Christi, Ohio Wesleyan: digits a PDF splits into cells ("9 | 58") are joined back', () => {
  assert.equal(val(fx.tamucc).enrolled_total, 2374); // 958 men + 1,416 women; was read as 58 + 416
  assert.equal(val(fx.owu).enrolled_total, 515); // 230 + 283 + 2; was 23 + 283 + 2
});

test('C2: a blank wait-list row does not take the next question\'s number', () => {
  const b = val(fx.bowdoin_c2);
  assert.equal(b.waitlist_accepted, undefined); // was 5, the number admitted from the wait list
  assert.equal(b.waitlist_admitted, 5);
  const m = val(fx.msu_c2);
  assert.equal(m.waitlist_offered, 4241); // its number wraps onto the next row, which is fine
  assert.equal(m.waitlist_accepted, undefined); // was 2,254
  assert.equal(m.waitlist_admitted, 2254);
});

test('VCU: when the residency table and the gender rows disagree, both are kept for the build to choose', () => {
  const v = readValues(fx.vcu);
  assert.equal(v.applied_total.value, 24804); // residency table total
  assert.equal(v.applied_total.alt.value, 21201); // 7,729 + 13,449 + 16 + 7 from the gender rows
  assert.equal(v.admitted_total.alt.value, 19572);
  assert.ok(v.enrolled_total.alt.value > 0);
});

test('Florida: no alternative when only the gender rows were read', () => {
  assert.equal(readValues(fx.florida).applied_total.alt, undefined);
});
