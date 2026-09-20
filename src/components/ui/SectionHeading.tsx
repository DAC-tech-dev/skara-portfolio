import ScrollFloat from '@/components/reactbits/ScrollFloat';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-3">
          {align === 'center' && <span className="h-px w-8 bg-gold-600/60" />}
          {eyebrow}
          <span className="h-px w-8 bg-gold-600/60" />
        </p>
      )}

      <ScrollFloat
        containerClassName="!my-0"
        // ScrollFloat animates chars up from below inside an overflow-hidden
        // box, so leading needs headroom — too tight and descenders clip.
        textClassName={cn(
          'display-xl text-chrome !text-[clamp(2.25rem,6vw,4.25rem)] !leading-[1.08]',
          align === 'center' && 'text-center'
        )}
        scrollStart="center bottom+=30%"
        scrollEnd="bottom bottom-=20%"
        stagger={0.02}
      >
        {title}
      </ScrollFloat>

      {lead && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
      )}
    </div>
  );
}
