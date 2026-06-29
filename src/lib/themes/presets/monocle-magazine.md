# Design System: Monocle Magazine

> Category: Editorial & Magazine
> Off-white broadsheet with deep navy and signal red — the travel-and-affairs quarterly aesthetic.

Source inspiration: Monocle magazine covers and Travel Guides series

## 2. Color Palette & Roles

### Primary
- **Navy** (`#1a2b4a`): CSS var `--palette-bg-primary`. Used for: headings, masthead, body text.

### Secondary & Accent
- **Signal Red** (`#c8202f`): CSS var `--palette-accent`. Used for: cover lines, CTA underlines, page numbers, section flags.
- **Stone** (`#4a5a6e`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions, metadata.

### Surface & Background
- **Monocle Cream** (`#f4efe6`): CSS var `--palette-bg-background`. Used for: default slide background, page surface.
- **Bright White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: inset cards, photo overlays, quote frames.

### Neutrals & Text
- **Navy Text** (`#1a2b4a`): CSS var `--palette-text`. Used for: body copy.
- **Muted Gray** (`#8a8578`): Used for: fine print, footer details, page numbers.

### Gradient System
`linear-gradient(180deg, #f4efe6 0%, #e8e0d0 100%)` — subtle paper warmth for cover slides.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 76px | 700 | 1.05 | -0.02em |
| Heading | 42px | 600 | 1.18 | -0.01em |
| Subheading | 24px | 600 | 1.3 | 0 |
| Body | 22px | 400 | 1.55 | 0 |
| Cover Line | 28px | 700 | 1.2 | 0.02em |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Two-column editorial grid: 50/50 split with 40px gutter
- Top-aligned masthead band; content flows in 12-col grid below

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 400ms
- @starting-style fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always off-white Monocle cream — never pure white
- Cormorant Garamond serif for headlines, Inter for body and captions
- Signal Red is reserved for one element per slide (cover line, rule, or CTA)
- Two-column layouts are the default — left text, right image or callout
- Issue numbers, datelines, and page numbers rendered small and tracked-out
- Uppercase kicker labels in navy with red underline (3px)
- Navy headlines pair with subtle stone-gray metadata below
- Vary layouts: split cover, full-bleed photo with cover line, list-of-N grid
- Whitespace matters: 80px gutter between text columns, never crowd
- Contrast ratio > 4.5:1 — navy on cream easily exceeds 10:1
