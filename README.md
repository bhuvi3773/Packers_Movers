# Setu Relocation

A premium, front-end-only packers and movers website template for India. Setu is a fictional
relocation brand used to demonstrate an editorial, move-file design direction: one written plan,
one move manager, a packing standard and an itemised estimate.

There is no backend, database, authentication, admin panel, payment integration, CRM or live
tracking. Every form is a local demonstration and every price is illustrative.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 through `@tailwindcss/turbopack`
- Framer Motion
- Lucide icons
- `next/font` for Newsreader and Manrope

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Node 20 or newer is recommended.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home, process, coverage, testimonials and FAQs |
| `/services` | Service index |
| `/services/household-shifting` | Household move detail |
| `/services/local-shifting` | Local move detail |
| `/services/domestic-relocation` | Intercity move detail |
| `/services/office-relocation` | Office move detail |
| `/services/packing-and-unpacking` | Additional packing detail |
| `/services/vehicle-transport` | Additional vehicle detail |
| `/get-a-quote` | Five-step estimate calculator |
| `/about` | Brand and operating standard |
| `/contact` | Contact details and demo form |
| `/privacy-policy` | Privacy notice template |
| `/terms-and-conditions` | Terms template, including the `#demo` note |
| `/track` | Honest “tracking not connected” integration preview (noindex) |
| Any other path | Branded 404 page |

`/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.
The tracking preview is excluded from the sitemap and disallowed in `robots.txt`.

## Demo behaviour

- **Estimate calculator:** runs entirely in the browser. It uses sample base rates, distance,
  size factors, floor carry, add-ons, weekend detection and 18% GST to produce an illustrative
  range. It is not a quote and does not reserve anything.
- **Contact form:** validates locally, generates a reference in the page and states that nothing
  was sent or stored. Reloading clears it.
- **Quote submission:** same local-only pattern. It generates a demo reference and offers a
  WhatsApp continuation with prefilled text; WhatsApp opens only if the user chooses it.
- **Tracking:** deliberately disabled. No reference lookup works and no status is simulated.
- **Telephone, email, address, prices, testimonials and coverage:** placeholder content. They must
  be replaced before launch.
- No cookies, analytics, pixels, local storage or network requests for form data are used by the
  template.

## Where to customise

| File | What lives there |
| --- | --- |
| `src/config/site.ts` | Brand, contact details, nav, social links, SEO defaults |
| `src/config/cities.ts` | 24 base cities and coverage regions |
| `src/config/content.ts` | Services, process, values, packing standards, testimonials, FAQs |
| `src/config/pricing.ts` | Sizes, add-ons, sample rates, floor rules, disclaimers |
| `src/config/legal.ts` | Privacy and terms copy |
| `src/lib/estimate.ts` | Estimate calculation, INR formatting and WhatsApp summary |
| `src/lib/metadata.ts` | Shared metadata and canonical URL helper |
| `src/app/globals.css` | Design tokens, typography, components, reduced-motion rules |
| `src/app/layout.tsx` | Fonts, global metadata, demo strip, header/footer, organisation JSON-LD |
| `public/images/` | Local demo photography and the 1200×630 social image |

### Brand and contact

Update `siteConfig` first. The URL in `siteConfig.url` is used for canonical URLs, JSON-LD,
`robots.txt` and the sitemap, so set it to the real production origin. Replace the placeholder
phone, email, address, social links and legal name. Social links are intentionally empty; add
only accounts that exist.

### Pricing

`pricingConfig` currently uses:

- Local: ₹3,200 base + ₹42/km, minimum ₹6,500
- Domestic: ₹9,000 base + ₹17/km with a 1.25 road factor, minimum ₹14,000
- Floor carry: ₹750 per floor, capped at ₹9,000
- Weekend surcharge: 5%
- GST: 18%
- Estimate range: 90%–112% of the calculated total

These are sample values, not market research. Replace them with rates you can defend, then test
the calculator across local, intercity, office, weekend, ground-floor and lift/no-lift cases.

### Imagery

Photography is stored locally in `public/images/` so the site has no remote image dependency.
The files are demonstration imagery from [Pexels](https://www.pexels.com/) and are used under the
[Pexels licence](https://www.pexels.com/license/). The original photographer credits were not
bundled with the downloaded files. Before a commercial launch, replace the images with licensed
brand photography or add the correct per-image attribution required by your licence.

The Pexels licence does not imply endorsement by the people or brands shown. Do not present the
demo photographs as evidence of your own crews, offices, vehicles or customers.

## Accessibility and motion

- Skip link, semantic landmarks, one `h1` per page and a logical heading order.
- Keyboard-accessible navigation, services dropdown, mobile menu with focus trap and Escape to
  close, native `<details>` accordions and visible `:focus-visible` styles.
- Content remains visible without JavaScript. Framer Motion reveal elements are forced visible by
  a `<noscript>` rule and by `prefers-reduced-motion` CSS.
- Animations use transform and opacity, with no scroll-jacking. The process timeline adds a
  scroll progress line but does not hijack scrolling.
- Forms use labels, inline errors, `aria-invalid`, `aria-describedby`, live regions for success
  states and focus management on validation errors.

Motion is intentionally restrained. If you add heavier animation, keep the reduced-motion
overrides in `src/app/globals.css` effective and test with the OS setting enabled.

## Before a commercial launch

1. Replace the demo brand, contact details, address, prices, testimonials and coverage claims.
2. Connect the quote and contact forms to a real, validated backend with spam protection,
   consent capture and a privacy notice that matches the data flow.
3. Have the legal pages reviewed by a qualified adviser. They are template copy, not legal advice.
4. Add a real tracking integration or keep `/track` labelled honestly and noindexed.
5. Add privacy-respecting analytics only after a consent and retention review.
6. Replace placeholder imagery with owned or properly licensed photography and credits.
7. Re-run typecheck, lint, production build, responsive checks, accessibility checks and a
   Lighthouse/SEO review against the final content.

## Project structure

```text
src/
  app/                  routes, metadata files, global styles
  components/
    forms/              contact form
    home/               home-page sections
    layout/             header and footer
    legal/              shared legal document layout
    quote/              five-step calculator
    ui/                 buttons, accordions, reveals and other primitives
  config/               typed content, pricing, cities, site and legal copy
  lib/                  estimate logic, metadata, types and utilities
public/images/          local demo photography
```

## Licence and attribution

The template code is provided for adaptation. Demo photography remains subject to the Pexels
licence. The “Setu” name, copy and design are fictional demonstration material; they are not a
real relocation business.
