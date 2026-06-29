# Design System: Swiss Grid

> Category: Editorial & Magazine
> Helvetica on a strict 12-column grid — black, white, and one signal red. Müller-Brockmann clarity.

Source inspiration: Swiss International Typographic Style (Müller-Brockmann, Hofmann, Ruder)

## 2. Color Palette & Roles

### Primary
- **Carbon Black** (`#000000`): CSS var `--palette-bg-primary`. Used for: all typography, primary numbers, body text.

### Secondary & Accent
- **Signal Red** (`#e30613`): CSS var `--palette-accent`. Used for: one focal element per slide (CTA, stat, geometric block).
- **Steel Gray** (`#4a4a4a`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, fine print.

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Light Gray** (`#f2f2f2`): CSS var `--palette-bg-surface`. Used for: inset panels, secondary slides, quiet zones.

### Neutrals & Text
- **Carbon** (`#000000`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Cool Gray** (`#9a9a9a`): Used for: hairlines, dividers, axis labels.

### Gradient System
`linear-gradient(0deg, #ffffff 0%, #f5f5f5 100%)` — barely-there grid wash for alternate slides.

## 3. Typography Rules

### Font Family
- Heading: "Inter"
- Body: "Inter"
- Fallbacks: "Helvetica Neue", Helvetica, Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 88px | 900 | 1.0 | -0.03em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Subheading | 24px | 500 | 1.3 | 0 |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 14px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48/64px
- Strict 12-column grid with 24px gutters — never break alignment
- Content anchored to grid intersections; numbers and labels left-aligned

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Duration: 250ms
- Hard cuts, no soft fades — entrances feel like Swiss type setting
- @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always pure white — black text, no exceptions
- Inter (Helvetica fallback) for everything — no serifs, no decorative fonts
- Signal Red used ONCE per slide as a single geometric block, rule, or word
- Strict 12-column grid: every element snaps to grid lines
- Captions are tiny (12-14px) and uppercase, letter-spaced 0.04em
- Geometric primitives (circles, squares, lines) may accent layout
- Headlines can break the grid — but only one element per slide may do so
- Negative space is content — leave whole columns empty if needed
- Contrast ratio is maximum: black on white is 21:1, the safest possible
- Never center-align body text — left-align to the grid every time
