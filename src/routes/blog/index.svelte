<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/posts.json`);
    const data = await res.json();

    return { posts: data.posts || [] };
  }
</script>

<script>
  import PageTransition from './../../components/PageTransition.svelte';
  import { formatDate, formatDateNth } from './../../utils/formatDate';
  import { stores } from '@sapper/app';

  export let posts;
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    list-style-type: none;
  }

  article {
    padding: 4rem 0;
    border-top: 1px solid var(--color-grey-light);
  }

  ul li:first-child article {
    border-top: none;
    padding-top: 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }

  h2 a {
    text-decoration: none;
  }

  .meta {
    margin-top: 0.75rem;
    font-weight: 400;
    font-size: 1rem;
    font-style: italic;
    color: var(--color-text-light);
  }
</style>

<svelte:head>
  <title>Articles - Bernd Artmüller</title>
  <meta name="description" value="I'm Bernd Artmüller and I'm a passionate Web Developer. Typescript, ..." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.berndartmueller.com/blog" />
  <meta name="twitter:url" content="https://www.berndartmueller.com/blog" />
  <link rel="canonical" href="https://www.berndartmueller.com/blog" />
</svelte:head>

<PageTransition>
  <ul>
    {#each posts as post}
      <li>
        <article>
          <h2>
            <a rel="prefetch" href="blog/{post.slug}">{post.content.title}</a>
          </h2>

          <div class="meta">
            <time
              title="Originally published {formatDate('YYYY-MM-DD', new Date(post.first_published_at))}"
              datetime={formatDate('YYYY-MM-DD', new Date(post.first_published_at))}>
              {@html formatDateNth(new Date(post.first_published_at))}
            </time>

          </div>

          <p class="excerpt">
            {@html post.content.excerpt}
          </p>

          <a href="blog/{post.slug}" class="more-link">Read article</a>
        </article>
      </li>
    {/each}
  </ul>
</PageTransition>
