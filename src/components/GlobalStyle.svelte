<style global>
  :global(:root) {
    --color-primary: #bc2457;
    --color-grey-light: #e7e9ea;
    --color-accent: #bc2457;
    --color-bg: #fffffe;
    --color-bg-shade: #f0f0f1;
    --color-text: #47515c;
    --color-text-shade: #758495;
    --color-text-light: #aeb7c2;
    --color-text-headline: #333;
    --syntax-highlight-bg: #292d3e;
    --syntax-highlight-padding: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --color-primary: #bc2457;
      --color-grey-light: #2e2f38;
      --color-bg: #0f0e17;
      --color-bg-shade: #27282e;
      --color-text: #e1e1ea;
      --color-text-shade: #e1e1ea;
      --color-text-light: #909499;
      --color-text-headline: #fffffe;
      --syntax-highlight-bg: transparent;
      --syntax-highlight-padding: 0rem;
    }
  }

  :global(#nprogress) {
    pointer-events: none;
  }

  :global(#nprogress) :global(.bar) {
    background-color: rgba(112, 134, 156, 0.8);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    color: red;
  }

  /* Fancy blur effect */
  :global(#nprogress) :global(.peg) {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #608498, 0 0 5px #29d;
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text);
    background: var(--color-bg);
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    margin: 2em 0 1em 0;
    font-weight: bold;
    line-height: 1.2;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    color: var(--color-text-headline);
  }

  :global(h1) {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 3rem;
    letter-spacing: -0.01em;
    margin: 0 0 0.75em 0;
  }

  :global(h2) {
    font-size: 1.8rem;
  }

  :global(h1 + p) {
    text-align: center;
  }

  :global(a) {
    color: inherit;
  }

  :global(ul) {
    list-style-position: inside;
    padding-left: 0;
  }

  :global(code) {
    font-family: menlo, inconsolata, monospace;
    font-size: calc(1em - 2px);
    color: #555;
    background-color: #f0f0f0;
    padding: 0;
    border-radius: 2px;
  }

  :global(.more-link) {
    color: var(--color-accent);
    font-size: 1.2rem;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    :global(code) {
      background-color: transparent;
    }
  }

  @media (min-width: 400px) {
    :global(body) {
      font-size: 18px;
    }
  }
</style>
