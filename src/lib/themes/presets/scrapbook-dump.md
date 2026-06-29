# Design System: Scrapbook Dump

> Category: Brutalist & Y2K
> Polaroid frames, washi tape strips, handwritten labels, photo-dump aesthetic — the 2023-2025 "messy scrapbook" social media trend.

Source inspiration: 2023-2025 photo dump trend (Instagram, TikTok), Poloroid revival, indie zines, washi tape aesthetic

## 2. Color Palette & Roles

### Primary
- **Dusty Rose** (`#c25b5b`): CSS var `--palette-bg-primary`. Used for: tape accents, handwritten underlines, brand mark.

### Secondary
- **Sage Mist** (`#6b8e7f`): CSS var `--palette-bg-secondary`. Used for: secondary panels, accent shapes, sage strokes.

### Accent
- **Vintage Tan** (`#d4b896`): CSS var `--palette-accent`. Used for: tape fills, swipe arrows, highlight stickers.

### Background
- **Warm Cream** (`#f5f0e8`): CSS var `--palette-bg-background`. Used for: default slide background (kraft-paper feel).

### Surface
- **Pure White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: Polaroid frames, photo panels, inset cards.

### Text
- **Walnut Brown** (`#2a2520`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 100%)` — used for tape-edge gradient fade.
`linear-gradient(135deg, #f5f0e8 0%, #ede4d3 100%)` — used for kraft-paper background variation.
Decorative tape gradients (rose → tan → sage) at slight angles — NOT for text.

## 3. Typography Rules

### Font Family
- Heading: "Caveat"
- Body: "Inter"
- Fallbacks: cursive, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.0 |
| Heading | 44px | 700 | 1.1 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Asymmetric scrapbook layout — items rotated 1-5deg for hand-placed feel

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Entries rotate in at slight angle (-3deg to +3deg) for "stickered on" feel; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Caveat at 700 weight — handwritten, personal, scrapbook-y
- Background must be warm cream (#f5f0e8) — never pure white, never modern gray
- Polaroid frames: 12-16px white border with 4-8px bottom border (classic Polaroid ratio)
- Washi tape strips: 24-40px wide, semi-transparent (rgba with 60-80% opacity), rotated 10-25deg
- Dusty rose (#c25b5b) used for ONE tape accent per slide max
- Body text is walnut brown (#2a2520), 12:1+ contrast on cream background
- Sage mist (#6b8e7f) and vintage tan (#d4b896) alternate as supporting colors
- Numbers can be handwritten in Caveat at 96px+ for personal feel
- Slight 2-3deg rotation on most decorative elements for hand-placed aesthetic
- Optional: torn-paper edge texture on photo panels (SVG mask)
- Optional: scribble underlines, star doodles, and arrows as Caveat annotations
