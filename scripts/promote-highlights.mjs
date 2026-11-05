// Move checked draft facts into the published highlights.
// Usage: node scripts/promote-highlights.mjs slug[:0,2] [slug ...] [--edit slug:index="new text"]
//   slug        publish every fact in data/highlights/drafts/<slug>.json whose quote was verified
//   slug:0,2    publish only those fact indexes (still must be quote-verified unless --force)
// Facts are appended to data/highlights/<slug>.json (created if needed); the draft is removed once empty.
import fs from 'node:fs';

const args = process.argv.slice(2);
const force = args.includes('--force');
const edits = new Map();
for (const a of args.filter((x) => x.startsWith('--edit='))) {
  const m = a.slice(7).match(/^([^:]+):(\d+)=(.+)$/s);
  if (m) edits.set(`${m[1]}:${m[2]}`, m[3]);
}
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });

for (const arg of args.filter((x) => !x.startsWith('--'))) {
  const [slug, idx] = arg.split(':');
  const draftPath = `data/highlights/drafts/${slug}.json`;
  if (!fs.existsSync(draftPath)) { console.log(`no draft: ${slug}`); continue; }
  const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
  const want = idx ? new Set(idx.split(',').map(Number)) : null;
  const pubPath = `data/highlights/${slug}.json`;
  const pub = fs.existsSync(pubPath) ? JSON.parse(fs.readFileSync(pubPath, 'utf8')) : { slug, facts: [] };
  const keep = [];
  draft.facts.forEach((f, i) => {
    const chosen = want ? want.has(i) : true;
    if (chosen && (f.quoteVerified || force)) {
      pub.facts.push({
        text: edits.get(`${slug}:${i}`) || f.text,
        sources: f.sources.map((s) => ({ title: s.title, url: s.finalUrl || s.url }))
      });
    } else if (!chosen) keep.push(f);
    else console.log(`skip ${slug}:${i} (quote not verified)`);
  });
  pub.reviewedBy = 'source-check';
  pub.reviewedAt = today;
  fs.writeFileSync(pubPath, JSON.stringify(pub, null, 2) + '\n');
  if (keep.length) { draft.facts = keep; fs.writeFileSync(draftPath, JSON.stringify(draft, null, 2) + '\n'); }
  else fs.unlinkSync(draftPath);
  console.log(`published ${slug}: ${pub.facts.length} facts total`);
}
