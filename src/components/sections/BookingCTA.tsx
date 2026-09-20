import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import Magnet from '@/components/reactbits/Magnet';
import ShinyText from '@/components/reactbits/ShinyText';
import { site } from '@/lib/site';

export default function BookingCTA() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      {/* Warm spill from the rig */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(227,179,76,0.14),transparent_72%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="eyebrow justify-center">Bookings open</p>

        <h2 className="display-xl text-chrome mt-6 text-[clamp(2.5rem,9vw,7rem)] leading-[0.86]">
          Let&rsquo;s make
          <br />
          <span className="text-gold-foil">it happen</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Tell us the date, the venue and the crowd. You&rsquo;ll get a straight answer on
          availability and pricing within 24 hours.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnet padding={80} magnetStrength={3.5}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-9 py-4 text-[11px] font-bold tracking-[0.2em] text-ink-950 uppercase transition-colors hover:bg-gold-200"
            >
              <Mail className="h-4 w-4" />
              Request a date
            </Link>
          </Magnet>

          <a
            href={`mailto:${site.email}`}
            className="text-sm text-chrome-500 underline decoration-ink-600 underline-offset-8 transition-colors hover:text-gold-400 hover:decoration-gold-600"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2.5 text-chrome-700">
          <MapPin className="h-3.5 w-3.5" />
          <ShinyText
            text={`Available across ${site.regions.join(' & ')}`}
            className="text-[10px] font-semibold tracking-[0.24em] uppercase"
            color="#6a6a76"
            shineColor="#e3b34c"
            speed={5}
          />
        </div>
      </div>
    </section>
  );
}
