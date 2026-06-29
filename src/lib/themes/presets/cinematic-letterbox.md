# Design System: Cinematic Letterbox

> Category: Cinematic & Gradient
> Film-style widescreen letterbox layout with deep blacks and warm golden brand typography.

Source inspiration: Cinema, Wes Anderson film layouts

## 2. Color Palette & Roles

### Primary
- **Focus White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: movie title hooks.

### Secondary & Accent
- **Academy Gold** (`#d4af37`): CSS var `--palette-accent`. Used for: highlights, cinema tags.
- **Dark Gold** (`#b8860b`): CSS var `--palette-bg-secondary`. Used for: badges.

### Surface & Background
- **Absorbing Black** (`#000000`): CSS var `--palette-bg-background`. Used for: letterbox bars.
- **Dark Asphalt** (`#0a0a0acc`): CSS var `--palette-bg-surface`. Used for: slide focus area.

### Neutrals & Text
- **Silver Gray** (`#f5f5f5`): CSS var `--palette-text`. Used for: dialogue text / body.
- **Classic Muted** (`#8a8a8a`): Used for: subtitle descriptors.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0a0a0a 100%)` — cinema screen glow.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 800 | 1.25 |
| Heading | 38px | 700 | 1.3 |
| Subheading | 24px | 600 | 1.4 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Layout mimics widescreen ratios with prominent top and bottom black border bars

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 500ms

## 6. Design Rules
- Center text must look like movie dialogue or clean cinematic credits
- Keep text aligned centered or justified for symmetry
- Black bars at top/bottom must cover at least 15% height to create widescreen letterbox look
- Highlight accents using gold only
