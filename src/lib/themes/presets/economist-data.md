# Design System: Economist Data

> Category: Editorial & Magazine
> Off-white with Economist red, serif headers, clean data visualization — the weekly briefing aesthetic.

Source inspiration: The Economist magazine + Financial Times data-led editorial design

## 2. Color Palette & Roles

### Primary
- **Editorial Black** (`#121212`): CSS var `--palette-bg-primary`. Used for: all typography, headlines, body text.

### Secondary & Accent
- **Economist Red** (`#e3120b`): CSS var `--palette-accent`. Used for: data highlights, callouts, key stats, section rules.
- **Cool Slate** (`#4a5568`): CSS var `--palette-bg-secondary`. Used for: secondary text, axis labels.

### Surface & Background
- **Briefing Off-White** (`#f1ede5`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Bright White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: data cards, chart frames, inset panels.

### Neutrals & Text
- **Body Black** (`#121212`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Light Gray** (`#9a9a9a`): Used for: gridlines, faint dividers, axis ticks.

### Gradient System
`linear-gradient(180deg, #f1ede5 0%, #e6e0d2 100%)` — subtle paper warmth for hero slides.

## 3. Typography Rules

### Font Family
- Heading: "Source Serif Pro"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 72px | 700 | 1.1 | -0.01em |
| Heading | 40px | 700 | 1.2 | 0 |
| Subheading | 22px | 600 | 1.3 | 0 |
| Body | 20px | 400 | 1.55 | 0 |
| Stat | 64px | 700 | 1.0 | -0.02em |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Two- and three-column data grids: chart left, analysis right
- Top headline band + bottom chart band split (60/40 vertical)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 300ms
- @starting-style for fade-in; respect prefers-reduced-motion
- Data elements enter with quick bar-grow or number-count animation

## 6. Design Rules
- Background is warm off-white #f1ede5 — never pure white, never dark
- Source Serif Pro for headlines; Inter for body, labels, and chart text
- Economist Red used for ONE data highlight per slide — bar, stat, or line
- Data visualizations are clean: minimal axes, no decorative gridlines
- Top headline band + bottom data band is the signature layout
- Two-column data grid: chart left, 3-bullet analysis right
- Stat numbers oversized (56-72px) in Inter Bold — never serif
- All-caps section labels (11-13px, tracked 0.14em) above charts
- Hairline rules (1px gray) separate data zones — never colored borders
- Contrast > 4.5:1 — black on briefing off-white is ~17:1, data-safe
