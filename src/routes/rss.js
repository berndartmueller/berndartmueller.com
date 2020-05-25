import send from '@polka/send';
import he from 'he';
import RSS from 'rss';
import striptags from 'striptags';
import urljoin from 'url-join';
import client, { defaultRequestConfig as reqConfig } from './../storyBlock.js';
import { processPost } from './../utils/processPost.js';

async function getPosts() {
  const response = await client.getAll('cdn/stories', reqConfig);
  const posts = response || [];

  const processedPosts = await Promise.all([...posts.map(post => processPost(post, { slug: undefined }))]);

  return processedPosts;
}

function generateRSS(posts) {
  const authorName = 'Bernd Artmüller';
  const baseUrl = 'https://www.berndartmueller.com';
  const rssFeedUrl = 'https://www.berndartmueller.com/rss.xml';
  const rssFaviconUrl = undefined; // @TODO

  const feed = new RSS({
    title: 'Bernd Artmüller - berndartmueller.com',
    description: 'RSS Feed for berndartmueller.com',
    feed_url: rssFeedUrl,
    site_url: baseUrl,
    image_url: rssFaviconUrl,
    managingEditor: authorName,
    webMaster: authorName,
    copyright: `${new Date().getFullYear()} ${authorName}`,
    language: 'en',
    categories: ['Tech', 'Blog'],
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  for (const post of posts) {
    const { slug, title, excerpt, date } = post;

    feed.item({
      title,
      date,
      url: urljoin(baseUrl, 'blog', slug),
      description: excerpt,
    });
  }

  return feed.xml();
}

export async function get(req, res) {
  const posts = await getPosts();

  const preparedPosts = posts.map(post => ({
    slug: post.slug,
    title: post.content.title,
    excerpt: striptags(he.decode(post.content.excerpt)),
    date: new Date(post.first_published_at).toISOString(),
  }));

  const feed = generateRSS(preparedPosts);

  send(res, 200, feed, {
    'Cache-Control': `max-age=0, s-max-age=${3600}`, // 60 minutes
    'Content-Type': 'application/rss+xml',
  });
}
