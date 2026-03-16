# IndusClaw

**Your AI agent should speak your language. All 22 of them.**

[OpenClaw](https://github.com/openclaw/openclaw) has 60,000+ stars and proved that open-source AI agents can rival proprietary ones. But it runs on Claude, GPT, and DeepSeek — Western models that treat Indian languages as an afterthought.

India now has production-grade LLMs. Someone needs to fork OpenClaw and build on top of those. That's what IndusClaw is for.

> **[Star this repo](https://github.com/makash/indus-claw)** if you think Indian LLMs deserve a real agent platform

> **[Help build this](https://indusclaw.in#early-access)** — leave your email, we'll reach out when it's time to ship

> **[Help translate](https://github.com/makash/indus-claw/issues)** — 6 languages still need native speakers

---

## Why This Needs to Exist

Sarvam-105B has 128K context across 22 languages. Krutrim-2 does fast inference at 12B parameters. Hanooman generates video. AI4Bharat's IndicTrans2 translates across every scheduled language.

The models are here. What's missing is an AI agent platform that treats them as first-class citizens — not a fallback option buried in a config file.

## What We Want to Build

A fork of OpenClaw where:

- **Indian LLMs are the default** — Sarvam, Krutrim, or Hanooman out of the box, not something you swap in after setup
- **All 22 scheduled languages work natively** — your agent understands Hindi, Tamil, Telugu, Bengali, and 18 more without bolting on a translation layer
- **Voice comes first** — critical when hundreds of millions of users speak before they type
- **WhatsApp is the primary channel** — because that's where India actually communicates
- **Data stays sovereign** — self-hostable on Indian infrastructure, nothing leaves unless you decide it should
- **You pick the model** — start with Indian LLMs, plug in OpenAI or Anthropic when you need them

OpenClaw's architecture is already model-agnostic. Its Gateway routes to any LLM via a config file. IndusClaw doesn't rebuild that — it tunes everything around it to work best with Indian models, Indian languages, and Indian users.

## Indian LLMs We Want to Power This

| Model | Who | Parameters | Languages | Why It Matters |
|---|---|---|---|---|
| **Sarvam-105B** | Sarvam AI | 105B MoE | 22 Indian + EN | Government-backed under IndiaAI Mission. Open-source. 128K context. The strongest Indian LLM today. |
| **Sarvam-30B** | Sarvam AI | 30B MoE | 10+ Indian | Lighter. 32K context. Runs at the edge. |
| **Krutrim-2** | Ola AI | 12B dense | 22 Indian | Fast. 128K context. Built on Mistral-NeMo. |
| **Hanooman** | IIT Bombay + Jio | 1.5B–40B | 11 Indian | Multimodal — generates text, speech, and video. |
| **Airavata** | AI4Bharat / IIT Madras | Various | 22 Indian | IndicTrans2 translation. IndicNLP datasets. The ecosystem foundation. |
| **BharatGen** | CDAC + IndiaAI | Various | 22 Indian | Government supercomputing initiative. Param 2 hardware. |

No model is locked in yet. The community decides what runs under the hood.

## Where Things Stand

**This is day zero.** No fork exists yet. No agent code has been written. What exists is a thesis, a website, and open GitHub issues.

What's here today:
- `website/` — Landing page at [indusclaw.in](https://indusclaw.in)
- `docs/adr/` — Architecture Decision Records covering identity, design, tech stack, i18n, and LLM selection
- This README

What needs to happen:
1. Fork OpenClaw
2. Swap the default model provider to an Indian LLM
3. Add Indian language support to the agent runtime
4. Build WhatsApp and Telegram integrations tuned for Indian usage patterns
5. Voice-first interaction layer using Indian STT/TTS
6. Community contributions for all 22 language translations

We need developers, translators, and people who know Indian LLMs to make this real.

## Help Translate

The website supports 11 Indian languages. Five have full translations. Six need native speakers:

- [Kannada (ಕನ್ನಡ)](https://github.com/makash/indus-claw/issues/1)
- [Malayalam (മലയാളം)](https://github.com/makash/indus-claw/issues/2)
- [Marathi (मराठी)](https://github.com/makash/indus-claw/issues/3)
- [Gujarati (ગુજરાતી)](https://github.com/makash/indus-claw/issues/4)
- [Punjabi (ਪੰਜਾਬੀ)](https://github.com/makash/indus-claw/issues/5)
- [Odia (ଓଡ଼ିଆ)](https://github.com/makash/indus-claw/issues/6)

If you speak one of these languages, your translation helps bring AI agents to millions of people in their own words.

## Get Involved

- **Star this repo** — it tells other developers something is happening here
- **[Leave your email](https://indusclaw.in#early-access)** — we'll reach out when it's time to build
- **[Translate the website](https://github.com/makash/indus-claw/issues)** — 6 languages need you
- **Fork, branch, PR** — check the open issues and jump in
- **Share this** — if you know someone building with Indian LLMs, send them here

## Related

- [OpenClaw](https://github.com/openclaw/openclaw) — The upstream project (60K+ stars)
- [Sarvam AI](https://www.sarvam.ai/) — India's sovereign AI lab
- [AI4Bharat](https://ai4bharat.iitm.ac.in/) — IIT Madras Indian language AI initiative
- [IndicTrans2](https://github.com/AI4Bharat/IndicTrans2) — Machine translation for 22 Indian languages

## License

MIT. See [LICENSE](LICENSE).

---

**[indusclaw.in](https://indusclaw.in)** · Open-source AI agents that speak your language.
