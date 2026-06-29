# Design System: Whitewall Minimal

> Category: Editorial & Magazine
> Pure gallery white with one deep accent — air, light, and an obsessive respect for whitespace.

Source inspiration: Pace Gallery, Whitewall magazine, contemporary art-book design

## 2. Color Palette & Roles

### Primary
- **Charcoal** (`#0a0a0a`): CSS var `--palette-bg-primary`. Used for: all typography, fine lines, structural elements.

### Secondary & Accent
- **Gallery Black** (`#1f2937`): CSS var `--palette-accent`. Used for: single accent element per slide (CTA, rule, mark).
- **Slate** (`#475569`): CSS var `--palette-bg-secondary`. Used for: captions, footnote text, metadata.

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Bone** (`#fafaf7`): CSS var `--palette-bg-surface`. Used for: subtle inset frames, quiet zones.

### Neutrals & Text
- **Ink** (`#0a0a0a`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Hairline Gray** (`#d4d4d4`): Used for: borders, dividers, registration marks.

### Gradient System
`linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)` — barely visible tonal shift for full-bleed images.

## 3. Typography Rules

### Font Family
- Heading: "EB Garamond"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 84px | 400 | 1.05 | -0.02em |
| Heading | 44px | 400 | 1.18 | -0.01em |
| Subheading | 22px | 500 | 1.35 | 0 |
| Body | 20px | 400 | 1.6 | 0 |
| Caption | 13px | 500 | 1.4 | 0.06em |

## 4. Spacing & Layout
- Padding: 80-120px (extra generous — gallery wall breathing room)
- gap scale: 16/24/32/48/64/96px
- Centered single-column for text-only slides; full-bleed for image slides
- Whitespace is content — leave at least 30% of slide empty

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Duration: 600ms (slower than typical — let elements breathe in)
- Single-element entrances only — never animate the whole slide at once
- @starting-style for fade-up; respect prefers-reduced-motion

## 6. Design Rules
- Background is always pure white #ffffff — never cream, never gray
- EB Garamond at light weights (400-500) for elegance — no bold display
- Inter for body and tiny metadata labels — restrained, never decorative
- Gallery Black accent appears ONCE per slide — single dot, line, or word
- Whitespace is the loudest element — never fill more than 70% of a slide
- Captions and metadata in 13px with 0.06em tracking — art-label aesthetic
- No drop shadows, no gradients, no decorative shapes — flat and clean
- One focal element per slide; let everything else recede
- Contrast ratio > 4.5:1 — black on white is always 21:1, the gallery default
- Image slides can use full-bleed edges; text slides never bleed
