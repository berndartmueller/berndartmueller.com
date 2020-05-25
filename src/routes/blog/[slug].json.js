import client, { defaultRequestConfig as reqConfig } from './../../storyBlock';
import { processPost } from './../../utils';

export async function get(req, res) {
  const { slug } = req.params;
  let { version } = req.query;

  version = version || reqConfig.version;

  const response = await client.get(`cdn/stories/blog/${slug}`, { ...reqConfig, version });
  const otherStories = await client.getAll('cdn/stories', {
    version: 'published',
    excluding_slugs: `blog/${slug}`,
    per_page: 5,
  });

  const post = await processPost(response.data.story, { slug });

  const result = { post, otherPosts: otherStories || [] };

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(result));
}
