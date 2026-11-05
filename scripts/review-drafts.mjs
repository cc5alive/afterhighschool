// Print draft facts for human/Claude review, with automatic flags.
// Usage: node scripts/review-drafts.mjs [--verified-only]
// Flags: NUM = a number in the fact text isn't in any quote; HYPE = marketing word; NOQUOTE = quote not confirmed on page.
import fs from 'node:fs';

const DIR = 'data/highlights/drafts';
const onlyVerified = process.argv.includes('--verified-only');
const HYPE = /\b(premier|renowned|world-class|world-renowned|nationally recognized|leading|vibrant|unique|innovative|robust|high-impact|cutting-edge|best|famous)\b/i;
const nums = (s) => (String(s).replace(/,/g, '').match(/\d+(\.\d+)?/g) || []).map(Number);

for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.json')).sort()) {
  const d = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
  d.facts.forEach((fact, i) => {
    if (onlyVerified && !fact.quoteVerified) return;
    const quotes = fact.sources.map((s) => s.quote || '').join(' ');
    const qn = new Set(nums(quotes));
    const flags = [];
    const missing = nums(fact.text).filter((n) => !qn.has(n));
    if (missing.length) flags.push(`NUM(${missing.join(',')})`);
    if (HYPE.test(fact.text)) flags.push('HYPE');
    if (!fact.quoteVerified) flags.push('NOQUOTE');
    console.log(`${d.slug}:${i} ${flags.length ? '[' + flags.join(' ') + '] ' : ''}\n  T: ${fact.text}\n  Q: ${quotes}`);
  });
}
