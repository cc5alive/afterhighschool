// Tests for the "Where you'd stand" outlook: a plain category from a table anyone can check,
// never a percent chance. Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import { outlook, gpaScale, OUTLOOK_TABLE } from '../../src/lib/stand.js';

// A school as standData() describes it. Ranges are [p25, p50, p75]; gpa is the nine C11 shares.
const school = (over = {}) => ({
  name: 'Test College', admit: 0.5, testPolicy: 'required', ownership: 'private_nonprofit',
  sat: [1100, 1200, 1300], satFrom: 'cds', satSubmit: 90, act: [22, 25, 28], actFrom: 'cds', actSubmit: 40,
  gpa: [20, 30, 25, 15, 6, 3, 1, 0, 0], gpaAvg: 3.6, gpaSubmit: 100, veryImportant: [], ...over
});

test('under a 15% admit rate every applicant gets "Reach for everyone", even with top numbers', () => {
  const o = outlook(school({ admit: 0.04 }), { gpa: '4.0', sat: '1600' });
  assert.equal(o.level, 'reach-all');
  assert.equal(o.label, 'Reach for everyone');
});

test('a school just over the line is not "for everyone"', () => {
  assert.equal(outlook(school({ admit: 0.16 }), { gpa: '4.0', sat: '1600' }).level, 'target');
});

test('top-quarter numbers at a school admitting three in four read as Likely', () => {
  assert.equal(outlook(school({ admit: 0.8 }), { gpa: '4.0', sat: '1400' }).level, 'likely');
});

test('numbers in the middle half at a 50% school read as Target', () => {
  assert.equal(outlook(school({ admit: 0.5 }), { gpa: '3.6', sat: '1200' }).level, 'target');
});

test('one number below the middle half pulls the outlook down', () => {
  assert.equal(outlook(school({ admit: 0.5 }), { gpa: '4.0', sat: '1000' }).level, 'reach');
});

test('at a test-optional school a low score is set aside, because it can be left out', () => {
  const o = outlook(school({ admit: 0.5, testPolicy: 'considered_not_required' }), { gpa: '3.6', sat: '1000' });
  assert.equal(o.level, 'target');
  assert.ok(o.notes.some((n) => /don't have to send/.test(n)));
});

test('no admit rate, no category', () => {
  assert.equal(outlook(school({ admit: null }), { gpa: '3.6' }).level, null);
});

test('nothing entered that can be placed, no category', () => {
  assert.equal(outlook(school({ gpa: null, gpaAvg: null }), { gpa: '3.6' }).level, null);
  assert.equal(outlook(school(), {}).level, null);
});

test('a school that reports weighted GPAs is flagged, and an unweighted GPA is not counted against the student', () => {
  const d = school({ admit: 0.5, gpaAvg: 4.3, gpa: [80, 12, 5, 2, 1, 0, 0, 0, 0] });
  assert.equal(gpaScale(d), 'weighted');
  const o = outlook(d, { gpa: '3.8' });
  assert.equal(o.level, null); // the only number entered can't be compared fairly
  assert.ok(o.notes.some((n) => /weighted/.test(n)));
});

test('a GPA above 4.0 is not counted as "top range" at a school on an unweighted scale', () => {
  const o = outlook(school({ admit: 0.8 }), { gpa: '4.6' });
  assert.equal(o.level, null);
  assert.ok(o.notes.some((n) => /unweighted/.test(n)));
});

test('every outlook says what it cannot see', () => {
  const o = outlook(school({ admit: 0.5 }), { gpa: '3.6' });
  assert.match(o.blind, /essays/);
  assert.match(o.blind, /major/);
});

test('public universities get the in-state caveat', () => {
  assert.match(outlook(school({ ownership: 'public' }), { gpa: '3.6' }).blind, /in-state/);
  assert.doesNotMatch(outlook(school(), { gpa: '3.6' }).blind, /in-state/);
});

test('the table is published as data, so the methodology page shows the same rule the tool runs', () => {
  assert.equal(OUTLOOK_TABLE.length, 4);
  assert.deepEqual(OUTLOOK_TABLE.map((r) => r.min), [0.15, 0.3, 0.5, 0.75]);
});
