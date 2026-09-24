# DJ Skara Promotions — Website

Marketing and booking site for **DJ Skara Promotions**, an amapiano and afro-house
DJ working across Mpumalanga and Gauteng, South Africa.

Built by **DAC Technologies (Pty) Ltd**.

The site is a static single-page app with no backend and no database. It exists to
do three things: convert visitors into booking enquiries, showcase the mix reels,
and carry Google AdSense inventory.

---

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Build | **Vite 8** | Fast dev server, small static output, no server runtime |
| UI | **React 19** + **TypeScript 6** | Native `<title>`/`<meta>` hoisting removes the need for a helmet library |
| Routing | **React Router 7** | Client-side routing over a static host |
| Styling | **Tailwind CSS v4** | CSS-first config via `@theme`; brand tokens live in `src/index.css` |
| Animation | **GSAP 3** + `@gsap/react`, **Motion 12**, **OGL** | Required by the ReactBits components; OGL powers the WebGL stage-light hero |
| Components | **ReactBits** via the shadcn registry | Vendored into `src/components/reactbits/` |
| Icons | **lucide-react** | |
| Lint | **oxlint** | |
| Visual QA | **puppeteer-core** (dev only) | Drives the locally installed Chrome; no browser download |

There is deliberately **no backend, database, SSR or CMS**. Everything renders from
static files, which keeps hosting free-to-cheap, keeps the site fast enough for
AdSense, and means it can be dropped on Netlify, Vercel, Cloudflare Pages, GitHub
Pages or ordinary shared hosting without changes.

---

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

---

## Project structure

```
public/
  media/            Client photography and the two mix reels (web-encoded)
  ads.txt           AdSense authorised-seller declaration
  robots.txt        Crawl rules, incl. Mediapartners-Google and AdsBot-Google
  sitemap.xml       All eight routes
  _redirects        SPA fallback for Netlify
  favicon.svg

src/
  lib/site.ts       ← ALL site copy, links, events, services, reels
  index.css         Brand tokens, chrome/gold text fills, masks
  App.tsx           Routes (Home eager, everything else lazy)

  components/
    ads/            AdSense loader flags, ad units, cookie consent
    layout/         Navbar, Footer, Layout shell
    reactbits/      Vendored ReactBits components (see caveat below)
    sections/       Home-page sections
    ui/             Shared primitives (PageHeader, ReelCard, Prose…)
    Seo.tsx         Per-route metadata

  pages/            Home, About, Mixes, Events, Gallery, Contact, Privacy, Terms, 404
```

### Editing content

Almost all copy lives in **`src/lib/site.ts`** — business details, navigation,
social links, services, stats, events, testimonials and the reel list. A
non-developer can change the site's text without opening a component. Anything
still needing the client's real data is marked `TODO(client)`.

---

## Design

The direction follows the DJ Joep reference supplied in the brief: oversized
editorial display type with the subject layered *between* two lines of it. The
palette is lifted from the client's own key art — near-black stage, brushed
chrome, gold foil, warm amber spill.

- **Display type:** Anton · **Body:** Inter · **Script accent:** Caveat
- Chrome and gold fills are `background-clip: text` gradients (`.text-chrome`,
  `.text-gold-foil` in `src/index.css`)
- The hero portrait is a crop of the supplied poster, dissolved into the
  background with a radial mask (`.mask-vignette`) rather than a cut-out
- The client's footage is vertical 9:16, so it is presented as phone-style reels
  rather than a widescreen hero video

### Reels and page weight

`ReelCard` sets `preload="none"` and shows a poster frame, so a visitor only
downloads a video (~4 MB each) if they press play. Reels pause automatically when
scrolled out of view so audio never plays off-screen.

---

## Google AdSense

The site is wired for AdSense end to end. Publisher ID: **`ca-pub-8487777891911418`**.

### How it is wired

| Piece | Where |
| --- | --- |
| Loader script | Static `<script>` in `index.html` |
| Publisher ID | `src/components/ads/client.ts` (overridable with `VITE_ADSENSE_CLIENT`) |
| Authorised seller | `public/ads.txt` |
| Ad units | `<AdSlot slot="…" />`, one per page |
| Consent | `src/components/ads/CookieConsent.tsx` + `AdSenseScript.tsx` |

The loader is **static in the document head on purpose**. AdSense's verification
crawler fetches the raw HTML without running the app, so a runtime-injected tag
would never be found and review would fail. Consent is therefore expressed by
requesting non-personalised ads (`requestNonPersonalizedAds`) rather than by
withholding the script.

`AdSlot` handles the two things that break AdSense inside a SPA: it re-keys the
`<ins>` element per route so navigation never pushes into an already-filled unit,
and it guards against React StrictMode's double-invoked effects.

### Before ads can serve

1. **Replace the placeholder slot IDs.** Every `<AdSlot slot="…">` currently uses a
   dummy value (`1111111111`, `2222222222`, …). Create real ad units in the
   AdSense dashboard and paste their IDs in. Until then the units render empty.
2. **Point the site at the live domain.** `site.url` in `src/lib/site.ts`, plus
   `public/robots.txt` and `public/sitemap.xml`, all still say `djskara.co.za`.
3. **Confirm `ads.txt` is reachable** at `https://<domain>/ads.txt` after deploy.

### Two things worth knowing

- **Content depth is the real gate.** AdSense rejects thin, media-only sites. The
  interior pages carry genuine prose for this reason, but a portfolio of this size
  is still on the light side. Adding a regularly updated section — gig write-ups,
  mix notes, a news feed — is the single highest-value change for approval odds.
- **EEA/UK traffic needs a certified CMP.** The `requestNonPersonalizedAds` flag
  satisfies POPIA-style consent but is *not* sufficient under Google's EU user
  consent policy. If the site takes meaningful European traffic, add a
  Google-certified consent management platform.

---

## Deployment

Build output is a plain static `dist/` folder.

```bash
npm run build
```

Because routing is client-side, the host must serve `index.html` for unknown
paths or deep links will 404:

- **Netlify** — already handled by `public/_redirects`
- **Vercel** — add a rewrite of `/(.*)` → `/index.html`
- **Cloudflare Pages** — add a `_redirects` equivalent or enable SPA mode
- **Apache / shared hosting** — add an `.htaccess` rewrite to `index.html`

### Environment variables

Both are optional; see `.env.example`.

| Variable | Effect |
| --- | --- |
| `VITE_ADSENSE_CLIENT` | Override the publisher ID (e.g. a staging property) |
| `VITE_FORM_ENDPOINT` | POST target for the booking form (Formspree, Web3Forms, Netlify Forms). Unset, the form falls back to opening the visitor's mail client |

---

## Maintenance notes

### The ReactBits components are vendored and two are patched

`src/components/reactbits/` holds copies pulled from the ReactBits registry, not
an npm dependency. Two carry local fixes that a re-fetch would silently undo:

- **`ScrollFloat.tsx`** — its selector was `.inline-block`, which also matched its
  own wrapper span and animated the whole heading to `opacity: 0`, clipping it.
  Changed to `.word`.
- **`ScrollVelocity.tsx`** — unused `t` parameter renamed `_t` to satisfy
  `noUnusedParameters`.

Re-adding either component with `npx shadcn@latest add @reactbits/<Name>-TS-TW`
will overwrite these. Re-apply them if you do.

### Gradient text and split characters

GSAP's SplitText gives every character its own composited layer, which breaks
`background-clip: text` inherited from a parent. `.text-chrome` and
`.text-gold-foil` therefore declare the gradient on the split children too, and
suppress it on the wrapper via `:has(.split-char)` — otherwise a ghost copy of the
text shows through on the first glyph of each line. Worth knowing before editing
those rules.

### Outstanding placeholder content

Marked `TODO(client)` in `src/lib/site.ts`:

- Social profile URLs are all `#`
- Events, testimonials and stats are illustrative, not real
- Live domain not yet set

The **privacy policy and terms pages are templates**. They are written against
POPIA and cover the AdSense disclosures Google requires, but they should be
reviewed against the client's actual data handling before go-live.

### Visual QA

`puppeteer-core` is installed to drive the locally installed Chrome for
screenshot checks at real viewport sizes. It downloads no browser of its own; if
Chrome is not at the default Windows path, point `executablePath` at it.

---

## Licence

Private client work. Artwork, photography and footage remain the property of
DJ Skara Promotions.