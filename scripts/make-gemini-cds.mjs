// Writes docs/gemini-cds/file-NN.md: prompts asking Gemini to copy Common Data Set numbers for the
// most-searched schools (selective schools first). Skips schools that already have a CDS draft or file.
// Usage: node scripts/make-gemini-cds.mjs [schoolCount=200] [perFile=10]
import fs from 'node:fs';

const COUNT = Number(process.argv[2] || 200);
const PER = Number(process.argv[3] || 10);
const OUT = 'docs/gemini-cds';
const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const status = JSON.parse(fs.readFileSync('data/school-status.json', 'utf8')).schools;
const have = (slug) => fs.existsSync(`data/cds/schools/${slug}.json`) || fs.existsSync(`data/cds/extracted/${slug}.json`) || fs.existsSync(`data/cds/drafts/${slug}.json`);

const score = (s) => Math.log10(s.undergrads) + (s.admitRate != null && s.admitRate < 0.5 ? (0.5 - s.admitRate) * 4 : 0);
const ranked = schools
  .filter((s) => s.undergrads >= 1000 && !s.openAdmission && s.admitRate != null && s.ownership !== 'private_for_profit' && !s.onlineOnly && !status[s.slug] && !have(s.slug))
  .sort((a, b) => score(b) - score(a))
  .slice(0, COUNT);

const files = Math.ceil(ranked.length / PER);
const instructions = fs.readFileSync(`${OUT}/_instructions.md`, 'utf8');
for (let i = 0; i < files; i++) {
  const chunk = ranked.slice(i * PER, (i + 1) * PER);
  const list = chunk.map((s) => `- ${s.slug} | ${s.name} | ${s.city}, ${s.state} | ${(s.url || '').replace(/^https?:\/\//, '').replace(/\/$/, '')}`).join('\n');
  const body = instructions.replaceAll('{{COUNT}}', String(chunk.length)).replaceAll('{{BATCH}}', String(i + 1)).replaceAll('{{TOTAL}}', String(files));
  fs.writeFileSync(`${OUT}/file-${String(i + 1).padStart(2, '0')}.md`, `${body}\n${list}\n`);
}
console.log(`${ranked.length} schools in ${files} files`);
