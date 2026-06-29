# Design System: Japanese Zen

> Category: Editorial & Magazine
> Warm cream, sumi ink, and vermillion seal red — wabi-sabi editorial, vertical type aware, restrained.

Source inspiration: Japanese editorial design (idea magazine, Popeye) + sumi-e aesthetics

## 2. Color Palette & Roles

### Primary
- **Sumi Ink** (`#1a1a1a`): CSS var `--palette-bg-primary`. Used for: headings, body text, brushstroke rules.

### Secondary & Accent
- **Vermillion Seal** (`#c1272d`): CSS var `--palette-accent`. Used for: hanko-style stamps, single accent, pull quotes.
- **Bamboo Gray** (`#5a6a5a`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions, kanji-style labels.

### Surface & Background
- **Washi Cream** (`#f5f0e1`): CSS var `--palette-bg-background`. Used for: default slide background, paper surface.
- **Soft Cream** (`#faf6e8`): CSS var `--palette-bg-surface`. Used for: inset panels, framed blocks.

### Neutrals & Text
- **Sumi Black** (`#1a1a1a`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Stone** (`#78716c`): Used for: footnote text, axis labels, fine metadata.

### Gradient System
`linear-gradient(180deg, #f5f0e1 0%, #e8e0c8 100%)` — washi paper tone for cover slides.

## 3. Typography Rules

### Font Family
- Heading: "Crimson Text"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 76px | 400 | 1.1 | -0.01em |
| Heading | 40px | 500 | 1.25 | 0 |
| Subheading | 24px | 500 | 1.4 | 0 |
| Body | 20px | 400 | 1.7 | 0 |
| Brush Quote | 28px | 400 italic | 1.5 | 0 |

## 4. Spacing & Layout
- Padding: 72-96px
- gap scale: 16/24/32/48/72px
- Asymmetric balance — heavy negative space on one side
- Single focal element per slide, never more; let it breathe

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 600ms (slow, contemplative)
- Vertical slide-up entrances (translateY); respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always warm washi cream — never pure white or black
- Crimson Text for headings at moderate weights (400-500); Inter for body
- Vermillion used ONCE per slide — like a hanko stamp, never as fill
- Generous whitespace: minimum 30% of slide must be empty
- Hairline horizontal rules (1px sumi ink) act as calligraphic dividers
- Two- and three-column vertical layouts feel right — text stacks like kanji columns
- Body line-height 1.7+ — never crowd the type
- Small Japanese-style labels (12-14px) for metadata, tracked-out
- Imagery treated like sumi-e ink wash — high contrast, generous margins
- Contrast > 4.5:1 — sumi ink on washi cream is ~16:1
