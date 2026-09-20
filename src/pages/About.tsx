import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import BookingCTA from '@/components/sections/BookingCTA';
import AdSlot from '@/components/ads/AdSlot';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import GlareHover from '@/components/reactbits/GlareHover';
import { site } from '@/lib/site';

const chapters = [
  {
    heading: 'Where it started',
    body: [
      'Every DJ has an origin story and most of them are the same: a cousin with a laptop, a cracked copy of some mixing software, and a speaker far too big for the room. Skara\'s is no different, except he never put it down.',
      'What began as playing for friends in Mpumalanga turned into a standing slot, then a circuit, then a diary that fills up months ahead. Eight years on, the same rule applies as on night one — if the floor is empty, it is your fault, not theirs.',
    ],
  },
  {
    heading: 'The sound',
    body: [
      'Amapiano is the backbone: log drums, shakers, and vocals that carry a room without shouting at it. Around that sits afro house, classic SA dance records, and the occasional left turn that only works because everything around it was earned.',
      'Sets are built live, not pre-planned. A wedding at eight is a different animal from a club at one, and pretending otherwise is how DJs end up playing to an empty floor with a perfect tracklist.',
    ],
  },
  {
    heading: 'More than just a DJ',
    body: [
      `That line is on every piece of ${site.legalName} artwork and it is not decoration. Bookings usually arrive as a half-formed idea — a date, a venue, a rough budget. What goes out is a finished event.`,
      'Artwork, line-up curation, social rollout, on-the-ground promo, sound and lighting coordination. Promoters get one number to call instead of five, and the night actually looks like it was planned.',
    ],
  },
  {
    heading: 'How it runs',
    body: [
      'Straight answers on availability within 24 hours. A written quote with nothing hidden in it. Arrival well before doors, with backup gear in the car because equipment fails and that is not the client\'s problem.',
      'Good music, better people. It is on the poster because it is the actual job description.',
    ],
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description={`The story behind ${site.legalName} — eight years of amapiano and afro house across Mpumalanga and Gauteng.`}
      />

      <PageHeader
        eyebrow="The selector"
        title="About Skara"
        lead="Eight years behind the decks, a diary that fills months ahead, and one rule that has not changed since night one."
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_22rem] lg:gap-20 lg:px-10">
          {/* Long-form copy */}
          <article className="max-w-2xl">
            {chapters.map((chapter, i) => (
              <AnimatedContent key={chapter.heading} delay={i * 0.06} distance={40} duration={0.7}>
                <div className="mb-14">
                  <h2 className="display-xl text-gold-foil text-[clamp(1.5rem,3.5vw,2.25rem)]">
                    {chapter.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-relaxed text-muted">
                    {chapter.body.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}

            <p className="font-script text-4xl text-gold-400">{site.script}</p>
          </article>

          {/* Sticky portrait + fact rail */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <GlareHover
              width="100%"
              height="auto"
              background="transparent"
              borderColor="transparent"
              borderRadius="1rem"
              glareColor="#e3b34c"
              glareOpacity={0.2}
              glareSize={200}
              transitionDuration={900}
              className="!block overflow-hidden rounded-2xl border border-ink-600"
            >
              <img
                src="/media/poster.jpg"
                alt={`${site.legalName} key art`}
                width={1000}
                height={1249}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </GlareHover>

            <dl className="surface-card mt-5 divide-y divide-ink-700 rounded-2xl">
              {[
                ['Based in', site.regions.join(' & ')],
                ['Genres', 'Amapiano · Afro House · SA Dance'],
                ['Set length', '2–6 hours'],
                ['Travels', 'Nationwide, on request'],
                ['Bookings', site.email],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 px-6 py-4">
                  <dt className="text-[10px] font-semibold tracking-[0.2em] text-chrome-700 uppercase">
                    {k}
                  </dt>
                  <dd className="text-sm break-words text-chrome-300">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <Stats />
      <AdSlot slot="2222222222" />
      <Services />
      <BookingCTA />
    </>
  );
}
