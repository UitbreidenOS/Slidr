# Design System: Agentic Operator

> Category: Agentic
> Operator/ops aesthetic — blueprint grid on dark with blue-cyan accents. Technical, systematic, infrastructure-focused.

Source inspiration: "Claude MCP For Operators" / "Agent Skills Write Once" / Antigravity aesthetic

## 2. Color Palette & Roles

### Primary
- **Blue** (`#3b82f6`): CSS var `--palette-bg-primary`. Used for: headings, key terms, system labels.

### Secondary & Accent
- **Cyan** (`#22d3ee`): CSS var `--palette-accent`. Used for: CTAs, data flow indicators, active states.
- **Indigo** (`#6366f1`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary nodes.

### Surface & Background
- **Blueprint Dark** (`#0b0f1a`): CSS var `--palette-bg-background`. Used for: default slide background with subtle grid.
- **Panel Surface** (`#111827`): CSS var `--palette-bg-surface`. Used for: cards, terminal panels, data tables.

### Neutrals & Text
- **Blue-White** (`#e0e7ff`): CSS var `--palette-text`. Used for: body text.
- **Muted Slate** (`#64748b`): Used for: captions, secondary labels, grid lines.

### Gradient System
`linear-gradient(135deg, #0b0f1a 0%, #111827 50%, #1e1b4b 100%)` — technical depth.
`linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)` — data-flow gradient for connections and CTAs.

## 3. Typography Rules

### Font Family
- Heading: "IBM Plex Mono"
- Body: "Inter"
- Fallbacks: monospace / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 600 | 1.1 |
| Heading | 40px | 500 | 1.2 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.6 |
| Code/Label | 18px | 500 | 1.4 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Blueprint grid: 40px modules with 1px #1e293b lines

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 300ms

## 6. Design Rules
- Dark blueprint background with subtle grid overlay (1px lines at 40px intervals in #1e293b)
- IBM Plex Mono (monospace) for headings — technical, systematic, operator feel
- Blue for system headings and labels
- Cyan for ONE accent per slide (CTA, data flow arrow, or active node)
- Terminal/panel-style cards on #111827 surface with 1px blue borders
- Flow diagrams and connection lines are encouraged — show systems/data
- Numbers and metrics in cyan, oversized (56px+)
- Label-style text in monospace uppercase with letter-spacing (0.05em)
