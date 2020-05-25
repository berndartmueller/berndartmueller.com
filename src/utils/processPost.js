import { render } from './markdown';

export async function processPost(post, { slug }) {
  post.content.lead = await render(post.content.lead, { path: slug });
  post.content.excerpt = await render(post.content.excerpt, { path: slug });
  post.content.content = await render(post.content.content, { path: slug });

  return post;
}
