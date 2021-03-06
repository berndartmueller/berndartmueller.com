import client, { defaultRequestConfig as reqConfig } from './../../storyBlock';
import { html as html2 } from 'common-tags';

const render = stories => html2`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${stories.map(story => renderEntry(story)).join('')}
</urlset>
`;

function renderEntry(story) {
  return html2`
    <url>
      <loc>https://www.berndartmueller.com/blog/${story.slug}</loc>
    </url>
  `;
}

export async function get(req, res) {
  const stories = await client.getAll('cdn/stories', reqConfig);

  const feed = render(stories);

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`);
  res.end(feed);
}
