<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
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
    border-bottom: 1px solid #e1e3e6;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }

  h2 a {
    text-decoration: none;
  }

  .meta {
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    .meta {
      color: #909499;
    }

    article {
      border-color: #3b3d40;
    }
  }
</style>

<svelte:head>
  <title>Blog - berndartmueller.com</title>
</svelte:head>

<h1>Blog</h1>

<p>
  Candid thoughts about React.js, Node.js, startups and other interesting things. Subscribe to the newsletter to be notified when I publish
  something new.
</p>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <article>
        <h2>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h2>

        <div class="meta">
          <time datetime="10-07-2019">10 Jul 2019</time>
        </div>

        <p class="excerpt">{post.excerpt}…</p>

        <a href="blog/{post.slug}">Read</a>
      </article>
    </li>
  {/each}
</ul>
