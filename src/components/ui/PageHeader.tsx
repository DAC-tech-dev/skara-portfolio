import SplitText from '@/components/reactbits/SplitText';

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

/** Shared masthead for interior pages — keeps the hero's type language. */
export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <header className="noise-overlay relative overflow-hidden border-b border-ink-700 bg-ink-950 pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_75%_at_50%_0%,rgba(227,179,76,0.11),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-gold-600/70" />
          {eyebrow}
        </p>

        <SplitText
          text={title}
          tag="h1"
          className="display-xl text-chrome text-[clamp(2.75rem,10vw,7.5rem)] leading-[0.85]"
          textAlign="left"
          splitType="chars"
          delay={35}
          duration={1}
          ease="power4.out"
          from={{ opacity: 0, y: 70 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
          rootMargin="0px"
        />

        {lead && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </header>
  );
}
