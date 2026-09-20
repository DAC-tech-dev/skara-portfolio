import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ReelCard from '@/components/ui/ReelCard';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { reels } from '@/lib/site';

export default function Reels({ limit }: { limit?: number }) {
  const items = limit ? reels.slice(0, limit) : reels;

  return (
    <section id="work" className="relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="On the decks"
            title="The Mixes"
            lead="Straight off the rig — no edits, no safety net. Sound on."
          />

          <Link
            to="/mixes"
            className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-chrome-500 uppercase transition-colors hover:text-gold-400"
          >
            All mixes
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {items.map((reel, i) => (
            <AnimatedContent key={reel.id} delay={i * 0.1} distance={60} duration={0.8}>
              <ReelCard reel={reel} index={i} />
            </AnimatedContent>
          ))}

          {/* Booking prompt fills the third column on desktop */}
          <AnimatedContent delay={items.length * 0.1} distance={60} duration={0.8}>
            <div className="reel-frame surface-card flex flex-col items-start justify-end rounded-2xl p-7">
              <p className="font-script text-3xl leading-none text-gold-400">
                Let&rsquo;s make
                <br />
                it happen
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Want a set like this at your event? Dates go fast over summer.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-[11px] font-bold tracking-[0.18em] text-ink-950 uppercase transition hover:bg-gold-200"
              >
                Check availability
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
