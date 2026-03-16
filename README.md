# IndusClaw — Open-Source AI Agents, Made in India

[![License: MIT](https://img.shields.io/badge/License-MIT-C2452D.svg)](LICENSE)
[![Astro 6](https://img.shields.io/badge/Astro-6.0-1F3A6E.svg)](https://astro.build)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020.svg)](https://workers.cloudflare.com)

**IndusClaw** is an India-centric fork of [OpenClaw](https://github.com/openclaw/openclaw), the open-source personal AI agent framework. We are building a platform that puts Indian language models and Indian developer needs first.

> India's open-source AI agent platform — built with Indian LLMs, supporting all 22 scheduled Indian languages, and optimized for Indian developers and enterprises.

## Why IndusClaw?

India has 1.4 billion people speaking 22 officially recognized languages across 13 distinct scripts. Existing AI agent platforms default to English-first, Western LLM providers, and US-centric messaging integrations. IndusClaw changes that.

- **Indian LLM-first** — designed to work natively with models like Sarvam-105B, Krutrim-2, Hanooman, and AI4Bharat
- **22 scheduled Indian languages** supported out of the box — Hindi, Tamil, Telugu, Bengali, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia, and more
- **Model-agnostic architecture** — plug in any LLM provider (Sarvam AI, Ola Krutrim, OpenAI, Anthropic, or self-hosted)
- **Voice-first interactions** — critical for India's diverse literacy levels, powered by Sarvam's multilingual speech-to-text and text-to-speech
- **WhatsApp and Telegram native** — India's dominant messaging platforms, plus JioChat, Signal, and 50+ integrations via OpenClaw
- **Self-hosted and privacy-respecting** — your data stays on your infrastructure, fully open-source under MIT license
- **Cloudflare edge-deployed** — low-latency serving across India via Cloudflare's network

## Indian LLMs We're Exploring

IndusClaw is model-agnostic. Here are the Indian-origin large language models on our radar:

| Model | Organization | Parameters | Languages | Notes |
|-------|-------------|------------|-----------|-------|
| **Sarvam-105B** | Sarvam AI | 105B MoE | 22 Indian + English | Government-backed (IndiaAI Mission), open-source, 128K context |
| **Sarvam-30B** | Sarvam AI | 30B MoE | 10+ Indian | Lighter model, 32K context, edge-friendly |
| **Krutrim-2** | Ola AI | 12B dense | 22 Indian | Fast inference, 128K context, Mistral-NeMo architecture |
| **Hanooman** | IIT Bombay + Reliance Jio | 1.5B–40B | 11 Indian | Multimodal: text, speech, and video generation |
| **Airavata** | AI4Bharat / IIT Madras | Various | 22 Indian | NLP tooling, IndicTrans2 machine translation |
| **BharatGen** | CDAC + IndiaAI | Various | 22 Indian | Government supercomputing initiative |

> Early days — no model selection finalized. IndusClaw will support any LLM provider.

## Tech Stack

- **[Astro 6](https://astro.build)** — static-first framework with server-side rendering
- **[Cloudflare Workers](https://workers.cloudflare.com)** — edge-deployed globally with low latency across India
- **[Cloudflare D1](https://developers.cloudflare.com/d1/)** — SQLite database at the edge
- **[Cloudflare Pages](https://pages.cloudflare.com)** — static asset hosting with automatic CDN
- **Built-in i18n** — Astro 6 internationalization for 11 Indian languages
- **Indic fonts** — Self-hosted Noto Sans fonts for Devanagari, Tamil, Telugu, Bengali, Kannada, Malayalam, Gujarati, Gurmukhi, and Oriya scripts via Astro's Fonts API

## Getting Started

### Prerequisites

- Node.js 22.12.0 or later
- npm 10+

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Cloudflare Deployment

```bash
# Create D1 database
wrangler d1 create indusclaw-db

# Update wrangler.jsonc with the database_id from above

# Run schema migration
wrangler d1 execute indusclaw-db --file=./db/schema.sql

# Deploy to Cloudflare
npm run build && wrangler deploy
```

## Project Structure

```
indus-claw/
├── astro.config.mjs           # Astro 6 + Cloudflare + i18n + Indic fonts
├── wrangler.jsonc             # Cloudflare Workers config with D1 binding
├── db/schema.sql              # D1 database schema
├── docs/adr/                  # Architecture Decision Records
│   ├── 001-project-identity.md
│   ├── 002-design-system.md
│   ├── 003-tech-stack.md
│   ├── 004-i18n-strategy.md
│   └── 005-indian-llms.md
├── src/
│   ├── components/            # Astro components
│   │   ├── LLMTable.astro     # Indian LLM comparison table
│   │   └── SignupForm.astro   # Email signup with D1 backend
│   ├── i18n/                  # Internationalization
│   │   ├── translations.ts   # Translations for en, hi, ta, te, bn
│   │   └── utils.ts          # i18n helpers
│   ├── layouts/Layout.astro   # Base layout with Harappan design system
│   └── pages/
│       ├── index.astro        # English landing page
│       ├── api/signup.ts      # Cloudflare Worker API → D1
│       ├── hi/index.astro     # Hindi (हिन्दी)
│       ├── ta/index.astro     # Tamil (தமிழ்)
│       ├── te/index.astro     # Telugu (తెలుగు)
│       └── bn/index.astro     # Bengali (বাংলা)
└── public/                    # Static assets
```

## Design System

IndusClaw uses a design system inspired by the **Indus Valley / Harappan civilization** — one of the world's earliest urban civilizations, known for its precision engineering, grid-city planning, and standardized systems.

| Token | Color | Hex | Inspiration |
|-------|-------|-----|-------------|
| Background | Indus Cream | `#F5E6CC` | Limestone plaster, unfired clay |
| Text | Deep Charcoal | `#2C2C2C` | Fired seal surfaces |
| Accent | Terracotta Red | `#C2452D` | Baked brick, pottery |
| Secondary | Lapis Blue | `#1F3A6E` | Lapis lazuli from Badakhshan |
| Muted | Steatite Grey | `#708090` | Soapstone seal carvings |

Visual motifs include the Harappan grid-city plan (background pattern), seal frames (logo container), and stepped battlements (section dividers).

## Supported Languages

| Language | Code | Script | Status |
|----------|------|--------|--------|
| English | `en` | Latin | Full |
| Hindi | `hi` | Devanagari | Full |
| Tamil | `ta` | Tamil | Full |
| Telugu | `te` | Telugu | Full |
| Bengali | `bn` | Bengali | Full |
| Kannada | `kn` | Kannada | Fallback to English |
| Malayalam | `ml` | Malayalam | Fallback to English |
| Marathi | `mr` | Devanagari | Fallback to English |
| Gujarati | `gu` | Gujarati | Fallback to English |
| Punjabi | `pa` | Gurmukhi | Fallback to English |
| Odia | `or` | Oriya | Fallback to English |

Translations are community-driven. Contributions welcome for all 22 scheduled Indian languages.

## Contributing

We welcome contributions from Indian developers and the global open-source community.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to the branch
5. Open a pull request

Translation contributions are especially valued — help us reach all 22 scheduled Indian languages.

## Related Projects

- [OpenClaw](https://github.com/openclaw/openclaw) — The open-source AI agent framework IndusClaw is forked from
- [Sarvam AI](https://www.sarvam.ai/) — India's sovereign AI lab, building open-source Indian LLMs
- [AI4Bharat](https://ai4bharat.iitm.ac.in/) — IIT Madras initiative for Indian language AI
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) — Machine translation for all 22 scheduled Indian languages

## License

MIT License. See [LICENSE](LICENSE) for details.

---

**IndusClaw** — Open-Source AI Agents, Made in India. Built for Bharat.

[Website](https://indusclaw.in) · [GitHub](https://github.com/makash/indus-claw)
