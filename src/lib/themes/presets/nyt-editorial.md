# Design System: NYT Editorial

> Category: Editorial & Magazine
> Newspaper-grade serif on warm cream — black ink on aged paper, the broadsheet editorial aesthetic.

Source inspiration: New York Times print edition typography & masthead layout

## 2. Color Palette & Roles

### Primary
- **Ink** (`#121212`): CSS var `--palette-bg-primary`. Used for: headlines, body text, masthead titles.

### Secondary & Accent
- **Old Glory Red** (`#b91c1c`): CSS var `--palette-accent`. Used for: section dividers, pull quotes, dateline highlights, kicker rules.
- **Aged Brown** (`#5c3a21`): CSS var `--palette-bg-secondary`. Used for: byline metadata, photo captions, secondary headers.

### Surface & Background
- **Newsprint Cream** (`#f4efe1`): CSS var `--palette-bg-background`. Used for: default slide background, broadsheet pages.
- **Paper White** (`#fffef8`): CSS var `--palette-bg-surface`. Used for: inset boxes, photo caption frames, sub-feature cards.

### Neutrals & Text
- **Ink Black** (`#121212`): CSS var `--palette-text`. Used for: all body copy.
- **Stone Gray** (`#6b6b6b`): Used for: fine print, footer text, metadata, timestamps.

### Gradient System
`linear-gradient(180deg, #f4efe1 0%, #e8e1cf 100%)` — subtle aged-paper depth for hero slides.

## 3. Typography Rules

### Font Family
- Heading: "Source Serif Pro"
- Body: "Inter"
- Fallbacks: Georgia, "Times New Roman", serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 80px | 800 | 1.05 | -0.02em |
| Heading | 44px | 700 | 1.15 | -0.01em |
| Subheading | 26px | 600 | 1.3 | 0 |
| Body | 22px | 400 | 1.55 | 0 |
| Pull Quote | 32px | 400 italic | 1.4 | 0 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Multi-column masthead grid: 3-column split with 32px gutters
- Narrow text column (~640px) centered for body slides
- Top-of-slide rule: 4px solid #121212 under masthead

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 350ms
- @starting-style for fade-up; respect prefers-reduced-motion

## 6. Design Rules
- Background must be warm newsprint cream — never pure white or dark
- Headings in Source Serif Pro (broad-sheet serif); body in Inter
- Two- and three-column layouts are encouraged — newspaper masthead feel
- Old Glory Red used sparingly: one pull quote, divider, or stat per slide
- Headlines set tight (line-height 1.05) and break after 4-6 words
- All-caps small labels for kickers ("POLITICS", "OPINION", "BUSINESS")
- Horizontal hairline rules (1px #121212) separate sections like a printed page
- Vary layouts: 3-column masthead, narrow column, full-bleed photo+caption
- Contrast ratio > 4.5:1 always — black ink on cream is the safe default
