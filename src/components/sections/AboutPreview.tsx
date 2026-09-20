import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import GlareHover from '@/components/reactbits/GlareHover';
import { site } from '@/lib/site';

export default function AboutPreview() {
  return (
    <section className="relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Portrait */}
        <AnimatedContent direction="horizontal" distance={70} reverse duration={0.9}>
          <GlareHover
            width="100%"
            height="auto"
            background="transparent"
            borderColor="transparent"
            borderRadius="1rem"
            glareColor="#e3b34c"
            glareOpacity={0.22}
            glareSize={220}
            transitionDuration={900}
            className="!block overflow-hidden rounded-2xl border border-ink-600"
          >
            <img
              src="/media/skara-portrait.jpg"
              alt="DJ Skara in the signature NY cap and headphones"
              width={700}
              height={1167}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </GlareHover>
        </AnimatedContent>

        {/* Copy */}
        <div>
          <SectionHeading eyebrow="The selector" title="Good Music, Better People" />

          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted">
            <p>
              DJ Skara has spent the better part of a decade learning one thing properly: how
              to read a room. From house parties in Mpumalanga to club nights in Gauteng, the
              brief never changes — pick the right record at the right moment and let the
              floor do the rest.
            </p>
            <p>
              The sound sits where amapiano, afro house and classic SA dance music meet. Log
              drums and soulful vocals early, harder and faster as the night earns it. No
              filler, no dead air, no reaching for the obvious.
            </p>
            <p>
              Beyond the decks, {site.legalName} handles the parts most DJs leave to someone
              else — artwork, line-up curation, social rollout and promotion. That is where
              the &ldquo;more than just a DJ&rdquo; line comes from, and it is meant literally.
            </p>
          </div>

          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-gold-400 uppercase"
          >
            Read the full story
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
