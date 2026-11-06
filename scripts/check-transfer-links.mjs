// Checks the official state transfer sites in data/transfer/portals.json: keeps the first URL per state that
// loads, with its page title, in data/transfer/portals-check.json. The site shows only links that passed.
import fs from 'node:fs';
const portals = JSON.parse(fs.readFileSync('data/transfer/portals.json', 'utf8'));
const out = { checkedAt: new Date().toISOString(), states: {} };
for (const [st, p] of Object.entries(portals)) {
  if (st.startsWith('_')) continue;
  for (const url of p.urls) {
    try {
      const r = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (compatible; afterhighschool.me link check; hello@afterhighschool.me)' }, signal: AbortSignal.timeout(30000) });
      const html = r.ok ? await r.text() : '';
      const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].replace(/\s+/g, ' ').trim() || null;
      console.log(st, r.status, url, title);
      if (r.ok && title) { out.states[st] = { name: p.name, url, finalUrl: r.url, status: r.status, title }; break; }
    } catch (e) { console.log(st, 'error', url, e.message); }
  }
}
fs.writeFileSync('data/transfer/portals-check.json', JSON.stringify(out, null, 1) + '\n');
console.log(`${Object.keys(out.states).length} of ${Object.keys(portals).length - 1} states have a working link`);
