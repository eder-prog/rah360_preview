# RAH360 — Landing Page

Static landing page for **RAH360 Construction** — owner-led custom kitchen, bath, and home remodels in the South Carolina Midlands. Owner: Joel Gonzalez · (832) 954-7349 · rah360construction@gmail.com.

Built by the **landing-builder** Opensquad squad — run `2026-05-27-165000`. Brand system from the **brand-creator** squad — run `2026-05-27-153500`.

## Stack

Vanilla HTML + CSS + JS. Zero framework. Deploy to any static host. No build step.

- **HTML:** Semantic single-page (12 sections)
- **CSS:** Tokens from `brands/rah360/` (W3C Design Tokens) + responsive (4 breakpoints)
- **JS:** Vanilla — header glass theme detection, nav drawer, form validation, lightbox, scroll reveal
- **Logo:** 4 SVG variants (light/dark × full/icon) + favicon SVG with `prefers-color-scheme`
- **Fonts:** Google Fonts CDN (Outfit + Inter + Fraunces italic + JetBrains Mono)
- **Photos:** Real RAH360 project shots (6 gallery slots + hero + Joel portrait)

## Deploy to Vercel

### Option 1 — Connect via GitHub (Recommended, auto-deploys on push)

1. Push this folder to a GitHub repo (see Git section below)
2. Go to https://vercel.com/new
3. Import the GitHub repo
4. Vercel auto-detects it as a static site — no build settings needed
5. Click **Deploy**
6. Live in ~30 seconds at `https://<repo-name>.vercel.app`

### Option 2 — Drag-drop via Vercel CLI

```bash
cd path/to/dist
npx vercel --prod
```

First run prompts to log in + link the project.

### Option 3 — Drag-drop via Vercel web UI

Drag the entire `dist/` folder onto https://vercel.com/new — Vercel uploads + deploys in ~10 seconds.

## Vercel configuration

`vercel.json` already includes:

- `cleanUrls: true` — `/privacy` instead of `/privacy.html` (auto-rewrites)
- Aggressive caching headers for `/assets/*` and static files
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)

## Domain

After Vercel deploys, add the production domain in Vercel dashboard → Project → Settings → Domains:

- Recommended: `rah360.com` (verify availability first)
- Alternatives: `rah360remodel.com`, `rah360sc.com`

Then update these in `index.html`:
- `<meta property="og:url" content="https://rah360.com/">` (line 15)
- `<link rel="canonical">` (add to `<head>`)

## Pre-production checklist

See `assets/README.md` for the full asset inventory. Before going live:

- [ ] **Validate copy with Joel** — years in business (writing "5+ years"), project counts, exact service-area counties, timeframes per project type
- [ ] **Replace 3 testimonials** — currently sample copy, mark as `[VALIDATE]` until real quotes collected (with permission)
- [ ] **Generate `og-card.jpg`** — 1200×630 from `assets/og-source.png` per Brand Guide spec
- [ ] **Form backend** — `/api/leads` is a placeholder. Wire to a real CRM/email forwarder (HubSpot, Pipedrive, SendGrid, or Vercel serverless function)
- [ ] **Create Privacy + Terms pages** — `/privacy` and `/terms` linked in footer + form. Use existing GS Privacy as template.
- [ ] **Google Business Profile** — Joel needs to create one for RAH360 (critical for local SEO)
- [ ] **Lighthouse audit** — target Performance 90+, Accessibility 95+, SEO 95+

## Local dev

```bash
# Option A — Python
python3 -m http.server 8000 --directory dist

# Option B — npx serve
cd dist && npx serve

# Option C — VS Code Live Server
# Right-click index.html → Open with Live Server
```

## Form backend

The estimate form (`#estimate-form`) submits to `/api/leads` (placeholder). On local preview where this endpoint doesn't exist, the form still shows the success state so you can validate the flow visually.

To wire it up:

1. **Cheapest path** — Vercel Serverless Function (`api/leads.js` at repo root, outside `dist/`). Receives JSON payload, forwards to email/CRM. ~10 lines of code.
2. **CRM-native** — HubSpot, Pipedrive, Salesforce — change the form action to their endpoint with their hidden fields.
3. **No-code** — Formspree, Basin, Web3Forms — change `action` attribute to their submit URL.

The form already collects:
- name, phone (US-formatted), email
- project_type (Kitchen / Bathroom / Patio Cover / Whole-Home / Other)
- message (optional)
- sms_consent (optional, TCPA-compliant)
- contact_consent (required)
- submitted_at (ISO timestamp)

## Bundle size

```
index.html       ~34 KB
styles.css       ~32 KB
script.js        ~10 KB
favicon.svg      ~0.5 KB
assets/logo/*.svg  ~4 KB (4 variants)
assets/hero-bg.jpg  ~320 KB
assets/gallery/  ~1.5 MB (6 photos)
assets/joel-portrait.jpg  ~1.3 MB
TOTAL            ~3.2 MB (uncompressed)
```

Gzipped HTML+CSS+JS+SVG: ~25 KB total. Lighthouse-friendly.

## Brand reference

- `brands/rah360/` — design tokens, components spec, voice/microcopy doc, brand brief
- `brands/rah360/claude-design-brand-guide.html` — 8-section visual style guide from Claude Design

## Squad run history

- **brand-creator** run `2026-05-27-153500` — shipped `brands/rah360/`
- **landing-builder** run `2026-05-27-165000` — shipped this folder
