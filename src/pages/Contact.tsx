import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import AdSlot from '@/components/ads/AdSlot';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import Magnet from '@/components/reactbits/Magnet';
import { site, socials } from '@/lib/site';

/**
 * Optional POST endpoint (Formspree, Web3Forms, Netlify Forms …). With no
 * endpoint configured the form falls back to opening the visitor's mail client,
 * so the prototype is useful before any service is wired up.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'error';

const eventTypes = [
  'Club night',
  'Wedding',
  'Private party',
  'Corporate / brand',
  'Other',
] as const;

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans do not.
    if (data.get('company')) return;

    if (!ENDPOINT) {
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone')}`,
        `Event type: ${data.get('eventType')}`,
        `Date: ${data.get('date')}`,
        `Venue / city: ${data.get('venue')}`,
        '',
        `${data.get('message')}`,
      ].join('\n');

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Booking enquiry — ${data.get('eventType')}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const field =
    'w-full rounded-xl border border-ink-600 bg-ink-850 px-4 py-3.5 text-sm text-bone placeholder:text-chrome-700 transition-colors focus:border-gold-600 focus:outline-none';
  const label =
    'mb-2 block text-[10px] font-semibold tracking-[0.2em] text-chrome-500 uppercase';

  return (
    <>
      <Seo
        title="Contact & Bookings"
        path="/contact"
        description={`Book DJ Skara for your event. Straight answers on availability within 24 hours — ${site.email}`}
      />

      <PageHeader
        eyebrow="Bookings open"
        title="Get in touch"
        lead="Tell us the date, the venue and the crowd. You'll get a straight answer on availability and pricing within 24 hours."
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_20rem] lg:gap-20 lg:px-10">
          {/* Form */}
          <AnimatedContent distance={50} duration={0.8}>
            <form onSubmit={onSubmit} className="max-w-2xl">
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="name">
                    Your name *
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Full name" />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className={label} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={field}
                    placeholder="0XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className={label} htmlFor="eventType">
                    Event type *
                  </label>
                  <select id="eventType" name="eventType" required className={field}>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="date">
                    Event date
                  </label>
                  <input id="date" name="date" type="date" className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="venue">
                    Venue / city
                  </label>
                  <input
                    id="venue"
                    name="venue"
                    className={field}
                    placeholder="Venue name, town"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className={label} htmlFor="message">
                  Tell us about the night *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={`${field} resize-y`}
                  placeholder="Expected guests, set length, whether sound and lighting are needed…"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Magnet padding={60} magnetStrength={4}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-9 py-4 text-[11px] font-bold tracking-[0.2em] text-ink-950 uppercase transition-colors hover:bg-gold-200 disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  </button>
                </Magnet>

                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-sm text-gold-400" role="status">
                    <Check className="h-4 w-4" />
                    {ENDPOINT ? 'Thanks — we\'ll be in touch.' : 'Opening your mail app…'}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong — email us directly instead.
                  </p>
                )}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-chrome-700">
                By sending this form you agree to us using your details to respond to your
                enquiry. Nothing is shared with third parties.
              </p>
            </form>
          </AnimatedContent>

          {/* Direct details */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="surface-card rounded-2xl p-7">
              <h2 className="eyebrow">Straight through</h2>

              <a
                href={`mailto:${site.email}`}
                className="mt-5 flex items-start gap-3 text-sm text-chrome-300 transition-colors hover:text-gold-400"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="break-all">{site.email}</span>
              </a>

              <p className="mt-4 flex items-start gap-3 text-sm text-chrome-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {site.regions.join(' & ')}, South Africa
              </p>

              <h2 className="eyebrow mt-8">Follow</h2>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="flex items-center justify-between text-sm text-chrome-500 transition-colors hover:text-gold-400"
                    >
                      <span>{s.label}</span>
                      <span className="text-xs text-chrome-700">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="font-script mt-8 text-3xl leading-none text-gold-400">
                {site.script}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <AdSlot slot="6666666666" />
    </>
  );
}
