/**
 * Minimal consent store for advertising cookies.
 *
 * South Africa's POPIA and the EU's GDPR both require an opt-in before
 * personalised-advertising cookies are set. Google also requires a certified
 * CMP for EEA/UK traffic — see README before going live in those markets.
 */

const KEY = 'skara.consent.ads.v1';

export type ConsentValue = 'granted' | 'denied';

export function readConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    // Private mode / blocked storage — treat as undecided.
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* no-op */
  }
  window.dispatchEvent(new CustomEvent('skara:consent', { detail: value }));
}

export function hasAdConsent(): boolean {
  return readConsent() === 'granted';
}
