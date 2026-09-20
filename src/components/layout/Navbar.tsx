import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { nav, site } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation, and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-ink-700/80 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary"
      >
        <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Crown className="h-5 w-5 text-gold-400 transition-transform group-hover:-translate-y-0.5" />
          <span className="display-xl text-lg tracking-tight text-bone">
            DJ&nbsp;<span className="text-gold-foil">SKARA</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'relative text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors',
                    'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300',
                    isActive
                      ? 'text-gold-400 after:w-full'
                      : 'text-chrome-500 after:w-0 hover:text-bone hover:after:w-full'
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gold-400 px-6 py-3 text-[11px] font-bold tracking-[0.2em] text-ink-950 uppercase transition hover:bg-gold-200 lg:block"
        >
          Book now
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-bone lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-ink-700 bg-ink-950/98 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden',
          open ? 'max-h-[26rem]' : 'max-h-0 border-t-transparent'
        )}
      >
        <ul className="flex flex-col px-6 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'block border-b border-ink-800 py-4 text-sm font-semibold tracking-[0.2em] uppercase',
                    isActive ? 'text-gold-400' : 'text-chrome-300'
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-5 pb-2">
            <Link
              to="/contact"
              className="block rounded-full bg-gold-400 py-3.5 text-center text-xs font-bold tracking-[0.2em] text-ink-950 uppercase"
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
