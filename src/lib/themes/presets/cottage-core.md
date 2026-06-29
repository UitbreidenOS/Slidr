# Design System: Cottage Core

> Category: Brutalist & Y2K
> Florals, cream + sage + blush, hand-drawn feel — the romantic pastoral aesthetic of cottagecore, watercolor illustration, and indie lifestyle brands.

Source inspiration: 2019-2025 cottagecore aesthetic (Sage Green Sunday, indie lifestyle brands, Rifle Paper Co., Anastasia Beverly Hills)

## 2. Color Palette & Roles

### Primary
- **Sage Green** (`#8fbc8f`): CSS var `--palette-bg-primary`. Used for: brand mark, foliage motifs, primary headings.

### Secondary
- **Blush Pink** (`#d4a5a5`): CSS var `--palette-bg-secondary`. Used for: secondary panels, rose motifs, accent backgrounds.

### Accent
- **Mustard Honey** (`#c9a96e`): CSS var `--palette-accent`. Used for: highlight strokes, swipe arrows, decorative dots.

### Background
- **Warm Cream** (`#faf3e7`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Soft Vanilla** (`#f5ead4`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Walnut Brown** (`#3d2914`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(135deg, #faf3e7 0%, #f5ead4 100%)` — used for soft slide background variation.
`linear-gradient(135deg, #8fbc8f 0%, #d4a5a5 100%)` — used for hook text gradient fills (sage to blush).
No hard gradients — watercolor washes only.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 400 | 1.1 |
| Heading | 42px | 500 | 1.2 |
| Subheading | 26px | 500 | 1.35 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Soft rounded corners (16-20px); let florals and foliage frame content

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 380ms (slow, gentle)
- Subtle scale (0.97 to 1.0) on entry — like a flower opening; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Fraunces with optical sizing, slightly italic for headings — soft, romantic serif
- Background must be warm cream (#faf3e7) — never pure white
- Decorative motifs encouraged: watercolor florals (SVG), botanical line illustrations, bees, mushrooms
- Sage green (#8fbc8f) used for ONE botanical element per slide max
- Body text is walnut brown (#3d2914), 11:1+ contrast on cream background
- Border-radius 12-20px on containers — soft, hand-drawn feel
- Soft drop-shadows in sage green (#8fbc8f at 15% opacity) — never black shadows
- Numbers can use the sage-to-blush gradient fill
- Optional: hand-drawn SVG illustrations (small rose, leaf, daisy) as decorative accents
- Optional: subtle paper-texture noise at 3% opacity
- Italic Fraunces reserved for pull-quotes, captions, and decorative flourishes
