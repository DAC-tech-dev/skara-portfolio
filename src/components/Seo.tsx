import { site } from '@/lib/site';

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  /** Set on thin pages (legal, 404) so AdSense never serves against low-value content. */
  noAds?: boolean;
};

/**
 * React 19 hoists <title>, <meta> and <link> to <head> automatically, so this
 * renders inline wherever a page needs it — no helmet provider required.
 */
export default function Seo({ title, description, path = '/', image, noAds }: SeoProps) {
  const fullTitle = path === '/' ? title : `${title} — ${site.legalName}`;
  const desc = description ?? site.description;
  const url = `${site.url}${path === '/' ? '' : path}`;
  const img = `${site.url}${image ?? '/media/og.jpg'}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.legalName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_ZA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {noAds && <meta name="robots" content="index, follow, max-image-preview:large" />}
    </>
  );
}
