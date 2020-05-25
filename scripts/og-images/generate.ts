import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { getHTML } from './template';

export async function generate(posts: Array<{ slug: string; title: string; subTitle: string }>, headless: boolean = false) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  page.setViewport({ width: 1200, height: 628 });

  console.log('Taking screenshots...');

  let i = 0;
  for (const post of posts) {
    i++;
    const { slug, title } = post;

    const filePath = path.resolve(`__sapper__/export/og_image/blog/${slug}.png`);

    ensureDirectoryExistence(filePath);

    // if (fs.existsSync(filePath)) continue; // skip any images that were already there

    // do work
    if (title.length > 59) console.log('Warning: post "' + slug + '" has a long title that will look bad: ', title);

    const html = getHTML({
      title,
      theme: 'light',
      fontSize: Math.min(20, Math.max(6, Math.floor(80 / title.length))) + 'vw',
    });

    await page.setContent(html);
    await page.screenshot({ path: filePath });

    console.log('Screenshotted ', filePath);
  }

  if (headless) {
    await browser.close();
  }

  console.log(i + ' screenshots done!');
}

let seenDirName = '';

function ensureDirectoryExistence(filePath: string) {
  var dirname = path.dirname(filePath);

  if (dirname === seenDirName) return; // short circuit if seen

  seenDirName = dirname; // set seen

  if (fs.existsSync(dirname)) {
    return true;
  }

  ensureDirectoryExistence(dirname);

  fs.mkdirSync(dirname);
}
