import { lazy, Suspense, type ComponentType } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';

// Home ships in the main bundle (it is the landing page); the rest split out.
const About = lazy(() => import('@/pages/About'));
const Mixes = lazy(() => import('@/pages/Mixes'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteFallback() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center" aria-busy="true">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink-600 border-t-gold-400" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

function lazyRoute(Page: ComponentType) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Page />
    </Suspense>
  );
}

/**
 * The route tree without a router around it, so the browser can mount it in a
 * BrowserRouter and the build can render it in a StaticRouter.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={lazyRoute(About)} />
        <Route path="mixes" element={lazyRoute(Mixes)} />
        <Route path="events" element={lazyRoute(EventsPage)} />
        <Route path="gallery" element={lazyRoute(Gallery)} />
        <Route path="contact" element={lazyRoute(Contact)} />
        <Route path="privacy" element={lazyRoute(Privacy)} />
        <Route path="terms" element={lazyRoute(Terms)} />
        <Route path="*" element={lazyRoute(NotFound)} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
