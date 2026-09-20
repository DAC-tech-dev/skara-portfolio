import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { services } from '@/lib/site';

export default function Services() {
  return (
    <section className="relative border-y border-ink-700 bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What you get"
          title="More Than Just a DJ"
          lead="Music, events, bookings and branding — the full package, run by one person who actually turns up early."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedContent key={service.title} delay={i * 0.08} distance={50} duration={0.7}>
              <SpotlightCard
                className="h-full rounded-2xl border border-ink-600 bg-ink-850 p-7 transition-colors duration-300 hover:border-gold-700/60"
                spotlightColor="rgba(227, 179, 76, 0.13)"
              >
                <p className="display-xl text-[2.5rem] leading-none text-ink-600">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-bone">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.body}</p>
                <p className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
                  {service.meta}
                </p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
