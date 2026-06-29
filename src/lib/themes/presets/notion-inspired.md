# Design System: Notion Inspired

> Category: Brand-Inspired
> Warm paper white with soft charcoal text and a friendly yellow accent — the calm, organized, productivity aesthetic. Approachable, low-stimulation, clear.

Source inspiration: contemporary productivity workspace visual language (warm-neutral palette and friendly type only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Charcoal Ink** (`#2f3437`): CSS var `--palette-bg-primary`. Used for: primary headings, dominant text, key labels.

### Secondary & Accent
- **Warm Yellow** (`#fde88a`): CSS var `--palette-accent`. Used for: highlight tags, swipe indicators, ONE emphasis element per slide.
- **Soft Blue** (`#5a89c9`): CSS var `--palette-bg-secondary`. Used for: links, secondary markers, breadcrumb-style cues.

### Surface & Background
- **Paper White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Cream** (`#fbfaf5`): CSS var `--palette-bg-surface`. Used for: inset cards, callout blocks, quote panels.

### Neutrals & Text
- **Body Gray** (`#3f4347`): CSS var `--palette-text`. Used for: body text, paragraph copy.
- **Warm Taupe** (`#9b9a97`): Used for: captions, secondary metadata, helper text.

### Gradient System
`linear-gradient(180deg, #ffffff 0%, #fbfaf5 100%)` — barely-perceptible paper depth.
`linear-gradient(90deg, #fde88a 0%, #fef3c7 100%)` — used for highlight bar and tag gradients.

## 3. Typography Rules

### Font Family
- Heading: "Plus Jakarta Sans"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 40px | 600 | 1.2 |
| Subheading | 24px | 500 | 1.35 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 260ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm white (#ffffff or #fbfaf5) — never pure stark white, never dark
- Yellow (#fde88a) appears on exactly ONE element per slide max — restraint is the aesthetic
- Body text in #3f4347 charcoal, never pure black — softer on the eye
- Cards use #fbfaf5 cream surface with no border, just a 1px subtle #ebe9e1 hairline if needed
- Friendly tone in copy: short sentences, second person, helpful verbs
- Emojis used sparingly as small inline bullets (not decoration)
- Numbers/stats in Charcoal Ink, oversized (52px+), NEVER in color
- Light, paper-like depth: subtle shadows only (0 1px 2px rgba(0,0,0,0.04))
