<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #e1e3e6;
    padding: 0 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: #e1e3e6;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 1rem;
    display: block;
  }

  @media (prefers-color-scheme: dark) {
    nav {
      border-color: #3b3d40;
    }

    .selected::after {
      background-color: #3b3d40;
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">Blog</a>
    </li>
  </ul>
</nav>
