# Design System: Travel Wanderlust

> Category: Niche & Industry
> Sunset orange and teal on warm cream — adventurous, sun-soaked, journey-led aesthetic. Editorial serif headlines, postcard warmth, evocative copy.

Source inspiration: contemporary travel editorial and adventure-content aesthetic

## 2. Color Palette & Roles

### Primary
- **Sunset Orange** (`#ff8c42`): CSS var `--palette-bg-primary`. Used for: primary headings, golden-hour hooks, signature warmth.

### Secondary & Accent
- **Ocean Teal** (`#2a9d8f`): CSS var `--palette-accent`. Used for: secondary markers, water/coastal accents, complementary contrast.
- **Deep Teal** (`#264653`): CSS var `--palette-bg-secondary`. Used for: body text, dark contrast moments, ink details.

### Surface & Background
- **Warm Cream** (`#fdf6e3`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Sand Surface** (`#f5e9c9`): CSS var `--palette-bg-surface`. Used for: inset cards, itinerary blocks, testimonial panels.

### Neutrals & Text
- **Deep Teal Ink** (`#264653`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Driftwood Gray** (`#8a8474`): Used for: captions, secondary metadata, fine print.

### Gradient System
`linear-gradient(135deg, #ff8c42 0%, #ffb56b 100%)` — used for sunset hero hooks and CTAs.
`linear-gradient(180deg, #fdf6e3 0%, #f5e9c9 100%)` — used for warm cream depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.05 |
| Heading | 44px | 600 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Centered or left-aligned editorial layouts both welcome
- One focal destination or moment per slide

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm cream (#fdf6e3 or #f5e9c9) — never cool white, never dark
- Sunset Orange is the dominant warmth — ONE element per slide max in orange
- Body text in Deep Teal Ink (#264653) — feels like ink on a vintage postcard
- Serif headings (Fraunces) for destination names and journey hooks
- Evocative, sensory copy: "golden hour", "cobblestone", "salt air", "lantern-lit"
- Place names oversized (48px+) in Sunset Orange — they ARE the slide
- Travel data presented as itinerary: day numbers, distances, times
- Ocean Teal used for complementary contrast — never competes with orange
- Avoid stock-photo gradients; let the typography carry the warmth
- Tone: wanderlust, second-person, future-tense — "you'll wake to", "you'll taste", "you'll find"
- Subtle paper-grain or linen feel encouraged — 5% texture max on surfaces
