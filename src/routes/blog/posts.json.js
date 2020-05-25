import client, { defaultRequestConfig as reqConfig } from '../../storyBlock';
import { processPost } from '../../utils';

export async function get(req, res, next) {
  const response = await client.getAll('cdn/stories', reqConfig);
  const posts = response || [];

  const processedPosts = await Promise.all([...posts.map(post => processPost(post, { slug: undefined }))]);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify({ posts: processedPosts }));
}
