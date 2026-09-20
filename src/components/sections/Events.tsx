import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { events, site } from '@/lib/site';

const fmt = new Intl.DateTimeFormat('en-ZA', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export default function Events({ showPast = false }: { showPast?: boolean }) {
  const list = showPast ? events : events.filter((e) => e.status === 'upcoming');

  return (
    <section className="bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Where to find him"
            title="Upcoming Dates"
            lead="Catch a live set, or book one of the open dates before it goes."
          />
          {!showPast && (
            <Link
              to="/events"
              className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-chrome-500 uppercase transition-colors hover:text-gold-400"
            >
              Full diary
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        <ul className="mt-14 divide-y divide-ink-700 border-y border-ink-700">
          {list.map((event, i) => {
            const past = event.status === 'past';
            return (
              <AnimatedContent key={`${event.date}-${event.name}`} delay={i * 0.06} distance={30} duration={0.6}>
                <li
                  className={`group grid grid-cols-1 items-center gap-3 py-7 transition-colors hover:bg-ink-900/60 sm:grid-cols-[10rem_1fr_auto] sm:gap-8 sm:px-4 ${
                    past ? 'opacity-45' : ''
                  }`}
                >
                  <time
                    dateTime={event.date}
                    className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.18em] text-gold-400 uppercase"
                  >
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    {fmt.format(new Date(event.date))}
                  </time>

                  <div>
                    <h3 className="display-xl text-xl text-bone sm:text-2xl">{event.name}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {event.venue} · {event.city}
                    </p>
                  </div>

                  {past ? (
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-chrome-700 uppercase">
                      Played
                    </span>
                  ) : (
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Guestlist — ${event.name}`
                      )}`}
                      className="inline-flex items-center gap-1.5 justify-self-start rounded-full border border-ink-600 px-5 py-2.5 text-[10px] font-bold tracking-[0.18em] text-chrome-300 uppercase transition group-hover:border-gold-600 group-hover:text-gold-400 sm:justify-self-end"
                    >
                      Guestlist
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </li>
              </AnimatedContent>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
