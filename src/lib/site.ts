/**
 * Single source of truth for all site copy, links and media.
 * Non-developers can edit this file without touching components.
 */

export const site = {
  name: 'DJ Skara',
  legalName: 'DJ Skara Promotions',
  tagline: 'More than just a DJ',
  strapline: 'Music • Events • Bookings • Branding',
  script: "Let's make it happen",
  // TODO(client): swap for the live domain before go-live — also update
  // public/robots.txt and public/sitemap.xml.
  url: 'https://djskara.co.za',
  description:
    'DJ Skara Promotions — amapiano, afro house and party sets for weddings, clubs and corporate events across Mpumalanga and Gauteng. Book South Africa\'s hardest-working selector.',
  email: 'Kgolwazi@gmail.com',
  regions: ['Mpumalanga', 'Gauteng'],
  locale: 'en-ZA',
  builtBy: {
    name: 'DAC Technologies (Pty) Ltd',
    url: 'https://dac-technologies.co.za',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Mixes', href: '/mixes' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

// TODO(client): replace the '#' placeholders with real profile URLs.
export const socials = [
  { label: 'TikTok', href: '#', handle: '@djskara' },
  { label: 'Instagram', href: '#', handle: '@djskara' },
  { label: 'YouTube', href: '#', handle: 'DJ Skara Promotions' },
  { label: 'Spotify', href: '#', handle: 'DJ Skara' },
] as const;

export const marqueeWords = [
  'MUSIC',
  'PEOPLE',
  'VIBES',
  'ALWAYS',
  'GOOD MUSIC',
  'BETTER PEOPLE',
  'BIG VIBES ONLY',
] as const;

export const services = [
  {
    title: 'Club & Party Sets',
    body: 'Peak-time amapiano, afro house and gqom. Reads the floor, keeps it moving, never drops the energy.',
    meta: '2–6 hour sets',
  },
  {
    title: 'Weddings & Private',
    body: 'From the ceremony playlist to the after-party. MC-friendly, family-safe edits, full sound and lighting on request.',
    meta: 'Full-day packages',
  },
  {
    title: 'Corporate & Brand',
    body: 'Launches, activations and year-end functions. Professional rig, formal dress, on-brand music direction.',
    meta: 'Activations & launches',
  },
  {
    title: 'Event Promotion',
    body: 'More than just a DJ — artwork, line-up curation, social rollout and on-the-ground promo for your event.',
    meta: 'Promo & branding',
  },
] as const;

export const stats = [
  { value: 250, suffix: '+', label: 'Sets played' },
  { value: 60, suffix: '+', label: 'Venues & events' },
  { value: 8, suffix: 'yr', label: 'Behind the decks' },
  { value: 100, suffix: '%', label: 'Dancefloors filled' },
] as const;

export type Reel = {
  id: string;
  title: string;
  blurb: string;
  src: string;
  poster: string;
  genre: string;
  duration: string;
};

export const reels: Reel[] = [
  {
    id: 'reel-1',
    title: 'Shela — Live Blend',
    blurb:
      'Sam Deep, Nia Pearl, Boohle & Mano reworked live on the Pioneer rig. One take, no safety net.',
    src: '/media/reel-1.mp4',
    poster: '/media/reel-1.jpg',
    genre: 'Amapiano',
    duration: '1:03',
  },
  {
    id: 'reel-2',
    title: 'Mix 01 — Home Session',
    blurb:
      'Opening set from the home studio. Afro house into amapiano, building slow and letting it ride.',
    src: '/media/reel-2.mp4',
    poster: '/media/reel-2.jpg',
    genre: 'Afro House',
    duration: '1:10',
  },
];

// TODO(client): replace with real confirmed bookings.
export const events = [
  {
    date: '2026-10-11',
    name: 'Spring Session',
    venue: 'Riverside Lounge',
    city: 'Nelspruit, Mpumalanga',
    status: 'upcoming' as const,
  },
  {
    date: '2026-11-01',
    name: 'Amapiano All-Nighter',
    venue: 'The Yard',
    city: 'Johannesburg, Gauteng',
    status: 'upcoming' as const,
  },
  {
    date: '2026-12-16',
    name: 'Summer Kickoff',
    venue: 'Private Estate',
    city: 'Pretoria, Gauteng',
    status: 'upcoming' as const,
  },
  {
    date: '2026-08-30',
    name: "Heritage Warm-Up",
    venue: 'Club Sixty',
    city: 'Witbank, Mpumalanga',
    status: 'past' as const,
  },
];

// TODO(client): replace with real, attributable quotes before go-live.
export const testimonials = [
  {
    quote:
      'He read the room better than anyone we have booked. The floor did not empty once all night.',
    author: 'Thandi M.',
    role: 'Event organiser, Nelspruit',
  },
  {
    quote:
      'Handled our year-end function start to finish — sound, music direction, the lot. Completely professional.',
    author: 'Sipho D.',
    role: 'Corporate client, Johannesburg',
  },
  {
    quote: 'Booked him for the wedding and half the guests asked for his number afterwards.',
    author: 'Lerato & Kabelo',
    role: 'Wedding, Pretoria',
  },
] as const;

export const gallery = [
  { src: '/media/poster.jpg', alt: 'DJ Skara Promotions key art', span: 'tall' as const },
  { src: '/media/reel-1.jpg', alt: 'DJ Skara behind the Pioneer rig', span: 'normal' as const },
  { src: '/media/reel-2.jpg', alt: 'DJ Skara mixing a home session', span: 'normal' as const },
  { src: '/media/skara-portrait.jpg', alt: 'DJ Skara portrait', span: 'normal' as const },
];
