import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from '@/components/ads/CookieConsent';
import AdSenseScript from '@/components/ads/AdSenseScript';

/** Resets scroll on navigation — SPAs otherwise keep the previous offset. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <AdSenseScript />
      <Navbar />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
