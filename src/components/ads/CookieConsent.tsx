import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { readConsent, writeConsent } from './consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only ask once, and never block first paint.
    const t = setTimeout(() => setOpen(readConsent() === null), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const decide = (value: 'granted' | 'denied') => {
    writeConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-ink-600 bg-ink-850/95 p-5 shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-chrome-300">
          We use cookies to keep the site running and to show advertising from Google. With
          your permission those ads are personalised; decline and you will still see ads, just
          not tailored ones. See our{' '}
          <Link to="/privacy" className="text-gold-400 underline underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => decide('denied')}
            className="rounded-full border border-ink-600 px-5 py-2.5 text-xs font-semibold tracking-wider text-chrome-300 uppercase transition hover:border-chrome-700 hover:text-bone"
          >
            Decline
          </button>
          <button
            onClick={() => decide('granted')}
            className="rounded-full bg-gold-400 px-5 py-2.5 text-xs font-semibold tracking-wider text-ink-950 uppercase transition hover:bg-gold-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
