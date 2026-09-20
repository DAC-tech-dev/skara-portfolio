import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import { testimonials } from '@/lib/site';

export default function Testimonials() {
  return (
    <section className="border-y border-ink-700 bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Word of mouth" title="Big Vibes Only" align="center" />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedContent key={t.author} delay={i * 0.1} distance={50} duration={0.75}>
              <figure className="surface-card flex h-full flex-col rounded-2xl p-7">
                <Quote className="h-7 w-7 shrink-0 text-gold-600/60" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-chrome-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-ink-700 pt-5">
                  <p className="text-sm font-bold text-bone">{t.author}</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-chrome-700 uppercase">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
