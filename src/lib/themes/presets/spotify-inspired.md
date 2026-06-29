# Design System: Spotify Inspired

> Category: Brand-Inspired
> Pitch-black canvas with one electric green pulse — bold, circular, streaming-music energy. High-contrast, big personality, friendly edges.

Source inspiration: contemporary audio-streaming platform visual language (circular motifs and high-contrast palette only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Electric Green** (`#1db954`): CSS var `--palette-bg-primary`. Used for: primary headings on dark, signature hooks, play-button energy.

### Secondary & Accent
- **Punch Lime** (`#1ed760`): CSS var `--palette-accent`. Used for: secondary CTAs, gradient highlights, active state.
- **Hot Coral** (`#f573a0`): CSS var `--palette-bg-secondary`. Used for: rare accent pops, "now playing" indicators.

### Surface & Background
- **True Black** (`#121212`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Elevated Black** (`#181818`): CSS var `--palette-bg-surface`. Used for: inset cards, playlist-style panels, code blocks.

### Neutrals & Text
- **Pure White** (`#ffffff`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Muted Gray** (`#b3b3b3`): Used for: captions, secondary metadata, fine print.

### Gradient System
`linear-gradient(135deg, #1db954 0%, #1ed760 100%)` — used for hook text and primary CTA fills.
`linear-gradient(180deg, #121212 0%, #181818 100%)` — used for elevated panel backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Outfit"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 84px | 800 | 1.0 |
| Heading | 48px | 700 | 1.1 |
| Subheading | 28px | 600 | 1.3 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always true black (#121212) — never pure #000, never lighter
- Electric Green is the signature: use it for ONE big element per slide (hook, number, or CTA)
- Circular shapes welcome — play with circles, pills, rounded badges for the audio motif
- Body text in pure white (#ffffff) at 22px+ — never smaller
- Cards use #181818 elevated surface with subtle 1px #282828 border
- Hot Coral appears MAX once across the entire carousel (single dramatic accent)
- Numbers/stats oversized (60px+) in Electric Green, optionally with a circular gradient halo
- Bold weight (700-800) for headings — medium feels too quiet for this aesthetic
