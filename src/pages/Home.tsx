import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import Stats from '@/components/sections/Stats';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import Reels from '@/components/sections/Reels';
import Events from '@/components/sections/Events';
import Testimonials from '@/components/sections/Testimonials';
import BookingCTA from '@/components/sections/BookingCTA';
import AdSlot from '@/components/ads/AdSlot';
import { site } from '@/lib/site';

/** Rich structured data helps both search and AdSense understand the site. */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  image: `${site.url}/media/og.jpg`,
  description: site.description,
  genre: ['Amapiano', 'Afro House', 'House'],
  areaServed: site.regions.map((r) => ({ '@type': 'AdministrativeArea', name: r })),
  address: { '@type': 'PostalAddress', addressCountry: 'ZA' },
};

export default function Home() {
  return (
    <>
      <Seo
        title="DJ Skara Promotions — Amapiano & Afro House DJ, Mpumalanga & Gauteng"
        path="/"
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <Hero />
      <Ticker />
      <Stats />
      <AboutPreview />
      <Services />

      {/* In-content placement: sits between two substantial sections, never
          above the fold, per AdSense placement policy. */}
      <AdSlot slot="1111111111" />

      <Reels limit={2} />
      <Events />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
