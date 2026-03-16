# ADR-003: Tech Stack — Astro 6 on Cloudflare

## Status
Accepted

## Context
We need a modern, fast, SEO-friendly website for indusclaw.in. The site starts as a coming-soon landing page and will grow to include docs, blog, and community features.

## Decision

### Frontend Framework
- **Astro 6** (v6.0.4+) — static-first with server-side rendering capability
- Node 22+ required

### Hosting
- **Cloudflare Pages** via `@astrojs/cloudflare` adapter
- Edge-deployed for low latency across India
- Access to Cloudflare KV, D1, R2 if needed later

### Key Astro 6 Features Used
- **Fonts API** — Self-hosted Indic fonts with automatic optimization
- **CSP** — Content Security Policy from day one
- **i18n routing** — Built-in internationalization for en, hi, ta, te, bn
- **Live Content Collections** — For future blog/docs content

### Styling
- Vanilla CSS with CSS custom properties (no framework needed for landing page)
- CSS custom properties for design tokens

### Form Handling
- **Tally.so** — Headless API integration for email collection (custom form UI, POST to Tally API)
- Honeypot field for spam protection

## Consequences
- Astro 6 provides excellent performance with zero JS by default
- Cloudflare edge deployment serves Indian users with low latency
- i18n support enables multilingual content from the start
- No CSS framework dependency keeps the bundle minimal
