# ADR-002: Design System — Harappan Minimalism

## Status
Accepted

## Context
The landing page and all future UI needs a cohesive design system that reflects IndusClaw's Indian identity while remaining modern and developer-friendly.

## Decision

### Color Palette (Harappan-inspired)

| Token | Name | Hex | Use |
|-------|------|-----|-----|
| `--color-bg` | Indus Cream | `#F5E6CC` | Page background |
| `--color-text` | Deep Charcoal | `#2C2C2C` | Primary text |
| `--color-accent` | Terracotta Red | `#C2452D` | CTAs, links, highlights |
| `--color-secondary` | Lapis Blue | `#1F3A6E` | Code blocks, secondary actions |
| `--color-muted` | Steatite Grey | `#708090` | Borders, secondary text |
| `--color-surface` | Warm White | `#FAF5EE` | Cards, elevated surfaces |
| `--color-accent-dark` | Burnt Sienna | `#A0522D` | Hover states |

### Visual Motifs
1. **Grid-City Pattern** — Abstracted Mohenjo-daro grid as subtle background SVG
2. **Seal Frame** — Square container with thin border for logo/feature cards
3. **Weight System** — Progressive sizing following binary ratios (1, 2, 4, 8)
4. **Stepped Battlement** — Crenellation pattern as section dividers

### Typography
- **Headings**: Space Grotesk (geometric, mono-width feel, Harappan precision)
- **Body**: Inter (clean, readable)
- **Indic scripts**: Noto Sans family (Devanagari, Tamil, Telugu, Bengali)
- **Code**: JetBrains Mono

## Consequences
- Earthy, warm palette distinguishes IndusClaw from typical dark-mode dev tools
- Harappan motifs provide cultural depth without kitsch
- Noto Sans family ensures proper rendering across all target Indian scripts
