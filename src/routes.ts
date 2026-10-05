/**
 * Every route the build writes out as a static HTML file (see
 * scripts/prerender.mjs). A route missing from this list still works when
 * reached by clicking a link, but loading its URL directly returns a 404 — and
 * so does Google's crawler. Add new pages here, and to public/sitemap.xml.
 */
export const prerenderPaths = [
  '/',
  '/about',
  '/mixes',
  '/events',
  '/gallery',
  '/contact',
  '/privacy',
  '/terms',
] as const;

/** Rendered by the build into 404.html, which Vercel serves for unknown paths. */
export const notFoundPath = '/404';
