import { Link } from 'react-router-dom';
import { ArrowDown, Mail } from 'lucide-react';
import LightRays from '@/components/reactbits/LightRays';
import SplitText from '@/components/reactbits/SplitText';
import ShinyText from '@/components/reactbits/ShinyText';
import Magnet from '@/components/reactbits/Magnet';
import { site, socials } from '@/lib/site';

export default function Hero() {
  return (
    <section className="noise-overlay relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-950">
      {/* Stage lighting — echoes the light beams in the key art */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <LightRays
          raysOrigin="top-center"
          raysColor="#e3b34c"
          raysSpeed={0.8}
          lightSpread={1.1}
          rayLength={2.4}
          fadeDistance={1.6}
          saturation={0.9}
          followMouse
          mouseInfluence={0.08}
          noiseAmount={0.06}
          distortion={0.04}
        />
      </div>

      {/* Floor glow from the rig */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(227,179,76,0.16),transparent_70%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-14 lg:px-10 lg:pt-28">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-4 sm:mb-7">
          <span className="h-px w-10 bg-gold-600/70 sm:w-16" />
          <p className="text-[10px] font-semibold tracking-[0.3em] text-gold-400 uppercase sm:text-[11px] sm:tracking-[0.34em]">
            {site.regions.join(' · ')}
            <span className="hidden sm:inline"> · South Africa</span>
          </p>
        </div>

        {/*
          The reference's signature device: the subject sits sandwiched between
          two lines of oversized display type — behind the name, in front of the
          sub-line.

          SplitText hard-codes `overflow-hidden` on its wrapper so the character
          reveal is clipped, which means line-height must leave room for Anton's
          full em box. Anything near 0.8 shears the caps off. The lines are
          pulled back together with a negative margin instead.
        */}
        <div className="relative">
          <SplitText
            text="DJ SKARA"
            tag="h1"
            className="display-xl text-chrome relative z-10 !leading-[1.05] text-[clamp(3.25rem,15.5vw,12rem)]"
            textAlign="left"
            splitType="chars"
            delay={45}
            duration={1.1}
            ease="power4.out"
            from={{ opacity: 0, y: 90 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
          />

          {/*
            Portrait — above the name, beneath the sub-line. Sized off viewport
            height and anchored to the type baseline so the cap always clears
            the fixed navbar.
          */}
          <img
            src="/media/skara-portrait.jpg"
            alt="DJ Skara wearing headphones behind the decks"
            width={774}
            height={1416}
            fetchPriority="high"
            decoding="async"
            className="mask-vignette pointer-events-none absolute -bottom-[4%] left-[64%] z-20 h-[34vh] w-auto -translate-x-1/2 object-contain opacity-75 sm:left-[60%] sm:h-[42vh] sm:opacity-95 lg:h-[46vh]"
          />

          <div className="relative z-30 -mt-[0.18em]">
            <SplitText
              text="PROMOTIONS"
              tag="p"
              className="display-xl text-gold-foil !leading-[1.05] text-[clamp(1.9rem,9vw,7rem)]"
              textAlign="left"
              splitType="chars"
              delay={30}
              duration={1}
              ease="power4.out"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="0px"
            />
          </div>
        </div>

        {/* Strapline + CTAs. The copy column is capped so it never runs under
            the portrait on wide screens. */}
        <div className="relative z-30 mt-9 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,30rem)_1fr] lg:items-end lg:gap-12">
          <div>
            <ShinyText
              text={site.strapline}
              className="text-[10px] font-semibold tracking-[0.26em] uppercase sm:text-xs sm:tracking-[0.3em]"
              color="#8c8c99"
              shineColor="#f7e3ae"
              speed={4}
            />
            <p className="mt-4 text-sm leading-relaxed text-chrome-500 sm:text-base">
              Amapiano, afro house and everything that keeps a floor honest. Available for
              clubs, weddings, corporates and brand activations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:justify-end">
            <Magnet padding={70} magnetStrength={4}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-4 text-[11px] font-bold tracking-[0.2em] text-ink-950 uppercase transition-colors hover:bg-gold-200 sm:px-9"
              >
                <Mail className="h-4 w-4" />
                Book DJ Skara
              </Link>
            </Magnet>

            <Magnet padding={70} magnetStrength={4}>
              <Link
                to="/mixes"
                className="inline-flex items-center rounded-full border border-chrome-700/60 px-7 py-4 text-[11px] font-bold tracking-[0.2em] text-bone uppercase transition-colors hover:border-gold-400 hover:text-gold-400 sm:px-9"
              >
                Hear the mixes
              </Link>
            </Magnet>
          </div>
        </div>
      </div>

      {/* Footer rail */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pb-7 lg:px-10">
        <div className="hairline flex items-center justify-between pt-5">
          <a
            href="#work"
            aria-label="Scroll to the mixes"
            className="flex shrink-0 items-center gap-2.5 text-[10px] font-semibold tracking-[0.24em] text-chrome-700 uppercase transition-colors hover:text-gold-400"
          >
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            {/* The four social labels already fill a 390px rail — drop the word
                and keep the arrow rather than letting the two collide. */}
            <span className="hidden sm:inline">Scroll</span>
          </a>

          <ul className="flex items-center gap-3 sm:gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-[10px] font-semibold tracking-[0.2em] text-chrome-700 uppercase transition-colors hover:text-gold-400"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
