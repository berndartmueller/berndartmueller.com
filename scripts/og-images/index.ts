import client, { defaultRequestConfig as reqConfig } from './../../src/storyBlock.js';
import { processPost } from './../../src/utils/processPost.js';
import { generate } from './generate';

export async function getPosts() {
  const response = await client.getAll('cdn/stories', reqConfig);
  const posts = response || [];

  const processedPosts = await Promise.all([...posts.map(post => processPost(post, { slug: undefined }))]);

  return processedPosts;
}

(async function () {
  const posts = await getPosts();

  const preparedPosts = posts.map(post => ({ slug: post.slug, title: post.content.title, subTitle: undefined }));

  await generate(preparedPosts, true);
})();
