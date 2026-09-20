import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import SplitText from '@/components/reactbits/SplitText';
import { nav } from '@/lib/site';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        path="/404"
        description="That page does not exist."
        noAds
      />

      <section className="noise-overlay relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-950 px-6 py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_45%,rgba(227,179,76,0.12),transparent_70%)]" />

        <div className="relative text-center">
          <SplitText
            text="404"
            tag="h1"
            className="display-xl text-chrome text-[clamp(5rem,22vw,14rem)] leading-none"
            splitType="chars"
            delay={70}
            threshold={0}
            rootMargin="0px"
          />

          <p className="mt-6 text-base text-muted sm:text-lg">
            That track is not in the crate. Try one of these instead.
          </p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="inline-block rounded-full border border-ink-600 px-5 py-2.5 text-[10px] font-bold tracking-[0.18em] text-chrome-300 uppercase transition hover:border-gold-600 hover:text-gold-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
