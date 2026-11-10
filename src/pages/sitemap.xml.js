import { schools, states, pulledAt } from '../lib/data.js';
import { COLLEGES_LAUNCHED, TRADES_LAUNCHED, APPRENTICESHIPS_LAUNCHED, TRANSFER_LAUNCHED, GAP_LAUNCHED, MILITARY_LAUNCHED, SELF_LAUNCHED, LOCAL_GUIDES_LAUNCHED, COUNSELORS_LAUNCHED } from '../lib/site.js';
import { transferStates } from '../lib/transfer-data.js';
import { occupations } from '../lib/apprentice-data.js';
import { tradeIndex, tradeSchools } from '../lib/trade-data.js';

const SITE = 'https://afterhighschool.me';

export function GET() {
  const day = pulledAt.slice(0, 10);
  const urls = [
    { loc: '/', lastmod: day },
    { loc: '/privacy' }
  ];
  if (COLLEGES_LAUNCHED) {
    urls.push({ loc: '/colleges', lastmod: day }, { loc: '/compare' }, { loc: '/methodology', lastmod: day });
    for (const st of states) urls.push({ loc: `/colleges/${st.slug}`, lastmod: day });
    urls.push({ loc: '/colleges/test-optional', lastmod: day }, { loc: '/colleges/net-price-under-20000', lastmod: day });
    for (const s of schools) urls.push({ loc: `/college/${s.slug}`, lastmod: day });
  }
  if (TRADES_LAUNCHED) {
    urls.push({ loc: '/trades', lastmod: day });
    for (const t of tradeIndex) {
      urls.push({ loc: `/trades/${t.slug}`, lastmod: day });
      for (const st of t.states) urls.push({ loc: `/trades/${t.slug}/${st.slug}`, lastmod: day });
    }
    for (const s of tradeSchools) if (!s.thin) urls.push({ loc: `/trades/school/${s.slug}`, lastmod: day });
  }
  if (APPRENTICESHIPS_LAUNCHED) {
    urls.push({ loc: '/apprenticeships', lastmod: day });
    for (const o of occupations) urls.push({ loc: `/apprenticeships/${o.slug}`, lastmod: day });
  }
  if (TRANSFER_LAUNCHED) {
    urls.push({ loc: '/transfer', lastmod: day });
    for (const s of transferStates) urls.push({ loc: `/transfer/${s.slug}`, lastmod: day });
  }
  if (GAP_LAUNCHED) urls.push({ loc: '/gap-years', lastmod: day });
  if (MILITARY_LAUNCHED) urls.push({ loc: '/military', lastmod: day });
  urls.push({ loc: '/paths', lastmod: day });
  if (SELF_LAUNCHED) urls.push({ loc: '/teach-yourself', lastmod: day }, { loc: '/fellowships', lastmod: day });
  if (LOCAL_GUIDES_LAUNCHED) urls.push({ loc: '/guides/electrician-los-angeles' });
  if (COUNSELORS_LAUNCHED) urls.push({ loc: '/counselors' }, { loc: '/counselors/handout' });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
