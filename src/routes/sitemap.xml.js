import client, { defaultRequestConfig as reqConfig } from './../storyBlock';
import { html as html2 } from 'common-tags';

const render = urls => html2`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urls.map(url => renderEntry(url)).join('')}
</urlset>
`;

function renderEntry(url) {
  return html2`
    <url>
      <loc>https://www.berndartmueller.com/${url}</loc>
    </url>
  `;
}

export async function get(req, res) {
  const urls = ['', 'about', 'blog'];

  const feed = render(urls);

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`);
  res.end(feed);
}
