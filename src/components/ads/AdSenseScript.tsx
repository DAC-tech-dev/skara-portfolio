import { useEffect, useState } from 'react';
import { hasAdConsent } from './consent';

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;
const SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

/**
 * Injects the AdSense loader once, and only after the visitor has accepted
 * advertising cookies. Loading it up front would set cookies pre-consent.
 */
export default function AdSenseScript() {
  const [consented, setConsented] = useState(hasAdConsent);

  useEffect(() => {
    const onChange = () => setConsented(hasAdConsent());
    window.addEventListener('skara:consent', onChange);
    return () => window.removeEventListener('skara:consent', onChange);
  }, []);

  useEffect(() => {
    if (!CLIENT || !consented) return;
    if (document.querySelector(`script[src^="${SRC}"]`)) return;

    const s = document.createElement('script');
    s.src = `${SRC}?client=${CLIENT}`;
    s.async = true;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }, [consented]);

  return null;
}
