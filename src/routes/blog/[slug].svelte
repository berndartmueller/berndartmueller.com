<script context="module">
  export async function preload({ params, query }) {
    const { slug } = params;

    const res = await this.fetch(`blog/${slug}.json`);
    const data = await res.json();

    return { post: data.post, otherPosts: data.otherPosts };
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import getComponent from './../../components';

  const { page } = stores();

  export let slug = $page.params.slug;
  export let post = {};
  export let otherPosts = [];
</script>

<svelte:head>
  <link rel="preconnect" href="https://avatars2.githubusercontent.com" />

  <title>{post.content.title} - Bernd Artmüller</title>

  <meta name="description" content={post.content.SEO.description} />
  <link rel="canonical" href={`https://staging.berndartmueller.com/blog/${slug}`} />
  <meta property="og:url" content={`https://staging.berndartmueller.com/blog/${slug}`} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.content.title} />
  <meta property="og:description" content={post.content.SEO.description} />
  <meta property="og:image" content="https://staging.berndartmueller.com/og_image/blog/{slug}.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={`https://staging.berndartmueller.com/blog/${slug}`} />
  <meta property="twitter:title" content={post.content.title} />
  <meta property="twitter:description" content={post.content.SEO.description} />
  <meta property="twitter:image" content="https://staging.berndartmueller.com/og_image/blog/{slug}.png" />
</svelte:head>

{#if post.content.component}
  <svelte:component this={getComponent(post.content.component)} {post} {otherPosts} />
{/if}
