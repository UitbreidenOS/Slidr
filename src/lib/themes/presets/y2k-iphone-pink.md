# Design System: Y2K iPhone Pink

> Category: Brutalist & Y2K
> Soft pink with chrome accents and translucent layers — the 2000s tech aesthetic of pink Razr phones, iPod nanos, and rose-gold gadgets.

Source inspiration: Pink Razr 2004, iPod Nano pink 2005, rose-gold gadgets, early Tumblr pink themes

## 2. Color Palette & Roles

### Primary
- **Rose Pink** (`#ff66a3`): CSS var `--palette-bg-primary`. Used for: brand mark, primary buttons, hook text.

### Secondary
- **Powder Blue** (`#b8e0ff`): CSS var `--palette-bg-secondary`. Used for: secondary panels, soft accent blocks.

### Accent
- **Chrome Silver** (`#d4d4d8`): CSS var `--palette-accent`. Used for: metallic borders, swipe arrows, highlight strokes.

### Background
- **Soft Pink** (`#ffd1dc`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Bubblegum Pink** (`#ffb3c6`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Plum** (`#4a0e2a`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(180deg, #ffffff 0%, #d4d4d8 30%, #a1a1aa 50%, #d4d4d8 70%, #ffffff 100%)` — used for chrome borders and metallic text.
`linear-gradient(135deg, #ffd1dc 0%, #ffb3c6 50%, #ff66a3 100%)` — used for slide background variation.
`linear-gradient(135deg, #ff66a3 0%, #b8e0ff 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Quicksand"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 40px | 700 | 1.2 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Soft rounded corners (16-24px) for that bubblegum gadget feel

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 360ms
- Subtle floating animation on decorative chrome blobs; respect prefers-reduced-motion

## 6. Design Rules
- Background must be soft pink (#ffd1dc) — never white, never gray
- Rose pink (#ff66a3) used for ONE primary element per slide max
- Translucent layers: rgba(255,255,255,0.5) with backdrop-filter: blur(12px) for glass panels
- Chrome silver (#d4d4d8) used as border treatment — fake metallic edges via gradient
- Border-radius 16-24px — soft, gadget-friendly curves
- Body text is plum (#4a0e2a), 10:1+ contrast on pink backgrounds
- Optional: 3D chrome "key" or "button" SVG decorative elements on hero slides
- Numbers can use the rose-pink gradient fill
- Soft drop-shadows in rose pink (#ff66a3 at 20% opacity) — never black shadows
- Optional: glitter/sparkle texture overlay at 5% opacity for that "pink gadget" sparkle
