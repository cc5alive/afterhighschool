// Debug probe for the transfer guide: Scorecard transfer fields for two-year colleges, and the
// Education Commission of the States transfer-policy profiles for each state. Writes probe/ files.
import { mkdir, writeFile } from 'node:fs/promises';
const KEY = process.env.SCORECARD_API_KEY;
const BASE = 'https://api.data.gov/ed/collegescorecard/v1/schools';
await mkdir('probe/ecs', { recursive: true });
// One community college with every field, to find the transfer and outcome-measure field names.
const r = await fetch(`${BASE}?${new URLSearchParams({ api_key: KEY, 'school.name': 'Santa Monica College', per_page: '1' })}`);
const j = await r.json();
const flat = {};
const walk = (o, p) => { for (const [k, v] of Object.entries(o || {})) { const q = p ? `${p}.${k}` : k; if (v && typeof v === 'object' && !Array.isArray(v)) walk(v, q); else flat[q] = Array.isArray(v) ? `[array ${v.length}]` : v; } };
walk(j.results?.[0], '');
const keys = Object.keys(flat).filter((k) => /transfer|outcome|enroll|om_|completion/i.test(k) && !/programs/.test(k));
await writeFile('probe/scorecard-transfer-fields.json', JSON.stringify(Object.fromEntries(keys.map((k) => [k, flat[k]])), null, 1));
// ECS state profiles (rendered pages).
const { chromium } = await import('playwright');
const browser = await chromium.launch();
const page = await browser.newPage({ userAgent: 'afterhighschool.me data pull (hello@afterhighschool.me)' });
const states = 'AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' ');
for (const st of states) {
  try {
    await page.goto(`https://reports.ecs.org/comparisons/view-by-state/755/${st}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);
    const text = await page.evaluate(() => document.body.innerText);
    const links = await page.evaluate(() => [...document.querySelectorAll('a')].map((a) => `${a.innerText.trim()} | ${a.href}`).filter((x) => !/ecs\.org\/(about|contact|privacy)/.test(x)));
    await writeFile(`probe/ecs/${st}.txt`, text + '\n\n--- LINKS ---\n' + links.join('\n'));
  } catch (e) { await writeFile(`probe/ecs/${st}.txt`, `ERROR ${e.message}`); }
}
await browser.close();
console.log(keys.length, 'transfer-related Scorecard fields');
