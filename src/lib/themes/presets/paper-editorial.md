# Design System: Paper Editorial

> Category: Claude AI
> Warm cream paper with serif display headlines — magazine-grade editorial layout. High contrast, generous whitespace.

Source inspiration: "Steal My Carousel System" editorial carousels

## 2. Color Palette & Roles

### Primary
- **Ink** (`#1a1a1a`): CSS var `--palette-bg-primary`. Used for: all headings and body text.

### Secondary & Accent
- **Terracotta** (`#c2410c`): CSS var `--palette-accent`. Used for: pull quotes, numbers, CTA underlines, section dividers.
- **Muted Brown** (`#78350f`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions.

### Surface & Background
- **Cream** (`#faf8f3`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Warm White** (`#fffef9`): CSS var `--palette-bg-surface`. Used for: inset cards, highlight boxes.

### Neutrals & Text
- **Ink Black** (`#1a1a1a`): CSS var `--palette-text`. Used for: primary text.
- **Stone Gray** (`#78716c`): Used for: captions, metadata, footer text.

### Gradient System
`linear-gradient(180deg, #faf8f3 0%, #f5f0e6 100%)` — subtle warm tint for depth.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 800 | 1.1 |
| Heading | 40px | 700 | 1.2 |
| Subheading | 26px | 600 | 1.3 |
| Body | 24px | 400 | 1.6 |
| Pull Quote | 32px | 400 italic | 1.4 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Magazine-style grid: 12-column with 32px gutters

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,0.46,0.45,0.94)
- Duration: 400ms

## 6. Design Rules
- Background is always warm cream — never pure white or dark
- Headings use Playfair Display (serif) — body uses Inter (sans)
- Terracotta accent used sparingly: one stat, one quote, or one underline per slide
- Generous whitespace — 80px padding minimum, don't fill every corner
- Pull quotes use italic Playfair at 32px with a left border in terracotta
- Numbers and stats are oversized (72px+) in terracotta
- Vary slide layouts: full-text, split text+quote, stat-focused
