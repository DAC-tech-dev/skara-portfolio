import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { hasAdConsent } from './consent';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

type AdSlotProps = {
  /** Ad unit ID from the AdSense dashboard (data-ad-slot). */
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  layoutKey?: string;
  className?: string;
  /** Label shown above the unit — AdSense policy requires ads be distinguishable. */
  label?: string;
};

/**
 * A single AdSense unit.
 *
 * Two SPA-specific hazards this handles:
 *  1. Pushing to an <ins> that already holds an ad throws. We key the element by
 *     route + slot so React mounts a genuinely fresh node on navigation.
 *  2. StrictMode double-invokes effects in dev, which would double-push. A ref
 *     guard makes the push idempotent per mounted element.
 */
export default function AdSlot({
  slot,
  format = 'auto',
  layoutKey,
  className,
  label = 'Advertisement',
}: AdSlotProps) {
  const { pathname } = useLocation();
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!CLIENT || !hasAdConsent()) return;
    if (pushed.current) return;

    const el = insRef.current;
    // AdSense marks a filled unit with this attribute; never push to it twice.
    if (!el || el.getAttribute('data-adsbygoogle-status')) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Blocked by an ad blocker or the script never loaded — fail silently,
      // the reserved space simply stays empty.
    }
  }, [pathname, slot]);

  // Without a publisher ID configured there is nothing to render. Returning null
  // keeps the layout honest rather than reserving space for an ad that cannot load.
  if (!CLIENT) return null;

  return (
    <aside
      className={cn('mx-auto w-full max-w-5xl px-6 py-10', className)}
      aria-label={label}
      data-testid="ad-slot"
    >
      <p className="mb-2 text-center text-[10px] tracking-[0.3em] text-chrome-700 uppercase">
        {label}
      </p>
      <ins
        key={`${pathname}-${slot}`}
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: 'block', minHeight: 90 }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
      />
    </aside>
  );
}
