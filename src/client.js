import * as sapper from '@sapper/app';

console.log('%c👋 Hey ho!', 'font: 3em sans-serif; line-height: 1.7;');
console.log(
  "%cIf you would like to check out this site's code, it is available on GitHub: https://github.com/berndartmueller/berndartmueller.com",
  'font: 1.25 sans-serif; line-height: 1.7;',
);
console.log(
  '%cA little follow never killed someone ;) https://www.twitter.com/berndartmueller',
  'font: 1.25 sans-serif; line-height: 1.7;',
);

sapper.start({
  target: document.querySelector('#sapper'),
});
