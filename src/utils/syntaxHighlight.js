export function highlightCode(highlighter, code, language = 'javascript') {
  const html = highlighter.codeToHtml(code, language);

  return html;
}
