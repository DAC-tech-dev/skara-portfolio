import CountUp from '@/components/reactbits/CountUp';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { stats } from '@/lib/site';

export default function Stats() {
  return (
    <section className="border-b border-ink-700 bg-ink-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-700 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimatedContent key={stat.label} delay={i * 0.08} distance={40} duration={0.7}>
            <div className="flex h-full flex-col justify-center bg-ink-900 px-6 py-10 text-center lg:py-14">
              <p className="display-xl text-gold-foil text-[clamp(2.25rem,5vw,3.75rem)]">
                <CountUp to={stat.value} duration={2} />
                {stat.suffix}
              </p>
              <p className="mt-2.5 text-[10px] font-semibold tracking-[0.24em] text-chrome-700 uppercase sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
