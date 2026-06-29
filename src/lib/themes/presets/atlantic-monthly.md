# Design System: Atlantic Monthly

> Category: Editorial & Magazine
> Traditional cream and deep navy — long-form essay aesthetic, sober, authoritative, bookish.

Source inspiration: The Atlantic magazine long-form features + Harper's editorial design

## 2. Color Palette & Roles

### Primary
- **Atlantic Navy** (`#0f2c4d`): CSS var `--palette-bg-primary`. Used for: all typography, headlines, body text.

### Secondary & Accent
- **Burgundy** (`#7c1d1d`): CSS var `--palette-accent`. Used for: pull quotes, section dividers, dateline marks.
- **Slate** (`#3a4a5c`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions.

### Surface & Background
- **Atlantic Cream** (`#f4ede0`): CSS var `--palette-bg-background`. Used for: default slide background, page surface.
- **Paper White** (`#fffefa`): CSS var `--palette-bg-surface`. Used for: inset cards, quote frames.

### Neutrals & Text
- **Navy** (`#0f2c4d`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Stone Gray** (`#6b6b6b`): Used for: footnotes, fine print, page numbers.

### Gradient System
`linear-gradient(180deg, #f4ede0 0%, #e6dcc8 100%)` — warm aged-paper depth.

## 3. Typography Rules

### Font Family
- Heading: "Source Serif Pro"
- Body: "Inter"
- Fallbacks: Georgia, "Times New Roman", serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 76px | 700 | 1.1 | -0.01em |
| Heading | 42px | 700 | 1.2 | -0.005em |
| Subheading | 24px | 600 | 1.35 | 0 |
| Body | 22px | 400 | 1.6 | 0 |
| Pull Quote | 30px | 400 italic | 1.4 | 0 |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 16/24/32/48/64px
- Narrow text column (~640px) centered for essay body slides
- Two-column layouts for sidebar + main feature

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 400ms
- Quiet fade-up entrances; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always warm Atlantic cream — never pure white, never dark
- Source Serif Pro for headings and quotes; Inter for body and metadata
- Burgundy reserved for one element per slide (quote, divider, mark)
- Long-form body slides use narrow centered column (~640px)
- Pull quotes italic at 30px with 4px burgundy left border
- Two-column layouts: feature article left, sidebar right
- Drop caps encouraged on first slide of major sections (3-line drop cap)
- Body line-height 1.6 — essay-prose rhythm
- All-caps tracked labels (12px, 0.12em) for section headers
- Contrast > 4.5:1 — navy on cream is ~13:1, comfortably safe
