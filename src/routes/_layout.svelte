<script>
  import NProgress from 'nprogress';
  import { stores } from '@sapper/app';
  import GlobalStyle from '../components/GlobalStyle.svelte';
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount, afterUpdate } from 'svelte';

  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
  });

  const { preloading } = stores();

  $: {
    if ($preloading) {
      NProgress.start();
    }

    if (!$preloading) {
      NProgress.done();
    }
  }
  /**
   * A/B edge
   */
  afterUpdate(() => {
    if (window['abEdgeHook'] && typeof window['abEdgeHook'] === 'function') {
      try {
        window['abEdgeHook']();
      } catch (error) {
        console.warn('Error running A/B edge hook', error);
      }
    }
  });

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 40em;
    padding: 1.2rem;
    margin: 0.5rem auto 0;
    box-sizing: border-box;
  }

  @media (min-width: 1024px) {
    main {
      padding: 2em;
      margin: 1.5rem auto 0;
    }
  }
</style>

<GlobalStyle />

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
