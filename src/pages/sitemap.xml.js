import { schools, states, pulledAt } from '../lib/data.js';
import { COLLEGES_LAUNCHED } from '../lib/site.js';

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
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
