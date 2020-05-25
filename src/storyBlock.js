import StoryblokClient from 'storyblok-js-client';

const client = new StoryblokClient({
  // accessToken: 'F7jfAC6LsG9IdgInIMp54Att',
  accessToken: '4KOUNqIAt0KvSedhXbUyJQtt',
});

export const defaultRequestConfig = {
  version: 'published',
};

export default client;
