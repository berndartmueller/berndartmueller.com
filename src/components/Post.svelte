<script>
  import Image from 'svelte-image';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  import { formatDate, formatDateNth } from './../utils/formatDate';
  import PageTransition from './PageTransition.svelte';
  import { getPageUrl as getFullPageUrl, encodeURL } from './../utils/url';
  const { page } = stores();

  onMount(async () => {
    // hack for adding location onto anchor links bc of base element
    [...document.querySelectorAll('a[href^="#"]')].map(x => (x.href = document.location + new URL(x.href).hash));

    const commentsElem = document.querySelector('#comments');

    lazyInit(commentsElem, () => {
      let isLoaded = document.querySelectorAll('.utterances-script');

      let myScript = document.createElement('script');
      myScript.src = 'https://utteranc.es/client.js';
      myScript.setAttribute('repo', 'berndartmueller/berndartmueller.com-comments');
      myScript.setAttribute('issue-term', 'pathname');
      myScript.setAttribute('theme', 'preferred-color-scheme');
      myScript.crossOrigin = 'anonymous';
      myScript.className = 'utterances-script';

      commentsElem.appendChild(myScript);

      if (isLoaded.length > 0) {
        return;
      }
    });
  });

  export let post, otherPosts;

  function lazyInit(element, fn, options = {}) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        observer.disconnect();
        fn();
      }
    }, options);

    observer.observe(element);
  }

  function getPageUrl() {
    return getFullPageUrl($page.path);
  }

  function ldJSON(content) {
    const url = getPageUrl($page.path);

    const json = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.berndartmueller.com',
          name: 'Bernd Artmüller',
          url: 'https://www.berndartmueller.com',
          sameAs: ['https://twitter.com/berndartmueller'],
          logo: {
            '@type': 'ImageObject',
            '@id': 'https://css-tricks.com/#logo',
            inLanguage: 'en-US',
            url: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/06/akqRGyta_400x400.jpg?ssl=1',
            caption: 'CSS-Tricks',
          },
          image: {
            '@id': 'https://css-tricks.com/#logo',
          },
        },

        {
          '@type': 'WebSite',
          '@id': 'https://www.berndartmueller.com',
          url: 'https://www.berndartmueller.com',
          name: 'Bernd Artmüller',
          description: 'Tips, Tricks, and Techniques on using Cascading Style Sheets.',
          publisher: {
            '@id': 'https://www.berndartmueller.com',
          },
          inLanguage: 'en-US',
        },

        {
          '@type': 'ImageObject',
          '@id': url,
          inLanguage: 'en-US',
          url: content.content.image.image,
        },

        {
          '@type': 'WebPage',
          '@id': url,
          url,
          name: content.content.title,
          isPartOf: {
            '@id': 'https://www.berndartmueller.com',
          },
          primaryImageOfPage: {
            '@id': content.content.image.image,
          },
          datePublished: new Date(content.first_published_at).toISOString(),
          dateModified: new Date(content.first_published_at).toISOString(),
          description: content.content.SEO.description,
          breadcrumb: {
            '@id': url,
          },
          inLanguage: 'en-US',
        },

        {
          '@type': 'Article',
          '@id': url,
          isPartOf: {
            '@id': url,
          },
          author: {
            '@id': 'https://css-tricks.com/#/schema/person/5a890b79c7fd7fbd24570ecd9cc9ff06',
          },
          headline: 'Everything You Need to Know About Date in JavaScript',
          datePublished: '2019-06-11T14:27:20+00:00',
          dateModified: '2020-05-11T23:09:27+00:00',
          commentCount: '27',
          mainEntityOfPage: {
            '@id': url,
          },
          publisher: {
            '@id': 'https://www.berndartmueller.com',
          },
          image: {
            '@id': content.content.image.image,
          },
          articleSection: 'Article',
          inLanguage: 'en-US',
        },
      ],
    };

    return `<script type="application/ld+json">${JSON.stringify(json)}<\/script>`;
  }
</script>

<style>
  .content {
    margin-top: 3rem;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 3.3rem;
  }

  h1 + time {
    font-style: italic;
    display: block;
    text-align: center;
    color: var(--color-text-shade);
  }

  .back {
    display: block;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--color-accent);
    font-size: 1.4rem;
    font-family: 'Playfair Display', Georgia, Times, serif;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    letter-spacing: 0.02em;
  }

  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
  */
  .content :global(h2),
  .content :global(h3) {
    margin-top: 3rem;
    scroll-margin-top: 4rem;
    position: relative;
  }

  .content :global(.lead) {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 2.5rem;
  }

  .content :global(h2) {
    font-size: 2.1em;
    font-weight: 500;
  }

  .content :global(h3) {
    font-size: 1.6em;
    font-weight: 500;
  }

  .content :global(p) :global(a) {
    position: relative;
    text-decoration: none;
    font-weight: bold;
    color: var(--color-primary);
  }

  .content :global(p) :global(a::after) {
    content: '';
    height: 4px;
    background-color: var(--color-primary);
    width: 100%;
    position: absolute;
    bottom: -3px;
    left: 0;
    z-index: -1;
  }

  .content :global(figure) {
    max-width: none;
    margin: 2rem auto;
    text-align: center;
  }

  .content :global(figcaption) {
    padding-top: 0.75rem;
    font-style: italic;
    font-size: 1rem;
    color: var(--color-text-shade);
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto 2rem;
    color: #fff;
    font-style: italic;
    text-align: center;
  }

  .content :global(figure) :global(img) {
    margin-bottom: 0;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
  }

  .content :global(pre.shiki) {
    color: #f8f8f2;
    background-color: var(--syntax-highlight-bg) !important;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    padding: var(--syntax-highlight-padding);
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    tab-size: 4;
    hyphens: none;
  }

  .content :global(p) :global(code) {
    font-family: menlo, inconsolata, monospace;
    color: var(--color-text);
    background: var(--color-bg-shade);
    padding: 0.25rem;
    border-radius: 0.25rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    box-decoration-break: clone;
    margin: 0 0.15rem;
    font-size: 75%;
  }

  .content :global(.heading-link) {
    display: none;
    position: absolute;
    text-decoration: none;
    color: #57666b;
    opacity: 0.9;
    border: none;
    margin: 0;
    left: -2rem;
    padding-right: 2rem;
    top: 0;
    font-size: 100%;
    font-weight: 100;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
      Segoe UI Symbol;
  }

  .content :global(h2:hover) :global(.heading-link),
  .content :global(h3:hover) :global(.heading-link) {
    display: block;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .content :global(p) {
    margin: 2rem 0;
  }

  .comments h3 {
    margin-bottom: 1rem;
  }

  .comments:not(:empty) {
    margin-top: 3rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .secondary-headline {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .further-read {
    margin: 4rem 0;
  }

  .further-read ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .further-read ul li {
    margin: 1rem 0;
  }

  .further-read h4 {
    font-weight: bold;
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
  }

  .further-read a {
    text-decoration: none;
  }

  .further-read time {
    font-size: 0.85rem;
    font-style: italic;
    color: #7e8288;
  }

  .newsletter {
    margin: 4rem 0;
  }

  .newsletter .subscribe-form {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .newsletter form input[type='email'] {
    padding: 1rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-grey-light);
    font-size: 1rem;
    flex-grow: 1;
    color: #fff;
  }

  .newsletter form input[type='submit'] {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
  }

  /* .sharing {
    text-align: center;
    margin: 2.5rem 0 1rem;
  } */

  .author {
    text-align: center;
    border-top: 1px solid var(--color-grey-light);
    border-bottom: 1px solid var(--color-grey-light);
    margin: 4rem 0;
    padding: 2rem 0;
  }

  :global(.author__image) {
    height: 80px !important;
    width: 80px !important;
    border-radius: 100%;
    border: none;
    display: block;
    overflow: hidden;
    min-height: auto !important;
  }

  .author__social {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .author__social-link {
    text-decoration: none;
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }

  .author__social-link svg {
    margin-right: 0.4rem;
  }

  @media (min-width: 1024px) {
    .content :global(.extend) {
      margin-left: -2.5rem;
      margin-right: -2.5rem;
    }
  }
</style>

<svelte:head>
  <meta property="article:published_time" content={new Date(post.first_published_at).toISOString()} />
  <meta property="article:modified_time" content={new Date(post.first_published_at).toISOString()} />

  {@html ldJSON(post)}
</svelte:head>

{#each [post] as p (p.uuid)}
  <PageTransition>
    <a href="/blog" class="back">← See all posts</a>

    <h1>{p.content.title}</h1>
    <time
      title="Originally published {formatDate('YYYY-MM-DD', new Date(p.first_published_at))}"
      datetime={formatDate('YYYY-MM-DD', new Date(p.first_published_at))}>
      {@html formatDateNth(new Date(p.first_published_at))}
    </time>

    <div class="content">
      {#if p.content.image}
        <figure class="extend">
          <a href={p.content.image.image}>
            <img src={p.content.image.image} alt={p.content.image.caption} />
          </a>
          <figcaption>{p.content.image.caption}</figcaption>
        </figure>
      {/if}

      <div class="lead">
        {@html p.content.lead}
      </div>

      {@html p.content.content}
    </div>

    <!-- <div class="sharing">
      <div class="sharing__buttons">
        <a
          title="Twitter"
          class="twitter"
          href="https://twitter.com/intent/tweet?text={encodeURL(p.content.title)}&url={getPageUrl()}"
          rel="noopener"
          target="_blank">
          <i class="icon icon-twitter" />
          <span class="hidden">Twitter</span>
        </a>
        <a
          title="LinkedIn"
          class="linkedin"
          href="https://www.linkedin.com/shareArticle?mini=true&amp;url={getPageUrl()}&amp;title={encodeURL(p.content.title)}"
          rel="noopener"
          target="_blank">
          <i class="icon icon-linkedin" />
          <span class="hidden">LinkedIn</span>
        </a>
        <a title="Email" class="email" href="mailto:?subject={encodeURL(p.content.title)}&amp;body={getPageUrl()}">
          <i class="icon icon-mail" />
          <span class="hidden">Email</span>
        </a>
      </div>
    </div> -->

    <div class="author">
      <Image src="/bernd_artmueller.jpg" alt="Bernd Artmüller" wrapperClass="author__image" />

      <p class="author__social">
        <a href="https://twitter.com/berndartmueller" class="author__social-link" title="Twitter" target="_blank" rel="noopener">
          <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
            <title>Twitter</title>
            <path
              d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814
              11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185
              4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41
              1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
              fill="currentColor" />
          </svg>
          @berndartmueller
        </a>
        <a href="https://github.com/berndartmueller" class="author__social-link" title="GitHub" target="_blank" rel="noopener">
          <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
            <title>GitHub</title>
            <path
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476
              0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013
              1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938
              0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337
              1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562
              4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022
              12c0-5.525-4.475-10-10-10z"
              fill="currentColor" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/berndartmueller/" class="author__social-link" title="LinkedIn" target="_blank" rel="noopener">
          <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22.258 22.258" aria-hidden="true" role="img">
            <title>LinkedIn</title>
            <path
              d="M5.4 3c0 1.3-1 2.5-2.7 2.5C1 5.5 0 4.3 0 3 0 1.6 1 .5 2.7.5c1.6 0 2.6 1 2.7 2.5zM.3 21.8H5V7.4H.3v14.4zM16.8 7a4.7 4.7 0
              00-4.3 2.3v-2H7.7v14.4h4.8v-8l.1-1.2c.4-.9 1.2-1.8 2.5-1.8 1.7 0 2.4 1.4 2.4 3.3v7.7h4.8v-8.3c0-4.4-2.4-6.4-5.5-6.4z"
              fill="currentColor" />
          </svg>
        </a>
      </p>

      <p class="author__text">
        Bernd Artmüller is a Full-Stack developer living in Vienna, Austria 🇦🇹. Learner Advocate @eggheadio! UX/UI Engineer! General
        Assembly alum [SEI 08]!
      </p>

      <a href="/about" class="more-link">Read more about me →</a>

    </div>

    <div class="further-read">
      <h3 class="secondary-headline">More to read</h3>

      <ul>
        {#each otherPosts as otherPost}
          <li>
            <h4>
              <a href="/blog/{otherPost.slug}">{otherPost.content.title}</a>
            </h4>
            <time
              title="Originally published {formatDate('YYYY-MM-DD', new Date(otherPost.first_published_at))}"
              datetime={formatDate('YYYY-MM-DD', new Date(otherPost.first_published_at))}>
              {@html formatDateNth(new Date(otherPost.first_published_at))}
            </time>
          </li>
        {/each}
      </ul>
    </div>

    <div class="newsletter">
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/berndartmueller"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://buttondown.email/berndartmueller', 'popupwindow')">

        <h3 class="secondary-headline">
          <label for="newsletter-email">Be the first to know about new articles!</label>
        </h3>

        <div class="subscribe-form">
          <input id="newsletter-email" type="email" name="email" placeholder="Your e-mail address would love it here..." required />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
        </div>
      </form>
    </div>

    <div id="comments" class="comments">
      <h3 class="secondary-headline">Got a question or feedback?</h3>

    </div>
  </PageTransition>
{/each}
