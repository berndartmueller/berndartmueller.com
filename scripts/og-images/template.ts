import { readFileSync } from 'fs';
import twemoji from 'twemoji';

const twOptions = { folder: 'svg', ext: '.svg' };

const emojify = (text: string) => twemoji.parse(text, twOptions);

const bold = readFileSync(`${__dirname}/assets/fonts/PlayfairDisplay-Bold.woff2`).toString('base64');
const avatar = readFileSync(`${__dirname}/assets/images/avatar.jpg`).toString('base64');

function getCSS(theme: 'light' | 'dark', fontSize: string) {
  let background = 'white';
  let foreground = '#16161a';

  if (theme === 'dark') {
    background = 'black';
    foreground = 'white';
  }

  return `
    @font-face {
      font-family: 'Playfair Display';
      font-style: normal;
      font-display: swap;
      font-weight: 500;
      src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    body,
    html {
      margin: 0;
      padding: 0;
    }

    .wrapper {
      padding: 2rem 3rem;
    }

    .bodywrapper {
      background: ${background};
      font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
      min-height: calc(100vh - 4rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .content {
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 100%;
    }

    .avatar {
      height: 110px !important;
      width: 110px !important;
      border-radius: 100%;
      border: none;
      display: block;
      overflow: hidden;
      min-height: auto !important;
      position: relative;
      margin: 0 auto 4vh;
    }

    .avatar img {
      object-position: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .emoji {
      height: 1em;
      width: 1em;
      margin: 0 0.05em 0 0.1em;
      vertical-align: -0.1em;
    }

    p {
      margin: 0;
      font-weight: bold;
    }

    .heading {
      font-size: ${sanitizeHtml(fontSize)};
      font-style: normal;
      font-weight: bold;
      font-family: 'Playfair Display', Georgia, Times, serif;
      text-rendering: optimizeLegibility;
      color: ${foreground};
      line-height: 1.25;
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    .subtitle {
      padding: 3rem;
      font-size: 2em;
      font-style: normal;
      color: ${foreground};
      line-height: 1.25;
      width: 40vw;
    }

    .footer {
      padding: 2rem 0 0.5rem;
      width: 100%;
      font-size: 1.65rem;
      font-family: 'Playfair Display', Georgia, Times, serif;
      text-align: center;
      position: absolute;
      bottom: 0;
    }
  `;
}

export function getHTML({ title, theme, fontSize }: { title: string; subTitle?: string; theme?: 'light' | 'dark'; fontSize: string }) {
  return `
    <!DOCTYPE html>
    <html>
        <meta charset="utf-8">
        <title>Generated Image</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            ${getCSS(theme, fontSize)}
        </style>
        <body>
          <div class="wrapper">
            <div class="bodywrapper">
              <div class="content">
                <div class="avatar">
                  <img src="data:image/jpg;base64, ${avatar}" alt="Bernd Artmüller">
                </div>

                <div class="heading">${emojify(sanitizeHtml(title))}</div>
              </div>

              <div class="footer">
                <div>berndartmueller.com</div>
              </div>
            </div>
          </div>
        </body>
    </html>
  `;
}

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};

function sanitizeHtml(html) {
  return String(html).replace(/[&<>"'\/]/g, key => entityMap[key]);
}
