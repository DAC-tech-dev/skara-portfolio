/**
 * Google AdSense publisher ID.
 *
 * This value is public — it ships in index.html, in every ad unit's markup and
 * in ads.txt — so it is committed as the default rather than kept in a secret.
 * VITE_ADSENSE_CLIENT can still override it (e.g. a staging property).
 *
 * If you change it, change it in all three places:
 *   - index.html          (the loader <script src="...?client=...">)
 *   - public/ads.txt      (the authorised-seller line)
 *   - here
 */
export const ADSENSE_CLIENT =
  (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined) || 'ca-pub-8487777891911418';

/**
 * The adsbygoogle command queue. It is a plain array that the loader script
 * drains, with a couple of configuration flags hung off it as properties.
 */
export type AdsByGoogleQueue = unknown[] & {
  /** 1 = request non-personalised ads, 0 = personalised. */
  requestNonPersonalizedAds?: 0 | 1;
};

declare global {
  interface Window {
    adsbygoogle?: AdsByGoogleQueue;
  }
}
