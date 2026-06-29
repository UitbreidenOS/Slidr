# Design System: Beauty Glow

> Category: Niche & Industry
> Soft blush pink with champagne gold on cream — glowing, luxurious, skincare-shelf elegance. Romantic serif accents, generous whitespace, glassy surfaces.

Source inspiration: contemporary skincare, beauty editorial, and luxury self-care content aesthetic

## 2. Color Palette & Roles

### Primary
- **Champagne Gold** (`#d4af7a`): CSS var `--palette-bg-primary`. Used for: primary headings, signature product hooks, dominant accents.

### Secondary & Accent
- **Blush Pink** (`#f4d3d8`): CSS var `--palette-accent`. Used for: soft highlights, glassy overlays, skin-tone tints.
- **Rose Petal** (`#e8a4b0`): CSS var `--palette-bg-secondary`. Used for: gradient stops, deeper pink moments.

### Surface & Background
- **Pearl Cream** (`#fdf6f0`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Blush Surface** (`#fbeae5`): CSS var `--palette-bg-surface`. Used for: inset cards, ingredient panels, testimonial blocks.

### Neutrals & Text
- **Cocoa Charcoal** (`#3d2e2e`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Mauve Taupe** (`#9c8484`): Used for: captions, secondary metadata, quiet fine print.

### Gradient System
`linear-gradient(135deg, #f4d3d8 0%, #fdf6f0 100%)` — soft blush-to-cream depth for backgrounds.
`linear-gradient(90deg, #d4af7a 0%, #f4d3d8 100%)` — used for signature gold-to-pink hero hooks.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 600 | 1.05 |
| Heading | 44px | 500 | 1.2 |
| Subheading | 26px | 400 | 1.35 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 8/16/24/32/48px
- Centered alignment; symmetrical, balanced, editorial
- One focal element per slide — the product, the ritual, the result

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 340ms (slow, graceful)
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always pearl cream (#fdf6f0 or #fbeae5) — never stark white, never dark
- Champagne Gold is the signature luxury accent — ONE element per slide
- Body text in Cocoa Charcoal (#3d2e2e) — softer than pure black, more editorial
- Skin-ingredient language: "hyaluronic acid", "vitamin C", "barrier", "hydration"
- Before/after language framed as transformation, not comparison ("glowing", "plump", "calm")
- Serif headings (Playfair) convey luxury; sans body (Inter) keeps it modern
- Soft pill-shaped badges and rounded product cards — radius 16-24px
- Subtle glass effect OK: backdrop-blur at low opacity for layered depth
- Numbers/stats oversized (48px+) in Champagne Gold with thin tracking
- Tone: calm, second-person, gentle — "your skin", "your ritual", "your glow"
- Avoid harsh contrasts — the whole palette should feel like it could live in a perfume ad
