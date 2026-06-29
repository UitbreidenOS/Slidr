# Design System: Indie Sleaze 2.0

> Category: Brutalist & Y2K
> High-contrast flash photography, magenta-tinted, dirty and raw — the rebooted indie sleaze of 2023-2025 (think i-D, Dazed, urban Tumblr).

Source inspiration: 2024-2025 indie sleaze revival (i-D, Dazed, Urban Outfitters editorial, Tumblr 2.0)

## 2. Color Palette & Roles

### Primary
- **Deep Pink** (`#ff1493`): CSS var `--palette-bg-primary`. Used for: hook text, brand fills, magenta flash overlay tint.

### Secondary
- **Burnt Orange** (`#ff6b35`): CSS var `--palette-bg-secondary`. Used for: accent blocks, secondary brand elements.

### Accent
- **Acid Purple** (`#9370db`): CSS var `--palette-accent`. Used for: underlines, swipe arrows, CTA highlights.

### Background
- **Smoky Black** (`#1a0011`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Wine Black** (`#2d001a`): CSS var `--palette-bg-surface`. Used for: photo panels, cards, inset containers.

### Text
- **Bone White** (`#f0f0f0`): CSS var `--palette-text`. Used for: body text, captions.

### Gradient System
`linear-gradient(180deg, rgba(255,20,147,0.15) 0%, transparent 50%)` — used for magenta flash overlay on photos.
`linear-gradient(135deg, #1a0011 0%, #2d001a 50%, #1a0011 100%)` — used for moody slide backgrounds.
`linear-gradient(135deg, #ff1493 0%, #9370db 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.0 |
| Heading | 42px | 700 | 1.1 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Content layered over photographs, not isolated on solid panels

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Entries feel slightly jerky, almost "stumble-in" — slightly looser easing; respect prefers-reduced-motion

## 6. Design Rules
- Imagery-first: high-contrast flash photos with magenta (#ff1493) wash overlay at 15-25% opacity
- Background must be smoky black (#1a0011) — never white, never light gray
- Text uses bone white (#f0f0f0), 16:1+ contrast on background
- Deep pink (#ff1493) used for ONE element per slide max
- 3-5% grain/noise overlay on every slide for that cheap-film texture
- Slight magenta color-shift on all photos (CSS filter: hue-rotate + saturate)
- Mixed typography: serif italic pull-quotes optional alongside Space Grotesk headlines
- Numbers can be oversized (96px+) with mix of weights (300 + 700) for tension
- Burnt orange (#ff6b35) and acid purple (#9370db) as secondary "filmic" accents
- Never perfectly aligned — slight 1-2deg rotation on callouts for hand-placed feel
