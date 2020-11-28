<script>
  import PageTransition from '../components/PageTransition.svelte';
</script>

<style>
  p {
    margin: 1em auto;
  }

  p.note {
    font-style: italic;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Imprint - Bernd Artmüller</title>
  <meta name="description" value="Imprint - I'm Bernd Artmüller and I'm a passionate Web Developer. Typescript, ..." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.berndartmueller.com/imprint" />
  <meta name="twitter:url" content="https://www.berndartmueller.com/imprint" />
  <link rel="canonical" href="https://www.berndartmueller.com/imprint" />
</svelte:head>

<PageTransition>
  <h1>Imprint</h1>

  <p class="note">Note: Due to Austrian law, I am required to provide this legal document stating who owns this website.</p>

  <p>
    <strong>Bernd Artmüller</strong>
    <br />
    Viktoriagasse 19/Top 20
    <br />
    1150 Wien
    <br />
    Österreich
    <br />
    <br />
    E-Mail: hello /at/ berndartmueller dot com
  </p>

  <p>
    <a href="/sitemap.xml">Sitemap</a>
    <br />
    <a href="/blog/sitemap.xml">Article Sitemap</a>
  </p>
</PageTransition>
