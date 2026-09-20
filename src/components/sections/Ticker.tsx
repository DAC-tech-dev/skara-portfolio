import ScrollVelocity from '@/components/reactbits/ScrollVelocity';

/**
 * Scroll-reactive marquee carrying the brand slogans straight off the key art.
 */
export default function Ticker() {
  return (
    <section
      aria-hidden="true"
      className="relative border-y border-ink-700 bg-ink-900 py-7 sm:py-9"
    >
      <ScrollVelocity
        texts={['MUSIC · PEOPLE · VIBES · ALWAYS ·', 'GOOD MUSIC · BETTER PEOPLE ·']}
        velocity={55}
        damping={40}
        stiffness={380}
        numCopies={6}
        className="display-xl text-[clamp(1.75rem,5vw,3.5rem)] text-chrome-700/50"
        parallaxClassName="py-1"
      />
    </section>
  );
}
