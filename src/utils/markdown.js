import marked from 'marked';
import { highlightCode } from './syntaxHighlight';
const shiki = require('shiki');
const p = require('path');

export function render(content, { path }) {
  const renderer = new marked.Renderer();

  const theme = shiki.loadTheme(p.resolve('./src/utils/syntaxHighlightTheme.json'));

  return new Promise(resolve => {
    shiki
      .getHighlighter({
        theme,
      })
      .then(highlighter => {
        // highlight code
        renderer.code = (source, lang) => {
          return `
            <div style="margin: 3rem 0;">${highlightCode(highlighter, source, lang)}</div>
          `;
        };

        renderer.heading = (text, level) => {
          const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

          if (text.indexOf('<figure') > -1) {
            return text;
          }

          return `
            <h${level} id="${escapedText}">
              <a name="${escapedText}" class="heading-link" href="#${escapedText}">#</a>
              ${text}
            </h${level}>
          `;
        };

        renderer.image = (href, _title, text) => {
          return `
            <figure class="extend">
              <a href="${href}">
                <Image src="${href}" alt="${text}"/>
              </a>

              ${text ? `<figcaption>${text}</figcaption>` : ''}
            </figure>
          `;
        };

        const html = marked(content, { renderer });

        return resolve(html);
      });
  });
}
