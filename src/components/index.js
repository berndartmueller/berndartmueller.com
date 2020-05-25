import Post from './Post.svelte';

const Components = {
  post: Post,
};

export default component => {
  // component does exist
  if (typeof Components[component] !== 'undefined') {
    return Components[component];
  }

  return 'Not found';
};
