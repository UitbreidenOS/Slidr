# Design System: Fitness Power

> Category: Niche & Industry
> Bold black with electric red — athletic, high-intensity, transformation energy. Numbers as trophies, action verbs, before/after conviction.

Source inspiration: contemporary strength-training and athletic-performance content aesthetic

## 2. Color Palette & Roles

### Primary
- **Power Red** (`#ff2e2e`): CSS var `--palette-bg-primary`. Used for: dominant hooks, transformation callouts, "PR" / record markers.

### Secondary & Accent
- **Blaze Orange** (`#ff6b35`): CSS var `--palette-accent`. Used for: gradient stops, urgency CTAs, "today only" energy.
- **Neon Yellow** (`#f7ff00`): CSS var `--palette-bg-secondary`. Used for: rare highlight bursts on max-effort stats.

### Surface & Background
- **Iron Black** (`#0a0a0a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Steel Gray** (`#1a1a1a`): CSS var `--palette-bg-surface`. Used for: inset panels, set/rep cards, data blocks.

### Neutrals & Text
- **Pure White** (`#ffffff`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Iron Gray** (`#9a9a9a`): Used for: captions, secondary metadata, disclaimer fine print.

### Gradient System
`linear-gradient(135deg, #ff2e2e 0%, #ff6b35 100%)` — used for hero hooks and primary CTAs.
`linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)` — used for slide depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Oswald"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 96px | 700 | 0.95 |
| Heading | 52px | 700 | 1.05 |
| Subheading | 30px | 600 | 1.2 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Asymmetric layouts OK — diagonal energy reflects effort and motion
- One focal stat or transformation claim per slide

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always iron black (#0a0a0a) — never light, never pastel
- Power Red is the brand mark — ONE dominant element per slide
- Use transformation language: "BEFORE / AFTER", "Day 1 / Day 90", "0 → 100"
- Numbers are trophies: oversized (72px+), often with units ("+30LBS", "−12% BF")
- Action-verb hooks in all caps: "LIFT", "GRIND", "BURN", "EARN"
- Body copy uses second person, imperative mood: "Do this. Skip that. Train like."
- Neon Yellow reserved for MAX one moment per carousel — a peak-effort stat or PR
- Avoid soft curves — angles, hard edges, and bold blocks only
- Set/rep data in Steel Gray surface with white type — readable, gym-floor legible
