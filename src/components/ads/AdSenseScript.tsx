import { useEffect, useState } from 'react';
import { hasAdConsent } from './consent';
import type { AdsByGoogleQueue } from './client';

/**
 * Applies the visitor's advertising-cookie choice to AdSense.
 *
 * The loader itself is a static tag in index.html — it has to be, or the
 * AdSense verification crawler (which does not run the app) never sees it.
 * So consent is expressed here instead of by withholding the script:
 * until the visitor accepts, ads are requested non-personalised.
 *
 * `requestNonPersonalizedAds` is read off the queue when a unit is filled, so
 * setting it before AdSlot pushes is what makes it take effect.
 *
 * Note: for EEA/UK traffic Google requires a certified CMP; this flag alone is
 * not sufficient there. See README.
 */
export default function AdSenseScript() {
  const [consented, setConsented] = useState(hasAdConsent);

  useEffect(() => {
    const onChange = () => setConsented(hasAdConsent());
    window.addEventListener('skara:consent', onChange);
    return () => window.removeEventListener('skara:consent', onChange);
  }, []);

  useEffect(() => {
    const queue: AdsByGoogleQueue = (window.adsbygoogle = window.adsbygoogle || []);
    queue.requestNonPersonalizedAds = consented ? 0 : 1;
  }, [consented]);

  return null;
}
