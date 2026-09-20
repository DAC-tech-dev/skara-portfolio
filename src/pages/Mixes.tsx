import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import ReelCard from '@/components/ui/ReelCard';
import Ticker from '@/components/sections/Ticker';
import BookingCTA from '@/components/sections/BookingCTA';
import AdSlot from '@/components/ads/AdSlot';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { reels, socials } from '@/lib/site';

const genres = [
  {
    name: 'Amapiano',
    note: 'Log drums, shakers and soulful vocals. The backbone of every set and the reason most of the room is there.',
  },
  {
    name: 'Afro House',
    note: 'Deeper, steadier, built for the long middle stretch of a night when the floor needs to breathe but not stop.',
  },
  {
    name: 'SA Dance Classics',
    note: 'Kwaito and house records that everyone in the room already knows. Used sparingly, landed precisely.',
  },
  {
    name: 'Gqom & Peak Time',
    note: 'Saved for when the night has properly earned it. Harder, faster, and never before midnight.',
  },
];

export default function Mixes() {
  return (
    <>
      <Seo
        title="Mixes"
        path="/mixes"
        description="Listen to DJ Skara's live amapiano and afro house mixes, recorded straight off the rig."
      />

      <PageHeader
        eyebrow="On the decks"
        title="The Mixes"
        lead="Recorded live off the rig — one take, no edits. Headphones recommended."
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {reels.map((reel, i) => (
              <AnimatedContent key={reel.id} delay={i * 0.1} distance={60} duration={0.8}>
                <ReelCard reel={reel} index={i} />
              </AnimatedContent>
            ))}
          </div>

          <p className="mt-12 text-sm text-chrome-700">
            More sets drop weekly on{' '}
            {socials.map((s, i) => (
              <span key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-gold-400 underline underline-offset-4 transition-colors hover:text-gold-200"
                >
                  {s.label}
                </a>
                {i < socials.length - 2 ? ', ' : i === socials.length - 2 ? ' and ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>

      <Ticker />
      <AdSlot slot="3333333333" />

      {/* Genre notes give the page real text content — AdSense reviews
          thin, media-only pages harshly. */}
      <section className="border-t border-ink-700 bg-ink-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="display-xl text-chrome text-[clamp(1.75rem,4.5vw,3rem)]">
            What gets played
          </h2>

          <div className="mt-12 grid gap-px border border-ink-700 bg-ink-700 sm:grid-cols-2">
            {genres.map((g, i) => (
              <AnimatedContent key={g.name} delay={i * 0.07} distance={40} duration={0.65}>
                <div className="h-full bg-ink-900 p-8">
                  <h3 className="display-xl text-gold-foil text-2xl">{g.name}</h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-muted">{g.note}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
