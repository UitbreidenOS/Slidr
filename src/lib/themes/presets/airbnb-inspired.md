# Design System: Airbnb Inspired

> Category: Brand-Inspired
> Warm coral on cream with friendly rounded type — hospitality, belonging, considered travel aesthetic. Soft, human, generous.

Source inspiration: contemporary hospitality platform visual language (warm coral palette and rounded typography only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Rausch Coral** (`#ff5a5f`): CSS var `--palette-bg-primary`. Used for: primary headings, brand marks, key CTAs, dominant hooks.

### Secondary & Accent
- **Deep Teal** (`#00a699`): CSS var `--palette-accent`. Used for: secondary markers, status dots, trusted-by indicators.
- **Sunset Pink** (`#fc642d`): CSS var `--palette-bg-secondary`. Used for: gradient stops, hover highlights.

### Surface & Background
- **Warm Cream** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Sand** (`#faf8f5`): CSS var `--palette-bg-surface`. Used for: inset cards, testimonial panels, listing tiles.

### Neutrals & Text
- **Charcoal Ink** (`#484848`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Stone Gray** (`#767676`): Used for: captions, secondary metadata, helper text.

### Gradient System
`linear-gradient(135deg, #ff5a5f 0%, #fc642d 100%)` — used for hero hooks and primary CTAs.
`linear-gradient(180deg, #ffffff 0%, #faf8f5 100%)` — barely-there warm depth.

## 3. Typography Rules

### Font Family
- Heading: "Manrope"
- Body: "Manrope"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 700 | 1.1 |
| Heading | 44px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.35 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone
- Generous corner radius (16-24px) on all cards and shapes — friendliness through shape

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 300ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm cream (#ffffff or #faf8f5) — never cool gray, never dark
- Rausch Coral is the primary brand mark — use for ONE dominant element per slide
- Generous rounded corners (16-24px) on EVERY card, button, and badge — no sharp edges
- Body text in #484848, NEVER pure black — softer, more human
- Stone Gray (#767676) for all secondary info; subtle and quiet
- Numbers/stats oversized (52px+) in Rausch Coral for emphasis
- Subtle warm shadows (rgba(0,0,0,0.06) at most) — never harsh drop shadows
- Friendly tone in copy: second person, conversational, welcoming verbs ("discover", "find", "stay")
- Deep Teal used sparingly — max once per slide for trust signals
