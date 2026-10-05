/**
 * Build-time renderer. Not shipped to the browser.
 *
 * scripts/prerender.mjs imports the compiled version of this file and calls
 * render() once per route, so every page is delivered as real HTML. Without it
 * the server sends an empty <div id="root"> and crawlers that do not execute
 * JavaScript — AdSense's site review among them — see a blank page.
 */
import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';

export { prerenderPaths, notFoundPath } from './routes';

export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
    {
      // React "outlines" any Suspense boundary larger than this (12.8 kB by
      // default): it writes the spinner as the visible markup and the page into
      // a <div hidden>, swapped in by an inline script. That helps a streamed
      // response paint early; for a static file it means non-JS crawlers see a
      // spinner, and in the browser hydration catches the swap half-done and
      // falls back to the spinner. Every lazy page here is over the limit.
      progressiveChunkSize: Number.POSITIVE_INFINITY,
    }
  );
  // Response decodes the whole stream at once, so multi-byte characters split
  // across chunks (em dashes, curly quotes) come through intact.
  return new Response(prelude).text();
}
