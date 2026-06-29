# Design System: Music Vibe

> Category: Niche & Industry
> Deep purple with electric pink on black — immersive, bold, artist-led aesthetic. Big album-cover energy, mood-driven copy, neon accents.

Source inspiration: contemporary music-artist and album-release content aesthetic

## 2. Color Palette & Roles

### Primary
- **Electric Pink** (`#ff2e93`): CSS var `--palette-bg-primary`. Used for: dominant hooks, signature energy, release markers.

### Secondary & Accent
- **Deep Purple** (`#7c3aed`): CSS var `--palette-accent`. Used for: secondary markers, gradient stops, depth fills.
- **Plasma Magenta** (`#c026d3`): CSS var `--palette-bg-secondary`. Used for: gradient stops, rare transition moments.

### Surface & Background
- **Stage Black** (`#0a0a0a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Velvet Purple** (`#2d1b4e`): CSS var `--palette-bg-surface`. Used for: inset cards, tracklist blocks, content panels.

### Neutrals & Text
- **Pure White** (`#f4f4f4`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Lavender Mist** (`#a89cc8`): Used for: captions, secondary metadata, fine print.

### Gradient System
`linear-gradient(135deg, #ff2e93 0%, #7c3aed 100%)` — used for hero hooks, primary CTAs, gradient text.
`radial-gradient(circle at 50% 50%, #7c3aed44 0%, transparent 60%)` — atmospheric stage-light glow.
`linear-gradient(180deg, #0a0a0a 0%, #2d1b4e 100%)` — used for slide depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Bricolage Grotesque"
- Body: "Space Grotesk"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 800 | 1.0 |
| Heading | 48px | 700 | 1.1 |
| Subheading | 28px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Asymmetric, off-axis layouts encouraged — feels like album cover composition
- One focal element per slide — a track, a lyric, a release date, a vibe

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 340ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always stage black (#0a0a0a) — never lighter, never warmer
- Electric Pink is the signature — ONE big element per slide (hook, CTA, or stat)
- Tracklist-style numbered lists work great — big numbers in Electric Pink, titles in white
- Lyric quotes oversized (32px+) in italic serif — Pull from real songs when possible
- Release dates presented like events: "OUT NOW", "DROP DATE", "PRE-SAVE"
- Gradient text fills (clip-path or background-clip:text) on hooks and titles
- Body text in Pure White (#f4f4f4), never smaller than 22px
- Mood-driven, evocative copy: "the sound of", "out now", "felt this in my chest"
- Glow on key elements: box-shadow with Electric Pink at 0.2-0.35 opacity, blurred
- Tone: intimate, second-person, present-tense — "feel it", "press play", "lose yourself"
- Avoid stock music cliches (headphones, vinyl icons); let the typography carry the mood
