<script>
  import { onMount } from 'svelte';
  import getComponent from './../components';
  import client, { defaultRequestConfig as reqConfig } from './../storyBlock';

  async function loadStory() {
    const slug = window.storyblok.getParam('path');
    const response = await client.get('cdn/stories/' + slug, { version: 'published' });

    story = response.data.story || {};
  }

  export let story = {
    content: {
      component: null,
    },
  };

  export let otherStories = [];

  const loadStoryblokBridge = function(cb) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//app.storyblok.com/f/storyblok-latest.js?t=kWq6R3vdEgig4HX2bFtDQAtt`;
    script.onload = cb;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  const initStoryblokEvents = () => {
    loadStory();

    let sb = window.storyblok;

    sb.on(['change', 'published'], payload => {
      loadStory();
    });

    sb.on('input', payload => {
      if (story && payload.story.id === story.id) {
        payload.story.content = sb.addComments(payload.story.content, payload.story.id);
        story = payload.story || {};
      }
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
  <title>{story.name}</title>
</svelte:head>

{#if story.content.component}
  <svelte:component this={getComponent(story.content.component)} {story} {otherStories} />
{/if}
