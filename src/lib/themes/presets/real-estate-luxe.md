# Design System: Real Estate Luxe

> Category: Niche & Industry
> Pure black with antique gold and cream — premium listings, architectural elegance, generous properties. Refined serif headlines, address-book polish.

Source inspiration: contemporary luxury real-estate editorial and architectural content aesthetic

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#0d0d0d`): CSS var `--palette-bg-primary`. Used for: dominant type on cream, primary headings, address lines.

### Secondary & Accent
- **Antique Gold** (`#c9a96e`): CSS var `--palette-accent`. Used for: signature premium accents, price tags, "for sale" markers.
- **Champagne Highlight** (`#e6cf9a`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary premium highlights.

### Surface & Background
- **Architectural Cream** (`#f5f0e6`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Stone Surface** (`#e8e2d4`): CSS var `--palette-bg-surface`. Used for: inset cards, spec sheets, floor-plan panels.

### Neutrals & Text
- **Onyx Black** (`#1a1a1a`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Warm Gray** (`#7d7468`): Used for: captions, secondary metadata, fine print.

### Gradient System
`linear-gradient(180deg, #0d0d0d 0%, #1f1f1f 100%)` — used for reverse hero/cover slides.
`linear-gradient(90deg, #c9a96e 0%, #e6cf9a 100%)` — used for gold underlines and price accents.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 600 | 1.05 |
| Heading | 44px | 500 | 1.2 |
| Subheading | 26px | 400 | 1.3 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 8/16/24/32/48px
- Centered, symmetrical composition — feels like a luxury brochure
- One focal property or spec per slide

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms (slower, deliberate)
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Default background is architectural cream (#f5f0e6) — never stark white
- Reverse slides (cover, hero) use Pure Black (#0d0d0d) with cream/gold type
- Antique Gold reserved for ONE premium element per slide — typically price or CTA
- Property prices oversized (56px+) in Antique Gold with thin tracking
- Address lines in serif (Cormorant), large and centered — the address IS the brand
- Spec sheets in tabular layout: sq ft, beds, baths, lot size — clean columns
- Body text in Onyx Black (#1a1a1a), never pure black — softer, more editorial
- Subtle 1px hairline borders in Stone Gray; no heavy frames, no drop shadows
- Tone: measured, aspirational, second-person — "your new home", "your view", "your address"
- Avoid exclamation marks and hype — luxury whispers
- Floor plans and architectural detail encouraged — thin gold line work is on-brand
