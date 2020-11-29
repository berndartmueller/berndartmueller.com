<script>
  import PageTransition from '../components/PageTransition.svelte';
  import Image from 'svelte-image';
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 0 2rem 0;
  }

  p {
    margin: 1em auto;
  }

  .image-wrapper {
    text-align: center;
    margin-bottom: 1.25rem;
  }

  :global(.myself-image) {
    height: 140px !important;
    width: 140px !important;
    border-radius: 100px;
    border: none;
    display: block;
    overflow: hidden;
    min-height: auto !important;
  }

  :global(.myself-image) :global(img) {
    border-radius: 100px;

    overflow: hidden;
  }

  h2 {
    margin-top: 3rem;
    scroll-margin-top: 4rem;
    position: relative;
    font-size: 1.6em;
    font-weight: bold;
  }

  h1 + p {
    text-align: left;
  }

  .social {
    display: flex;
    align-items: center;
  }

  .social a {
    margin-right: 1rem;
  }

  .timeline {
    margin-top: 2rem;
    margin-bottom: 5rem;
    text-align: left;
  }

  .timeline .entry-wrapper {
    position: relative;
  }

  .timeline .entry-wrapper .y {
    background-color: var(--color-bg);
    z-index: 10;
    line-height: 80px;
    font-size: 1.4rem;
    display: inline-block;
    position: relative;
  }

  .timeline .press-coverage .center-wrapper {
    position: relative;
    display: inline-block;
  }

  .timeline .press-coverage .logo-wrapper {
    border: 1px solid var(--color-grey-light);
    background-color: #fff;
    border-radius: 100%;
    position: relative;
    z-index: 10;
    display: block;
    padding: 20px;
    margin-bottom: 1rem;
    height: 40px;
    width: 40px;
  }

  .timeline .press-coverage .logo-wrapper :global(.logo) {
    height: 100%;
    width: 100%;
    display: block;
  }

  .timeline .press-coverage .info a {
    text-decoration: none;
  }

  .timeline .press-coverage strong {
    color: var(--color-primary);
    display: block;
    font-size: 1.1em;
  }

  .timeline .press-coverage .title {
    font-size: 0.9em;
    color: var(--color-text);
  }

  .timeline .press-coverage .title a {
    text-decoration: underline;
  }

  .speaking ul {
    list-style-type: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .speaking a {
    color: var(--color-primary);
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.1rem;
  }

  .speaking a + span {
    font-weight: 400;
    color: var(--color-text);
  }

  @media (min-width: 1024px) {
    .timeline {
      text-align: center;
    }

    .timeline .press-coverage .center-wrapper {
      height: 80px;
      width: 80px;
    }

    .timeline .entry-wrapper::before {
      background-color: var(--color-grey-light);
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 50%;
      z-index: 1;
    }

    .timeline .press-coverage {
      margin: 25px 0 0;
      position: relative;
    }

    .timeline .press-coverage .logo-wrapper {
      margin-bottom: 0;
    }

    .timeline .press-coverage.left .info {
      right: 100%;
      left: auto;
      text-align: right;
      padding-right: 50px;
      padding-left: 0;
    }

    .timeline .press-coverage.right .info {
      left: 100%;
      text-align: left;
      padding-left: 30px;
    }

    .timeline .press-coverage .info {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
    }

    .timeline .entry-wrapper {
      padding-bottom: 25px;
    }

    .timeline .entry-wrapper .y {
      margin-left: 0;
    }
  }
</style>

<svelte:head>
  <title>About - Bernd Artmüller</title>
  <meta name="description" value="I'm Bernd Artmüller and I'm a passionate Web Developer. Typescript, ..." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.berndartmueller.com/about" />
  <meta name="twitter:url" content="https://www.berndartmueller.com/about" />
  <link rel="canonical" href="https://www.berndartmueller.com/about" />
</svelte:head>

<PageTransition>
  <div class="image-wrapper">
    <Image src="/bernd_artmueller.jpg" alt="Bernd Artmüller" wrapperClass="myself-image" />
  </div>

  <h1>About myself</h1>

  <p>
    My name is Bernd Artmüller, 29 years young and I live in Vienna, Austria.
    <br />
    I'm the Co-Founder and CTO of
    <a href="https://www.findheim.at">findheim.at,</a>
    an Austria based real-estate matching platform startup.
  </p>

  <p>
    I'm passionate about building meaningful products, clean code that scales, great UX and sharing my knowledge. When I'm not coding, I'm
    either doing some kind of sports, reading, cooking or trying a new coffee espresso blend - preferably dark Italian roast.
  </p>

  <section>
    <h2>My Journey</h2>

    <p>
      In the last 10+ years, I started out as a web developer freelancer and began founding 4 startups. This allowed me to learn about
      entrepreneurship, startups, coding, UX, product management and much more.
    </p>

    <div class="timeline">
      <div class="entry-wrapper">
        <strong class="y">2009</strong>

        <div class="press-coverage left">
          <div class="center-wrapper">
            <a
              class="logo-wrapper"
              href="https://www.blazebit.com"
              target="_blank"
              rel="noopener"
              style="display: flex; align-items: center;">
              <div style="height: 13px; width: 100%;">
                <Image src="/blazebit_logo.png" alt="Blazebit" wrapperClass="logo" />
              </div>
            </a>

            <div class="info" style="visibility: visible; ">
              <a href="http://www.blazebit.com" target="_blank" rel="noopener">
                <strong>Freelancer</strong>
                <span class="title">
                  Providing web development and design services as
                  <a href="https://blazebit.com/" target="_blank" rel="noopener">blazebit.com</a>

                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="entry-wrapper">
        <strong class="y">2014</strong>

        <div class="press-coverage right">
          <div class="center-wrapper">
            <a class="logo-wrapper" href="http://www.sweazer.com" target="_blank" rel="noopener">
              <Image src="/sweazer_logo.png" alt="Sweazer" wrapperClass="logo" />
            </a>

            <div class="info" style="visibility: visible; ">
              <a href="http://www.sweazer.com" target="_blank" rel="noopener">
                <strong>Sweazer</strong>
                <span class="title">Tinder for Fashion App. † 2016</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="entry-wrapper">
        <strong class="y">2015</strong>

        <div class="press-coverage left">
          <div class="center-wrapper">
            <a class="logo-wrapper" href="http://www.lieblingsbrand.at" target="_blank" rel="noopener">
              <div style="margin-top: 3px;">
                <Image src="/lieblingsbrand_logo.png" alt="lieblingsbrand" wrapperClass="logo" />
              </div>
            </a>

            <div class="info" style="visibility: visible; ">
              <a href="http://www.lieblingsbrand.at" target="_blank" rel="noopener">
                <strong>lieblingsbrand.at</strong>
                <span class="title">Fashion E-Commerce Shop for 100+ Austrian Fashion Designers.</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="entry-wrapper">
        <strong class="y">2016</strong>

        <div class="press-coverage right">
          <div class="center-wrapper">
            <a class="logo-wrapper" href="https://www.zoomsquare.com" target="_blank" rel="noopener">
              <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 101 118" style="color: #1f6678; margin-top: -2px;">
                  <path
                    d="M64.44 50.9v23.36H5.24V28.6l29.6-22.05 29.6 22.05v9.85H69V26.3L34.85.88.7 26.3v52.52H69V50.9"
                    fill="currentColor" />
                  <path
                    d="M100.2 108.55V42.4H33.47v27.9h4.56V46.95h57.6V104H72.58l-8.64 5.1V104h-25.9V82.76h-4.56v25.8H59.2v8.76l14.87-8.77"
                    fill="currentColor" />
                </svg>
              </div>
            </a>

            <div class="info" style="visibility: visible; ">
              <a href="https://www.zoomsquare.com" target="_blank" rel="noopener">
                <strong>zoomsquare</strong>
                <span class="title">Real-estate search engine. Predecessor of Findheim. † 2018</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="entry-wrapper">
        <strong class="y">2017</strong>

        <div class="press-coverage left">
          <div class="center-wrapper">
            <a class="logo-wrapper" href="https://www.tailorpost.com" target="_blank" rel="noopener">
              <div class="logo">
                <svg
                  height="100%"
                  viewBox="0 0 41 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>tailorpost</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#1A1919" fill-rule="nonzero">
                      <polyline
                        id="Shape"
                        points="13.752 22.744 17.042 22.744 17.042 3.85 37.337 3.85 37.337 24.144 0 24.144 12.044 47.822 17.041 47.84 17.051
                        28.884 13.761 28.884 13.761 43.92 5.37 27.434 40.63 27.434 40.63 0.56 13.752 0.56 13.752 22.744" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>

            <div class="info" style="visibility: visible; ">
              <a href="https://www.tailorpost.com" target="_blank" rel="noopener">
                <strong>tailorpost</strong>
                <span class="title">News aggregator with AI based quality evaluation.</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="entry-wrapper">
        <strong class="y">2018 - Present</strong>

        <div class="press-coverage right">
          <div class="center-wrapper">
            <a class="logo-wrapper" href="https://www.findheim.at" target="_blank" rel="noopener">
              <div class="logo">
                <svg
                  style="margin-left: 2px;"
                  height="100%"
                  viewBox="0 0 90 113"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>findheim</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polyline
                      fill="#51889B"
                      points="29.98 20.14 89.12 20.14 89.29 0 7.14 0 7.14 49.08 0 51.84 0 72.97 7.14 70 7.14 112.14 29.98 112.14 29.98 60.51
                      43.26 54.99 80.06 71.61 80.06 51.19 42.57 35.26 29.97 40.16 29.97 20.16" />
                  </g>
                </svg>
              </div>
            </a>

            <div class="info" style="visibility: visible; ">
              <a href="https://www.findheim.at" target="_blank" rel="noopener">
                <strong>Findheim</strong>
                <span class="title">Real-estate matching platform. Home-buying re-imagined.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2>My Skills and Technology I'm working with</h2>

    <p>
      In my 10+ years of being a professional web developer, and through founding multiple startups, I was able to collect a broad skillset.
    </p>

    <div>
      <h3>Software Engineering</h3>
      <ul>
        <li>NodeJS, Python</li>
        <li>JavaScript, TypeScript</li>
        <li>Vue.js, React, Svelte</li>
        <li>AWS, elastic.co</li>
        <li>Postgres, MySQL, Redis, Elasticsearch</li>
        <li>Gitlab, Github, CI/CD, Docker</li>
        <li>System Design, Monitoring</li>
        <li>Machine Learning, NLP, Computer Vision, Pattern recognition</li>
      </ul>
    </div>

    <div>
      <h3>Product Management & Growth</h3>
      <ul>
        <li>Search Engine Optimization (strong focus on technical SEO)</li>
        <li>User Funnel Optimization (Hotjar, GA, Tag Manager, Amplitude)</li>
        <li>UX/UI</li>
        <li>Roadmap planning</li>
      </ul>
    </div>

    <div>
      <h3>Management</h3>
      <ul>
        <li>Leading a team of developers</li>
        <li>Investor/Stakeholder relations</li>
        <li>Business Development</li>
      </ul>
    </div>
  </section>

  <section class="speaking">
    <h2>Speaking</h2>

    <p>I enjoy sharing my knowledge and experience with others and attending meetups.</p>

    <ul>
      <li>
        <a href="https://speakerdeck.com/berndartmueller/a-framework-less-zoomsquare-dot-com" target="_blank" rel="noopener">
          Why we moved zoomsquare.com away from client side frameworks and JS stuff we use to make our user experience instant
        </a>
        <span>, ViennaJS - 2017</span>
      </li>
    </ul>

    <p>Reach out to me if you're interested having me as a speaker at an event.</p>
  </section>

  <section>
    <h2>Reach Out to Me</h2>

    <div class="social">
      <a href="https://twitter.com/berndartmueller" title="Twitter" target="_blank" rel="noopener">
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <title>Twitter</title>
          <path
            d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814
            11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185
            4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41
            1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
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

      <a href="https://www.linkedin.com/in/berndartmueller/" title="Github" target="_blank" rel="noopener">
        <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22.258 22.258" aria-hidden="true" role="img">
          <title>LinkedIn</title>
          <path
            d="M5.4 3c0 1.3-1 2.5-2.7 2.5C1 5.5 0 4.3 0 3 0 1.6 1 .5 2.7.5c1.6 0 2.6 1 2.7 2.5zM.3 21.8H5V7.4H.3v14.4zM16.8 7a4.7 4.7 0
            00-4.3 2.3v-2H7.7v14.4h4.8v-8l.1-1.2c.4-.9 1.2-1.8 2.5-1.8 1.7 0 2.4 1.4 2.4 3.3v7.7h4.8v-8.3c0-4.4-2.4-6.4-5.5-6.4z"
            fill="currentColor" />
        </svg>
      </a>
    </div>
  </section>
</PageTransition>
