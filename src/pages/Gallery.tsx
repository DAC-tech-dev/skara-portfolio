import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import BookingCTA from '@/components/sections/BookingCTA';
import AdSlot from '@/components/ads/AdSlot';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import TiltedCard from '@/components/reactbits/TiltedCard';
import { gallery } from '@/lib/site';

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery"
        path="/gallery"
        description="Photos and key art from DJ Skara Promotions — behind the decks, on the road and in the studio."
      />

      <PageHeader
        eyebrow="In the room"
        title="Gallery"
        lead="Stills from the rig, the road and the artwork that goes with it."
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <AnimatedContent
                key={item.src}
                delay={i * 0.08}
                distance={50}
                duration={0.75}
                className={item.span === 'tall' ? 'sm:row-span-2' : undefined}
              >
                <TiltedCard
                  imageSrc={item.src}
                  altText={item.alt}
                  captionText={item.alt}
                  containerHeight={item.span === 'tall' ? '640px' : '310px'}
                  imageHeight={item.span === 'tall' ? '640px' : '310px'}
                  imageWidth="100%"
                  scaleOnHover={1.04}
                  rotateAmplitude={9}
                  showMobileWarning={false}
                  showTooltip
                />
              </AnimatedContent>
            ))}
          </div>

          <p className="mt-10 text-xs text-chrome-700">
            More behind-the-scenes goes up on the socials first.
          </p>
        </div>
      </section>

      <AdSlot slot="5555555555" />
      <BookingCTA />
    </>
  );
}
