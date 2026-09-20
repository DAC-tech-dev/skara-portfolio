import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Events from '@/components/sections/Events';
import Testimonials from '@/components/sections/Testimonials';
import BookingCTA from '@/components/sections/BookingCTA';
import AdSlot from '@/components/ads/AdSlot';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const packages = [
  {
    name: 'Club Night',
    price: 'From R2 500',
    length: '2–4 hour set',
    includes: [
      'Peak-time or warm-up slot',
      'Own controller and headphones',
      'Track requests considered, not guaranteed',
      'Social post promoting the night',
    ],
  },
  {
    name: 'Wedding & Private',
    price: 'From R6 500',
    length: 'Up to 8 hours',
    includes: [
      'Ceremony, dinner and dancefloor',
      'Consultation on the playlist beforehand',
      'MC-friendly, family-safe edits',
      'Sound and lighting arranged on request',
    ],
  },
  {
    name: 'Corporate & Brand',
    price: 'On request',
    length: 'Half or full day',
    includes: [
      'Launches, activations, year-end functions',
      'On-brand music direction',
      'Formal dress, professional rig',
      'Invoice and paperwork handled properly',
    ],
  },
];

export default function EventsPage() {
  return (
    <>
      <Seo
        title="Events & Bookings"
        path="/events"
        description="Upcoming DJ Skara dates plus booking packages for clubs, weddings and corporate events across Mpumalanga and Gauteng."
      />

      <PageHeader
        eyebrow="Diary & packages"
        title="Events"
        lead="Where he is playing next, and what it costs to have him at yours."
      />

      <Events showPast />
      <AdSlot slot="4444444444" />

      <section className="border-t border-ink-700 bg-ink-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="display-xl text-chrome text-[clamp(1.75rem,4.5vw,3rem)]">
            Booking packages
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Indicative pricing for planning purposes. Final quotes depend on date, travel
            distance and whether sound and lighting are needed.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <AnimatedContent key={pkg.name} delay={i * 0.09} distance={50} duration={0.7}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-ink-600 bg-ink-850 p-8 transition-colors hover:border-gold-700/60"
                  spotlightColor="rgba(227, 179, 76, 0.13)"
                >
                  <h3 className="display-xl text-2xl text-bone">{pkg.name}</h3>
                  <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-chrome-700 uppercase">
                    {pkg.length}
                  </p>
                  <p className="text-gold-foil display-xl mt-5 text-3xl">{pkg.price}</p>

                  <ul className="mt-7 space-y-3 border-t border-ink-700 pt-6">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>

          <p className="mt-8 text-xs text-chrome-700">
            Prices shown in South African Rand and exclude VAT where applicable. A deposit
            secures the date.
          </p>
        </div>
      </section>

      <Testimonials />
      <BookingCTA />
    </>
  );
}
