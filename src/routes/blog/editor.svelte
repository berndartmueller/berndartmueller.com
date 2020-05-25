<script>
  import { onMount } from 'svelte';
  import getComponent from './../../components';

  async function loadPost() {
    slug = window.storyblok.getParam('path');

    const res = await fetch(`${slug}.json?version=draft`);
    const data = await res.json();

    post = data.post || {};
  }

  export let post = {};
  export let slug;
  export let otherPosts = [];

  const loadStoryblokBridge = function(cb) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//app.storyblok.com/f/storyblok-latest.js?t=kWq6R3vdEgig4HX2bFtDQAtt`;
    script.onload = cb;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  const initStoryblokEvents = () => {
    loadPost();

    let sb = window.storyblok;

    sb.on(['change', 'published'], payload => {
      loadPost();
    });

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode();
      }
    });
  };

  onMount(() => {
    loadStoryblokBridge(() => initStoryblokEvents());
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://avatars2.githubusercontent.com" />

  {#if post && post.content}
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
  {/if}
</svelte:head>

{#if post && post.content && post.content.component}
  <svelte:component this={getComponent(post.content.component)} {post} {otherPosts} />
{/if}
