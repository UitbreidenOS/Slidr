# Design System: Education Learn

> Category: Niche & Industry
> Bright blue and yellow on white — friendly, clear, accessible, classroom-friendly aesthetic. Step numbers as teachers, simple language, generous contrast.

Source inspiration: contemporary online learning and educational content aesthetic

## 2. Color Palette & Roles

### Primary
- **Bright Blue** (`#2563eb`): CSS var `--palette-bg-primary`. Used for: primary headings, step numbers, dominant CTAs.

### Secondary & Accent
- **Sunny Yellow** (`#fbbf24`): CSS var `--palette-accent`. Used for: highlight underlines, "key idea" markers, swipe indicators.
- **Sky Cyan** (`#38bdf8`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary highlights, link accents.

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Blue Surface** (`#eff6ff`): CSS var `--palette-bg-surface`. Used for: inset cards, example blocks, tip panels.

### Neutrals & Text
- **Deep Slate** (`#1e293b`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Cool Gray** (`#64748b`): Used for: captions, secondary metadata, helper text.

### Gradient System
`linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)` — used for hero hooks and primary CTA fills.
`linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)` — used for soft blue depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Bricolage Grotesque"
- Body: "Plus Jakarta Sans"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 40px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.35 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Numbered step layouts: large step number on left, content on right
- One focal concept per slide — clarity over cleverness

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1) (gentle bounce for friendly feel)
- Duration: 300ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always white (#ffffff or #eff6ff) — never dark, never cream
- Step numbers oversized (80px+) in Bright Blue — they're the teachers
- Plain language, grade-8 reading level — "use", not "utilize"; "help", not "facilitate"
- Use Sunny Yellow ONLY for one thing per slide: a key term highlight, a CTA, or a tip callout
- Concept-then-example pattern: define on one slide, show on the next
- Body text in Deep Slate (#1e293b), max 22px — readability over density
- Avoid jargon; if industry term needed, define inline ("API — the messenger between apps")
- Subtle rounded corners (12-16px) on cards — friendly without being playful
- Tone: warm, encouraging, second-person — "you'll learn", "you'll notice", "try this"
- One key takeaway per slide, restated in hook and recap
