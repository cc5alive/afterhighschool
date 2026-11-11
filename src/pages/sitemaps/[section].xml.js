import { sitemapSections, urlsetXml } from '../../lib/sitemap-urls.js';

export function getStaticPaths() {
  return Object.entries(sitemapSections()).filter(([, urls]) => urls.length).map(([section]) => ({ params: { section } }));
}

export function GET({ params }) {
  return new Response(urlsetXml(sitemapSections()[params.section]), { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
