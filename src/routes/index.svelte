<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/posts.json`);
    const data = await res.json();

    return { posts: data.posts || [] };
  }
</script>

<script>
  import PageTransition from '../components/PageTransition.svelte';
  import { formatDate, formatDateNth } from './../utils/formatDate';

  export let posts;
</script>

<style>
  section {
    margin: 3rem 0;
  }

  h1 + p {
    font-size: 1.3rem;
  }

  h1 + p a {
    text-decoration: none;
  }

  .articles {
    margin: 3rem 0;
  }

  .articles ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .articles ul li {
    margin: 1rem 0;
  }

  .articles h2 {
    margin-bottom: 2rem;
  }

  .articles a {
    text-decoration: none;
  }

  .articles h3 {
    margin-bottom: 0;
  }

  .articles time {
    font-size: 0.85rem;
    font-style: italic;
    color: var(--color-text-light);
  }

  .intro {
    margin-bottom: 4rem;
    text-align: center;
  }

  .intro h2 {
    font-size: 1.6rem;
    color: var(--color-accent);
  }

  h2 .more-link {
    margin-left: 1rem;
  }

  .intro h1 {
    font-size: 2.6rem;
  }
</style>

<svelte:head>
  <title>Bernd Artmüller - Web Developer - UX/Product Lover - Startup Enthusiast</title>
  <meta name="description" value="I'm Bernd Artmüller and I'm a passionate Web Developer. Typescript, ..." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.berndartmueller.com" />
  <meta name="twitter:url" content="https://www.berndartmueller.com" />
  <link rel="canonical" href="https://www.berndartmueller.com" />
</svelte:head>

<PageTransition>
  <div class="intro">
    <h2>Hi, I'm Bernd Artmüller.</h2>
    <h1>I'm a Serial Founder and Full-Stack Developer</h1>

    <p>
      I'm Co-Founder & CTO at
      <a href="https://www.findheim.at">Findheim,</a>
      a Vienna based real-estate matching platform. 10+ years of experience and many founded startups, allowed me to work on innovative
      ideas. Beside, I'm passionate about fast-loading, easy to use websites/apps.
    </p>
    <a href="/about" class="more-link">Read more about me →</a>
  </div>

  <section class="articles">
    <h2>
      Latest Articles
      <a href="/blog" class="more-link">See all →</a>
    </h2>

    <ul>
      {#each posts as post}
        <li>
          <h3>
            <a href="/blog/{post.slug}">{post.content.title}</a>
          </h3>
          <time
            title="Originally published {formatDate('YYYY-MM-DD', new Date(post.first_published_at))}"
            datetime={formatDate('YYYY-MM-DD', new Date(post.first_published_at))}>
            {@html formatDateNth(new Date(post.first_published_at))}
          </time>
        </li>
      {/each}
    </ul>
  </section>

</PageTransition>
