<script>
  export let segment;

  const navSelector = 'header nav';

  function handleToggleMenu() {
    const navElement = getNavElement(navSelector);

    if (isNavOpen(navElement)) {
      closeNav(navElement);
    } else {
      openNav(navElement);
    }
  }

  function handleCloseMenu() {
    const navElement = getNavElement(navSelector);

    closeNav(navElement);
  }

  function getNavElement(selector) {
    return document.querySelector(selector);
  }

  function isNavOpen(navElement) {
    return navElement && navElement.classList.contains('nav--open');
  }

  function openNav(navElement) {
    navElement && navElement.classList.add('nav--open');
  }

  function closeNav(navElement) {
    navElement && navElement.classList.remove('nav--open');
  }
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    max-width: 1900px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    padding: 1em 0;
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;
    display: none;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
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

  nav a {
    color: var(--color-text);
    padding: 0.4rem 15%;
    margin: 0.25rem 0;
    font-size: 2rem;
  }

  .selected {
    position: relative;
    font-weight: bold;
    color: var(--color-primary);
  }

  .logo,
  nav,
  .social {
    align-items: center;
    display: flex;
  }

  .social {
    display: none;
    justify-content: center;
  }

  .logo__avatar {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .logo__name {
    font-weight: 700;
  }

  .burger-button {
    border: 0;
    padding: 0;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: var(--color-text);
    background-color: transparent;
    position: relative;
    z-index: 101;
  }

  .burger-button:focus {
    outline: 0;
  }

  .burger-icon {
    display: block;
    width: 24px;
    height: 12px;
    position: relative;
    cursor: pointer;
    margin: 0 auto;
    transform: translate(0, -1px) rotate(0);
    transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .burger-icon__bar {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: currentColor;
    left: 0;
    transform: rotate(0);
    transition: transform 0.25s ease-in-out;
  }

  .burger-icon__bar:nth-child(1) {
    top: 0;
  }

  .burger-icon__bar:nth-child(2),
  .burger-icon__bar:nth-child(3) {
    top: 50%;
  }

  .burger-icon__bar:nth-child(4) {
    top: 100%;
  }

  .bg {
    position: fixed;
    z-index: 99;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    pointer-events: none;
    visibility: hidden;
    backface-visibility: hidden;
    background-color: var(--color-bg);
  }

  :global(.nav--open) .bg {
    visibility: visible;
  }

  :global(.nav--open) .burger-button {
    color: var(--color-text);
  }

  :global(.nav--open) .burger-icon {
    transform: translate(-1px, 0) rotate(270deg);
  }

  :global(.nav--open) .burger-icon .burger-icon__bar:nth-child(1),
  :global(.nav--open) .burger-icon .burger-icon__bar:nth-child(4) {
    width: 0;
    top: 50%;
    left: 50%;
  }

  :global(.nav--open) .burger-icon .burger-icon__bar:nth-child(2) {
    transform: rotate(45deg);
  }

  :global(.nav--open) .burger-icon .burger-icon__bar:nth-child(3) {
    transform: rotate(-45deg);
  }

  :global(.nav--open) ul {
    display: flex;
  }

  @media (min-width: 1024px) {
    nav {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0.4em;
    }

    a {
      padding: 1em 1rem;
    }

    .burger-button {
      display: none;
    }

    nav a {
      color: var(--color-text);
      font-size: 18px;
      padding: 1em 1rem;
    }

    ul {
      display: block;
      margin: 0;
      padding: 0;
      width: auto;
      height: auto;
      position: relative;
      top: initial;
      left: initial;
    }

    .social {
      display: flex;
    }

    .selected {
      display: inline-block;
      color: var(--color-text);
    }

    .selected::after {
      background-color: var(--color-text);
    }
  }
</style>

<header>
  <a class="logo" href="/" rel="home" aria-label="Go to homepage">
    <img
      class="logo__avatar"
      src="data:image/jpeg;base64,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"
      width="56"
      height="56"
      alt="Bernd Artmüller" />
    <span class="logo__name">Bernd Artmüller</span>
  </a>

  <nav>
    <button
      on:click={handleToggleMenu}
      class="burger-button nav__togglebtn js-nav-toggle"
      aria-expanded="true"
      aria-controls="nav-menu"
      aria-label="Toggle Menu">
      <span class="burger-icon">
        <span class="burger-icon__bar" />
        <span class="burger-icon__bar" />
        <span class="burger-icon__bar" />
        <span class="burger-icon__bar" />
      </span>
    </button>

    <ul class="nav-menu">
      <li>
        <a on:click={handleCloseMenu} class={segment === undefined ? 'selected' : ''} href=".">Home</a>
      </li>

      <li>
        <a on:click={handleCloseMenu} class={segment === 'about' ? 'selected' : ''} href="/about">About</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a on:click={handleCloseMenu} rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="/blog">Articles</a>
      </li>
    </ul>

    <div class="bg" />
  </nav>

  <div class="social">
    <a href="https://twitter.com/berndartmueller" title="Twitter" target="_blank" rel="noopener">
      <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" role="img">
        <title>Twitter</title>
        <path
          d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814
          11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185
          0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693
          0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
          fill="currentColor" />
      </svg>
    </a>

    <a href="https://github.com/berndartmueller" title="Github" target="_blank" rel="noopener">
      <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" role="img">
        <title>GitHub</title>
        <path
          d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476
          0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013
          1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987
          1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024
          2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0
          1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
          fill="currentColor" />
      </svg>
    </a>

    <a href="/rss" title="RSS Feed">
      <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" role="img">
        <title>RSS</title>
        <circle cx="6.18" cy="17.82" r="2.18" fill="currentColor" />
        <path
          d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07
          7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
          fill="currentColor" />
      </svg>
    </a>
  </div>

</header>
