/**
 * Writes a real HTML file for every route, after `vite build` and the SSR build.
 *
 *   dist/index.html    ← /
 *   dist/about.html    ← /about   (served at /about by vercel.json cleanUrls)
 *   dist/404.html      ← unknown paths, served by Vercel with HTTP 404
 *
 * Each file is the client build's index.html with the page's markup inside
 * <div id="root"> and its own <title>, description, canonical and Open Graph
 * tags in <head>. The browser then hydrates that markup instead of starting
 * from an empty div.
 */
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const { render, prerenderPaths, notFoundPath } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
);

// React emits a page's hoistable head elements (<title>, <meta>, <link>) as a
// run at the very start of the output, ahead of the body markup.
const HOISTED = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)+/;

// The template's fallbacks, replaced by each page's own values.
const FALLBACK_TITLE = /<title>[\s\S]*?<\/title>/;
const FALLBACK_DESCRIPTION = /\s*<meta\s+name="description"[\s\S]*?\/>/;

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: dist/index.html has no empty <div id="root"></div> to fill');
}

function page(appHtml) {
  // `<!--$?-->` marks a Suspense boundary that was still pending when React
  // wrote it out: the visible markup is the loading spinner and the real page
  // is hidden. Shipping that would undo the point of prerendering.
  if (appHtml.includes('<!--$?-->')) {
    throw new Error('prerender: page rendered with a pending Suspense boundary (spinner instead of content)');
  }
  const head = appHtml.match(HOISTED)?.[0] ?? '';
  const body = appHtml.slice(head.length);
  if (!head.includes('<title>')) {
    throw new Error('prerender: rendered page has no <title> — is <Seo> missing?');
  }
  return template
    .replace(FALLBACK_DESCRIPTION, '')
    .replace(FALLBACK_TITLE, head.replace(/></g, '>\n    <'))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function outFile(url) {
  return url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url.slice(1)}.html`);
}

for (const url of prerenderPaths) {
  const html = page(await render(url));
  await writeFile(outFile(url), html);
  console.log(`prerender  ${url.padEnd(10)} → ${path.relative(root, outFile(url))}  ${(html.length / 1024).toFixed(1)} kB`);
}

await writeFile(path.join(dist, '404.html'), page(await render(notFoundPath)));
console.log(`prerender  ${'(404)'.padEnd(10)} → dist${path.sep}404.html`);

// The server bundle is a build tool, not a deliverable.
await rm(serverDir, { recursive: true, force: true });
