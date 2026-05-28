# Asset Inventory — RAH360 Landing v1

Real photos + Claude Design State-style logo system, deploy-ready.

## Logo system

The header crossfades 3 **vectorized SVG** logo variants based on header state. SVGs scale infinitely without rasterization (retina/print-ready) and have tight viewBoxes with zero padding.

| File | viewBox | Variant | When visible |
|---|---|---|---|
| `logo/logo-full-light.svg` | 800×220 (3.64:1) | Ink banner + cream house + Burnt flag + UPPERCASE "RAH360" (cream/Oak) + tagline "CUSTOM REMODELS · LEXINGTON, SC" | Header `.on-dark` (over hero) — full lockup |
| `logo/logo-full-dark.svg` | 700×180 (3.89:1) | Compact (no banner): Ink stroke house + Burnt flag + UPPERCASE "RAH360" Ink/Oak + tagline "OWNER-LED · LEXINGTON, SC" | Header `.on-light` (over cream sections) — full lockup |
| `logo/logo-icon.svg` | 120×120 (1:1) | Plate icon mark — Ink rounded square + cream house + Burnt flag + Burnt doorknob | Header `.scrolled` (any theme) — compact morph |
| `logo/logo-mono-cream.svg` | 800×220 | Single-color reverse (cream on transparent, no Burnt accent) — for embroidery, truck decals, dark prints | Reference only — not on the LP |
| `favicon.svg` | 32×32 | Simplified house (no door panel) on Ink plate — optimized for 16-32px tab sizes | Browser tab favicon (`<link rel="icon">`) |

Source bundle: `cliente rah360.zip` exported from Claude Design v1.0 on 2026-05-28. PNGs kept in folder as deprecated fallback but not referenced by the build.

## Photos

| File | Project type | Used in |
|---|---|---|
| `hero-bg.jpg` | Kitchen — modern white shaker + black island | Hero full-bleed background |
| `gallery/01-kitchen-modern.jpg` | Kitchen modern (white shaker + black island + quartz + herringbone) | Gallery 1 — "Custom kitchen — Lexington County, SC" |
| `gallery/02-bath-marble.jpg` | Bathroom — gray marble walk-in shower + mosaic floor | Gallery 2 — "Bathroom remodel — Pelion, SC" |
| `gallery/03-kitchen-sage.jpg` | Kitchen — sage-green shaker + granite + SS hood + hardwood | Gallery 3 — "Kitchen remodel — Cayce, SC" |
| `gallery/04-bath-master.jpg` | Bathroom — master bath dual vanity + tile walls | Gallery 4 — "Master bath — Aiken County, SC" |
| `gallery/05-kitchen-espresso.jpg` | Kitchen — espresso dark shaker + granite + SS appliances + mosaic backsplash | Gallery 5 — "Kitchen — Richland County, SC" |
| `gallery/06-floor-kitchen-refresh.jpg` | Flooring + Kitchen — hardwood install + glazed cream cabinet refresh + farmhouse sink | Gallery 6 — "Flooring + kitchen refresh — Saluda, SC" |
| `joel-portrait.jpg` | Owner portrait — Joel in forest-green work shirt + tool belt, white shaker kitchen background, warm pendant light | About section `.about-photo` |
| `og-source.png` | RAH360 logo source from FB (800×800) | Source for designing 1200×630 OG card (TBD) |

## Pending (TODO before production)

- ⏳ `og-card.jpg` — 1200×630 Open Graph image. Compose from `logo/logo-full-light.png` + hero kitchen photo + headline copy.
- ⏳ Validate project locations (Lexington / Pelion / Cayce / Aiken / Richland / Saluda) with Joel — currently distributed across the documented service area.
- ⏳ Optionally export `favicon.png` to multiple sizes (16×16, 32×32, 192×192) if the single icon-mark fallback isn't crisp enough at small browser tab sizes.

## Notes

- All logo PNGs are exported from Claude Design's State-style logo exploration ("Logo - State-style.html" canvas).
- The "house with cream outline + Burnt flag + door dot" symbol is the core mark — works at any size from favicon to yard sign.
- Burnt Orange (#D85E1F) in the flag and doorknob is the ONLY decorative use of the CTA color in the brand identity — per brand rule "CTA only" exception for the logo mark itself.
