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
 * Ad unit IDs (the `data-ad-slot` value) from AdSense → Ads → By ad unit.
 *
 * Deliberately empty until the site is approved and real units exist. An
 * <AdSlot> without an ID renders nothing; before this, each page showed an empty
 * box labelled "Advertisement" around a made-up ID, which is exactly what
 * AdSense's reviewers flag as an unfinished site. Approval only needs the loader
 * in index.html — no units — and Auto ads can then be switched on with no code.
 *
 * `mixes` is best left empty: those reels carry commercially released tracks,
 * and AdSense does not allow ads beside copyrighted material the site has no
 * rights to.
 */
export const AD_SLOTS: Record<'home' | 'about' | 'mixes' | 'events' | 'gallery' | 'contact', string> = {
  home: '',
  about: '',
  mixes: '',
  events: '',
  gallery: '',
  contact: '',
};

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
