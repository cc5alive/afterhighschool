// Writes docs/gemini-v3/: prompt files asking Gemini for MORE "What's special" facts for the
// most-searched schools, listing the facts each school already has so Gemini doesn't repeat them.
// Usage: node scripts/make-gemini-depth.mjs [schoolCount=500] [perFile=50]
//        node scripts/make-gemini-depth.mjs --redo <name> <slug,slug,...>   one file for just these schools
//        options: --prefix <name> (default "file"), --skip <file with one slug per line> (schools to leave out)
import fs from 'node:fs';

const opt = (name) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv.splice(i, 2)[1] : null; };
const PREFIX = opt('--prefix') || 'file';
const skipFile = opt('--skip');
const SKIP = new Set(skipFile ? fs.readFileSync(skipFile, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean) : []);
const REDO = process.argv[2] === '--redo' ? { name: process.argv[3], slugs: new Set(process.argv[4].split(',')) } : null;
const COUNT = REDO ? Infinity : Number(process.argv[2] || 500);
const PER = REDO ? 1e9 : Number(process.argv[3] || 50);
const TARGET = 4;
const OUT = 'docs/gemini-v3';

const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const status = JSON.parse(fs.readFileSync('data/school-status.json', 'utf8')).schools;
const read = (p) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null);
const existing = (slug) => {
  const pub = read(`data/highlights/${slug}.json`)?.facts || [];
  const draft = (read(`data/highlights/drafts/${slug}.json`)?.facts || []).filter((f) => f.quoteVerified !== false);
  return [...pub, ...draft].map((f) => f.text);
};

// "Most searched" proxy: size, plus a boost for selective schools (which draw far more searches than their size).
const score = (s) => Math.log10(s.undergrads) + (s.admitRate != null && s.admitRate < 0.5 ? (0.5 - s.admitRate) * 4 : 0);
const ranked = schools
  .filter((s) => s.undergrads >= 500 && s.ownership !== 'private_for_profit' && !s.onlineOnly && !status[s.slug])
  .sort((a, b) => score(b) - score(a))
  .map((s) => ({ s, have: existing(s.slug) }))
  .filter((x) => x.have.length < TARGET && !SKIP.has(x.s.slug) && (!REDO || REDO.slugs.has(x.s.slug)))
  .slice(0, COUNT);

const files = Math.ceil(ranked.length / PER);
const instructions = fs.readFileSync(`${OUT}/_instructions.md`, 'utf8');
for (let i = 0; i < files; i++) {
  const chunk = ranked.slice(i * PER, (i + 1) * PER);
  const list = chunk.map(({ s, have }) => {
    const site = s.url ? s.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
    const want = Math.min(3, TARGET - have.length);
    const lines = [`### ${s.slug} | ${s.name} | ${s.city}, ${s.state} | ${site}`, `Find up to ${want} new fact${want > 1 ? 's' : ''}.`];
    lines.push(have.length ? 'Already have (don\'t repeat these or cover the same topic):' : 'Already have: nothing yet.');
    for (const t of have) lines.push(`- ${t}`);
    return lines.join('\n');
  }).join('\n\n');
  const body = instructions
    .replaceAll('{{COUNT}}', String(chunk.length))
    .replaceAll('{{BATCH}}', String(i + 1))
    .replaceAll('{{TOTAL}}', String(files));
  const name = REDO ? REDO.name : `${PREFIX}-${String(i + 1).padStart(2, '0')}`;
  fs.writeFileSync(`${OUT}/${name}.md`, `${(REDO ? body.replace(/ \(file \d+ of \d+\)/, '') : body)}\n${list}\n`);
}
console.log(`${ranked.length} schools in ${files} files; ${ranked.filter((x) => !x.have.length).length} have no facts yet.`);
