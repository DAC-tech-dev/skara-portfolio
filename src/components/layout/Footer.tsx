import { Link } from 'react-router-dom';
import { Crown, Mail, MapPin } from 'lucide-react';
import { nav, site, socials } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-700 bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Crown className="h-5 w-5 text-gold-400" />
              <span className="display-xl text-2xl text-bone">
                DJ&nbsp;<span className="text-gold-foil">SKARA</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="font-script mt-5 text-2xl text-gold-400">{site.script}</p>
          </div>

          {/* Navigate */}
          <div>
            <h2 className="eyebrow">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-chrome-500 transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="eyebrow">Bookings</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-chrome-500 transition-colors hover:text-gold-400"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-chrome-500">
                <MapPin className="h-4 w-4 shrink-0" />
                {site.regions.join(' • ')}
              </li>
            </ul>

            <h2 className="eyebrow mt-8">Follow</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="inline-block rounded-full border border-ink-600 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-chrome-500 uppercase transition hover:border-gold-600 hover:text-gold-400"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-14 flex flex-col gap-4 pt-7 text-xs text-chrome-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-gold-400">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold-400">
              Terms
            </Link>
            <span className="hidden sm:inline">·</span>
            <span>
              Built by{' '}
              <a
                href={site.builtBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-chrome-500 transition-colors hover:text-gold-400"
              >
                {site.builtBy.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
