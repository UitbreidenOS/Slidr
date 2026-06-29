# Design System: Fitness Transform

> Category: Agentic
> Depth Layering: enabled
> Transformation carousels — bold workout verbs like "STRONG", "BUILT", "RELENTLESS" sit BEHIND the athlete cutout.

Source inspiration: Coach Instagram transformations, 2026

## 2. Color Palette & Roles

### Primary
- **Power Red** (`#ef4444`): CSS var `--palette-bg-primary`. Used for: hero verbs, day-counter numerals.

### Secondary & Accent
- **Volt** (`#facc15`): CSS var `--palette-accent`. Used for: streak counters, swipe cue.
- **Charcoal** (`#0a0a0a`): CSS var `--palette-bg-secondary`. Used for: contrast headlines.

### Surface & Background
- **Asphalt** (`#18181b`): CSS var `--palette-bg-background`. Used for: gym / studio backdrop.
- **Concrete** (`#27272a`): CSS var `--palette-bg-surface`. Used for: stat panels.

### Neutrals & Text
- **Chalk** (`#fafafa`): CSS var `--palette-text`. Used for: body.
- **Steel** (`#a1a1aa`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #18181b 0%, #27272a 50%, #450a0a 100%)` — gritty stage.
`linear-gradient(90deg, #ef4444 0%, #facc15 100%)` — energy gradient on stats.

## 3. Typography Rules

### Font Family
- Heading: "Anton"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Verb | 220px | 400 | 0.9 | -0.02em |
| Stat | 120px | 800 | 0.95 | -0.03em |
| Heading | 52px | 800 | 1.0 | -0.02em |
| Body | 24px | 600 | 1.4 | 0 |
| Caption | 16px | 700 | 1.3 | 0.06em |

## 4. Spacing & Layout
- Padding: 56-80px
- gap scale: 16/24/40/64px
- Depth layering spacing: athlete cutout occupies 45-55% canvas, centred; giant verb stretches across the full width, with letters extending well past the athlete silhouette on both sides

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16,1,0.3,1)
- Duration: 500ms
- Subject entry: scale 0.94 → 1, opacity 0 → 1, 700ms
- Verb entry: clip-path inset(0 100% 0 0) → inset(0 0 0 0), 600ms with 100ms stagger

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1 } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Athlete MUST be a transparent-background PNG (or CSS clip-path) — never a rectangle
- Use ALL-CAPS Anton for verbs; never mix case
- Stat numerals (weight lifted, days streak) should be 100-140px
- Volt yellow for ONE energy element per slide max
- Body copy max 6 words per slide — transformation carousels are visual
- Heavy drop-shadow under the athlete (offset 0 16px, blur 24px, opacity 0.5) to plant them on the stage
- Slide 1 should NOT have a CTA — save CTAs for slide 7 or 8
