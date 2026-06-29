# Design System: Swiss Poster 60s

> Category: Brutalist & Y2K
> Akzidenz-Grotesk-style sans, pure red/black/white, grid-heavy composition — the International Typographic Style of Müller-Brockmann, Hofmann, Lohse.

Source inspiration: Josef Müller-Brockmann posters, Armin Hofmann, Helmut Schmid, 1959-1968 Swiss design school

## 2. Color Palette & Roles

### Primary
- **Signal Red** (`#e30613`): CSS var `--palette-bg-primary`. Used for: oversized brand mark, headline fills, accent blocks.

### Secondary
- **Pure Black** (`#000000`): CSS var `--palette-bg-secondary`. Used for: borders, dividers, secondary text.

### Accent
- **Pure White** (`#ffffff`): CSS var `--palette-accent`. Used for: negative space, highlight blocks, swipe indicators.

### Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Off-White** (`#f5f5f5`): CSS var `--palette-bg-surface`. Used for: panels, code blocks, inset containers.

### Text
- **Pure Black** (`#000000`): CSS var `--palette-text`. Used for: all body text, secondary labels.

### Gradient System
No gradients — Swiss discipline forbids them.
Pure solid colors only.

## 3. Typography Rules

### Font Family
- Heading: "Archivo"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 120px | 900 | 0.95 |
| Heading | 56px | 800 | 1.05 |
| Subheading | 28px | 700 | 1.2 |
| Body | 20px | 500 | 1.5 |

## 4. Spacing & Layout
- Padding: 48-72px
- gap scale: 8/16/24/32/48/64px
- Strict 12-column grid; content aligned to grid lines

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 240ms (crisp, mechanical)
- No bounce — pure linear entry; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Archivo at 900 weight, tight letter-spacing (-0.03em), all-caps for impact
- Background must be pure white (#ffffff) — never cream, never off-white for primary slides
- Signal red (#e30613) used for ONE oversized element per slide max
- Color palette restricted to 3 colors: white, black, signal red — no exceptions
- 12-column grid is sacred — content aligned to grid intersections
- Borders and dividers are 1-2px solid black — never thicker
- Body text is pure black (#000000), 21:1 contrast on white
- Numbers can be oversized (120px+) in Archivo 900, signal red fill
- Sharp 0px border-radius — strictly geometric
- Optional: thin (1px) black rule lines as section dividers, no decoration
- Whitespace is the design — let the empty area breathe
