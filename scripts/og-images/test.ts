import { generate } from './generate';

(async function () {
  const posts = [{ title: 'Test Titel', subTitle: 'Subtitle', slug: 'slug-1' }];

  await generate(posts, true);
})();
