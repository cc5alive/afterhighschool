// Every indexable URL, grouped into sections. The sitemap index lists one sitemap per section, so
// Search Console and Bing report indexing section by section. IndexNow reads the same lists.
import { schools, pulledAt } from './data.js';
import { collegeLists } from './college-lists.js';
import { STATE_GUIDES } from './state-guides.js';
import { COLLEGES_LAUNCHED, TRADES_LAUNCHED, APPRENTICESHIPS_LAUNCHED, TRANSFER_LAUNCHED, GAP_LAUNCHED, MILITARY_LAUNCHED, SELF_LAUNCHED, LOCAL_GUIDES_LAUNCHED, COUNSELORS_LAUNCHED } from './site.js';
import { transferStates } from './transfer-data.js';
import { occupations } from './apprentice-data.js';
import { tradeIndex, tradeSchools } from './trade-data.js';

export const SITE = 'https://afterhighschool.me';

export function sitemapSections() {
  const day = pulledAt.slice(0, 10);
  const main = [{ loc: '/', lastmod: day }, { loc: '/paths', lastmod: day }, { loc: '/privacy' }];
  const colleges = [];
  const trades = [];
  const paths = [];
  if (COLLEGES_LAUNCHED) {
    main.push({ loc: '/colleges', lastmod: day }, { loc: '/compare' }, { loc: '/methodology', lastmod: day });
    for (const l of collegeLists()) main.push({ loc: `/colleges/${l.slug}`, lastmod: day });
    for (const s of schools) colleges.push({ loc: `/college/${s.slug}`, lastmod: day });
  }
  if (TRADES_LAUNCHED) {
    trades.push({ loc: '/trades', lastmod: day });
    for (const t of tradeIndex) {
      trades.push({ loc: `/trades/${t.slug}`, lastmod: day });
      for (const st of t.states) trades.push({ loc: `/trades/${t.slug}/${st.slug}`, lastmod: day });
    }
    for (const s of tradeSchools) if (!s.thin) trades.push({ loc: `/trades/school/${s.slug}`, lastmod: day });
  }
  if (APPRENTICESHIPS_LAUNCHED) {
    paths.push({ loc: '/apprenticeships', lastmod: day });
    for (const o of occupations) paths.push({ loc: `/apprenticeships/${o.slug}`, lastmod: day });
  }
  if (TRANSFER_LAUNCHED) {
    paths.push({ loc: '/transfer', lastmod: day });
    for (const s of transferStates) paths.push({ loc: `/transfer/${s.slug}`, lastmod: day });
  }
  if (GAP_LAUNCHED) paths.push({ loc: '/gap-years', lastmod: day });
  if (MILITARY_LAUNCHED) paths.push({ loc: '/military', lastmod: day });
  if (SELF_LAUNCHED) paths.push({ loc: '/teach-yourself', lastmod: day }, { loc: '/fellowships', lastmod: day });
  if (LOCAL_GUIDES_LAUNCHED) {
    paths.push({ loc: '/guides/electrician-los-angeles' });
    for (const g of STATE_GUIDES) paths.push({ loc: `/guides/${g.slug}` });
  }
  if (COUNSELORS_LAUNCHED) paths.push({ loc: '/counselors' }, { loc: '/counselors/handout' });
  return { main, colleges, trades, paths };
}

export const urlsetXml = (urls) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${SITE}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
  .join('\n')}\n</urlset>\n`;
