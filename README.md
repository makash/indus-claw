# IndusClaw

**An OpenClaw fork powered entirely by Indian LLMs.**

[OpenClaw](https://github.com/openclaw/openclaw) proved that open-source AI agents can rival proprietary ones. But it runs on Western models — Claude, GPT, DeepSeek. IndusClaw asks a different question: *what if India's own large language models were good enough to power an entire AI agent platform?*

We think they are. And we're going to prove it.

## The Thesis

India now has world-class LLMs. Sarvam-105B covers 22 languages with 128K context. Krutrim-2 does fast inference at 12B parameters. Hanooman generates video. AI4Bharat's IndicTrans2 translates across every scheduled language. These aren't toys — they're production-grade models built by IITs, government labs, and well-funded startups.

What India doesn't have is an AI agent platform that treats these models as first-class citizens. That's IndusClaw.

## What We're Building

A fork of OpenClaw where:

- The **default model** is an Indian LLM, not a fallback option buried in config
- **All 22 scheduled Indian languages** work natively — not as an afterthought bolted onto an English-first system
- **Voice-first interaction** is core, not optional — critical for a country where hundreds of millions use voice before text
- **WhatsApp is the primary channel** — because that's where India communicates
- The entire stack can run **on Indian infrastructure**, self-hosted, data-sovereign

OpenClaw's architecture is model-agnostic by design. Its Gateway routes to any LLM via a config file. We're not rebuilding that — we're tuning everything around it to work best with Indian models, Indian languages, and Indian users.

## Indian LLMs on Our Radar

| Model | Who | Parameters | Languages | Why It Matters |
|-------|-----|-----------|-----------|----------------|
| **Sarvam-105B** | Sarvam AI | 105B MoE | 22 Indian + EN | Government-backed under IndiaAI Mission. Open-source. 128K context. The strongest Indian LLM today. |
| **Sarvam-30B** | Sarvam AI | 30B MoE | 10+ Indian | Lighter. 32K context. Runs at the edge. |
| **Krutrim-2** | Ola AI | 12B dense | 22 Indian | Fast. 128K context. Built on Mistral-NeMo. |
| **Hanooman** | IIT Bombay + Jio | 1.5B–40B | 11 Indian | Multimodal — generates text, speech, and video. |
| **Airavata** | AI4Bharat / IIT Madras | Various | 22 Indian | IndicTrans2 translation. IndicNLP datasets. The ecosystem foundation. |
| **BharatGen** | CDAC + IndiaAI | Various | 22 Indian | Government supercomputing initiative. Param 2 hardware. |

No model is selected yet. IndusClaw will remain model-agnostic — but Indian models come first.

## Status

**Early days.** We have a [landing page](https://indusclaw.in) and a vision. The fork hasn't started yet.

What exists today:
- `website/` — Landing page at [indusclaw.in](https://indusclaw.in) (Astro 6, Cloudflare Workers, D1)
- `docs/adr/` — Architecture Decision Records for identity, design, tech stack, i18n, and LLM selection
- This README

What comes next:
- Fork OpenClaw
- Swap the default model provider to Sarvam-105B
- Add Indian language support to the agent runtime
- Build WhatsApp and Telegram integrations tuned for Indian usage patterns
- Voice-first interaction layer using Sarvam's STT/TTS
- Community contributions for all 22 language translations

## Help Translate

The website supports 11 Indian languages. Five have full translations. Six need native speakers:

- [Kannada (ಕನ್ನಡ)](https://github.com/makash/indus-claw/issues/1)
- [Malayalam (മലയാളം)](https://github.com/makash/indus-claw/issues/2)
- [Marathi (मराठी)](https://github.com/makash/indus-claw/issues/3)
- [Gujarati (ગુજરાતી)](https://github.com/makash/indus-claw/issues/4)
- [Punjabi (ਪੰਜਾਬੀ)](https://github.com/makash/indus-claw/issues/5)
- [Odia (ଓଡ଼ିଆ)](https://github.com/makash/indus-claw/issues/6)

## Contributing

We welcome contributions. Fork, branch, PR. See the open issues.

## Related

- [OpenClaw](https://github.com/openclaw/openclaw) — The upstream project we're forking
- [Sarvam AI](https://www.sarvam.ai/) — India's sovereign AI lab
- [AI4Bharat](https://ai4bharat.iitm.ac.in/) — IIT Madras Indian language AI initiative
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) — Machine translation for 22 Indian languages

## License

MIT. See [LICENSE](LICENSE).

---

[indusclaw.in](https://indusclaw.in) · Built for Bharat.
