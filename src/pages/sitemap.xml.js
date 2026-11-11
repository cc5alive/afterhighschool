// Sitemap index: one sitemap per section (see src/lib/sitemap-urls.js).
import { sitemapSections, SITE } from '../lib/sitemap-urls.js';
import { pulledAt } from '../lib/data.js';

export function GET() {
  const day = pulledAt.slice(0, 10);
  const names = Object.entries(sitemapSections()).filter(([, urls]) => urls.length).map(([n]) => n);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${names
    .map((n) => `  <sitemap><loc>${SITE}/sitemaps/${n}.xml</loc><lastmod>${day}</lastmod></sitemap>`)
    .join('\n')}\n</sitemapindex>\n`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
