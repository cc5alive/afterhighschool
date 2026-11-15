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
