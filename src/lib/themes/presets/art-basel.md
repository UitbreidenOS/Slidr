# Design System: Art Basel

> Category: Editorial & Magazine
> Pure gallery white, oversized bold sans, one hot signal color — the contemporary art-fair wall.

Source inspiration: Art Basel press releases, gallery exhibition catalogues, Frieze magazine

## 2. Color Palette & Roles

### Primary
- **Gallery Black** (`#0a0a0a`): CSS var `--palette-bg-primary`. Used for: all typography, primary headlines.

### Secondary & Accent
- **Signal Red** (`#ff2d2d`): CSS var `--palette-accent`. Used for: ONE hot accent per slide — artist names, dates, dot markers.
- **Cool Gray** (`#525252`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, metadata.

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background, gallery wall.
- **Bone** (`#fafafa`): CSS var `--palette-bg-surface`. Used for: subtle insets, image frames.

### Neutrals & Text
- **Pure Black** (`#0a0a0a`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Light Gray** (`#a3a3a3`): Used for: dividers, registration marks, faint metadata.

### Gradient System
`linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)` — barely-visible gallery wall shadow.

## 3. Typography Rules

### Font Family
- Heading: "Montserrat"
- Body: "Inter"
- Fallbacks: "Helvetica Neue", Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 104px | 900 | 0.95 | -0.04em |
| Heading | 56px | 800 | 1.05 | -0.03em |
| Subheading | 24px | 700 | 1.2 | -0.01em |
| Body | 20px | 400 | 1.5 | 0 |
| Label | 13px | 700 | 1.3 | 0.16em uppercase |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48/80px
- Full-bleed images allowed; text slides anchored to one quadrant
- Massive hook typography (96-104px) — gallery-plaque impact

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 300ms
- Hard cuts and bold entrances — no soft fades, no easing curves beyond cubic
- @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always pure gallery white #ffffff
- Montserrat in heavy weights (800-900) for all display type — maximum impact
- Signal Red is HOT — used as a single dot, line, or word per slide
- Artwork reproduction is the hero — full-bleed images, never cropped tight
- Captions set small (12-14px) with extreme tracking (0.16em uppercase) — wall labels
- Two-column or three-column layouts feel right: image left, wall text right
- Generous padding around images (40px+ white border — gallery mat effect)
- Dates and artist names treated like wall plaques: small, tracked-out
- No drop shadows on images — they sit on the wall, flat and clean
- Contrast > 4.5:1 — black on white is 21:1, gallery-perfect safety
