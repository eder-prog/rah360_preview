# RAH360 — Landing (Next.js · v0-ready)

Static landing page for **RAH360 Construction** — owner-led custom kitchen, bath, and home remodels in the South Carolina Midlands. Owner: Joel Gonzalez · (832) 954-7349 · rah360construction@gmail.com.

Built by the **landing-builder** Opensquad squad — run `2026-05-27-165000`. Brand from **brand-creator** run `2026-05-27-153500`.

## Stack

- **Next.js 15** App Router + React 19
- **TypeScript** strict
- **Tailwind CSS 3.4** with custom RAH360 brand tokens
- **shadcn/ui** primitives (Radix UI for Accordion + Checkbox + Select)
- **Lucide React** icons
- **No external state / no DB / no auth** — pure marketing site

## Branches

- `main` — vanilla HTML/CSS/JS (deploy-ready static, no build step)
- `nextjs` — this branch (Next.js + Tailwind + shadcn, v0.app-importable)

## Quick start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy

### Vercel (recommended)

1. Push to GitHub
2. https://vercel.com/new → Import `eder-prog/rah360_preview` (this branch)
3. Vercel auto-detects Next.js — no config needed
4. Click **Deploy** — live in ~60s

### v0.app

This branch is v0.app-importable. Open https://v0.app, click "Import from GitHub", paste this repo URL with branch `nextjs`. v0 will recognize the Next.js + Tailwind + shadcn stack and let you iterate visually.

## Project structure

```
.
├── app/
│   ├── layout.tsx          Root layout with Google Fonts + metadata
│   ├── page.tsx            Landing page (composes all components)
│   ├── globals.css         Tailwind + RAH360 base layer + scroll-reveal
│   ├── privacy/page.tsx    Privacy stub
│   ├── terms/page.tsx      Terms stub
│   └── api/leads/route.ts  Form submission endpoint (placeholder)
├── components/
│   ├── site-header.tsx     Adaptive header (glass + logo morph + bounce CTA)
│   ├── hero.tsx            Photo hero with overlay + dual CTA
│   ├── services.tsx        4 service cards with hover effects
│   ├── gallery.tsx         6 real project photos + lightbox modal
│   ├── process.tsx         4-step process (asym grid)
│   ├── about.tsx           Joel portrait + stat strip
│   ├── testimonials.tsx    3 testimonial cards (Fraunces italic quotes)
│   ├── mid-cta.tsx         Mid-page conversion block
│   ├── faq.tsx             8-item Radix Accordion
│   ├── estimate-form.tsx   A2P-compliant form with validation
│   ├── site-footer.tsx     4-column dark footer + radial warmth
│   ├── mobile-sticky-cta.tsx  Bottom-fixed click-to-call (mobile)
│   └── scroll-reveal.tsx   IntersectionObserver provider
├── lib/
│   └── utils.ts            cn() helper for class merging
├── public/
│   ├── favicon.svg         Adaptive favicon (prefers-color-scheme)
│   └── assets/
│       ├── hero-bg.jpg     Hero background
│       ├── joel-portrait.jpg   Owner portrait
│       ├── og-source.png   Logo for OG card composition
│       ├── gallery/        6 real project photos
│       └── logo/           5 SVG logo variants
├── tailwind.config.ts      RAH360 brand tokens + animations
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── components.json         shadcn config
├── vercel.json             Security headers
├── package.json
└── README.md
```

## Brand tokens

All colors + typography exposed as Tailwind utilities (`bg-ink`, `text-cream`, `bg-burnt`, `font-display`, etc.). See `tailwind.config.ts`.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1A1A1A` | Primary text, dark sections |
| `cream` | `#FAF5EC` | Primary background |
| `burnt` | `#D85E1F` | Primary CTA only |
| `burnt-hover` | `#C24E12` | CTA hover |
| `oak` | `#B5824A` | Secondary accent, dividers |
| `stone` | `#D9CFC0` | Section variant bg |
| `forest` | `#3E4C3A` | Trust marks, success, link hover |
| `charcoal` | `#404040` | Secondary text |

Fonts: Outfit (display) + Inter (body) + Fraunces italic (accent) + JetBrains Mono (eyebrow/code) — all from Google Fonts CDN.

## Pre-production checklist

- [ ] Validate copy with Joel (years, project count, counties, timeframes)
- [ ] Replace 3 sample testimonials with real client quotes
- [ ] Generate 1200×630 OG card from `public/assets/og-source.png`
- [ ] Wire `/api/leads` route to real CRM / email
- [ ] Flesh out `app/privacy/page.tsx` and `app/terms/page.tsx`
- [ ] Add custom domain in Vercel Dashboard → Settings → Domains
- [ ] Update `app/layout.tsx` `openGraph.url` with real domain
- [ ] Create Google Business Profile (critical for local SEO)
- [ ] Lighthouse audit — target 90+ all categories

## Form backend

`/api/leads` (in `app/api/leads/route.ts`) is a placeholder that logs and returns 200. Wire it up before going live. Options:

```ts
// Example: Resend email
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  await resend.emails.send({
    from: "leads@rah360.com",
    to: "rah360construction@gmail.com",
    subject: `New estimate request from ${data.name}`,
    text: JSON.stringify(data, null, 2),
  });
  return NextResponse.json({ ok: true });
}
```

## Squad run

- **brand-creator** run `2026-05-27-153500` → `brands/rah360/`
- **landing-builder** run `2026-05-27-165000` → this folder
- **Vanilla version** lives on branch `main` of the same repo
