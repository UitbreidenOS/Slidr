# Design System: Paris Review

> Category: Editorial & Magazine
> Cream paper, sober serif, and small caps — the literary quarterly. Restrained, writerly, intimate.

Source inspiration: The Paris Review quarterly + Granta literary magazine aesthetic

## 2. Color Palette & Roles

### Primary
- **Sepia Ink** (`#2d2419`): CSS var `--palette-bg-primary`. Used for: all typography, body text, masthead.

### Secondary & Accent
- **Burgundy** (`#7c2d12`): CSS var `--palette-accent`. Used for: chapter marks, pull quote accent, issue numbers.
- **Faded Olive** (`#5c6a4a`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions, section labels.

### Surface & Background
- **Review Cream** (`#f9f4e8`): CSS var `--palette-bg-background`. Used for: default slide background, page surface.
- **Aged Paper** (`#fffdf6`): CSS var `--palette-bg-surface`. Used for: inset cards, quote frames.

### Neutrals & Text
- **Ink Brown** (`#2d2419`): CSS var `--palette-text`. Used for: all body copy.
- **Soft Taupe** (`#8a7d6e`): Used for: footnote text, copyright, fine metadata.

### Gradient System
`linear-gradient(180deg, #f9f4e8 0%, #ede4cf 100%)` — aged paper warmth for hero slides.

## 3. Typography Rules

### Font Family
- Heading: "Libre Baskerville"
- Body: "Inter"
- Fallbacks: Georgia, "Times New Roman", serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 68px | 700 | 1.1 | -0.01em |
| Heading | 38px | 600 | 1.25 | 0 |
| Subheading | 22px | 500 | 1.4 | 0 |
| Body | 20px | 400 | 1.65 | 0 |
| Small Caps | 14px | 600 | 1.4 | 0.12em uppercase |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 12/16/24/32/48px
- Narrow text column (~620px) centered for body slides — book-page feel
- Two-column layouts for interviews: left question, right response

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 400ms
- Quiet fade-up entrances, never bouncy; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always Review Cream — never pure white, never dark
- Libre Baskerville for headings and quotes; Inter for body and metadata
- Burgundy reserved for small marks — issue numbers, emblems, chapter lines
- SMALL CAPS used liberally for kickers, labels, and section dividers
- Pull quotes italic at 26px with thin burgundy left border (3px)
- Two-column interview layouts are signature — Q on left, A on right
- Body line-height 1.65 — book-prose rhythm, never tight
- Issue number, volume, page number rendered as small caps in footer
- Imagery: black-and-white or muted sepia portraits — never colorful
- Contrast > 4.5:1 — sepia ink on cream is ~14:1, comfortably safe
