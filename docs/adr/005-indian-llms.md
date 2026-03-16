# ADR-005: Indian LLM Landscape (Early Exploration)

## Status
Draft — No model selection yet. This documents the landscape for reference.

## Context
IndusClaw aims to be an OpenClaw fork optimized for Indian LLMs. This ADR tracks the Indian LLM landscape as of March 2026.

## Indian LLM Models Under Consideration

| Model | Organization | Parameters | Languages | Context | Notes |
|-------|-------------|------------|-----------|---------|-------|
| Sarvam-105B | Sarvam AI | 105B MoE (~9B active) | 22 Indian + English | 128K | Govt-backed (IndiaAI Mission), open-source |
| Sarvam-30B | Sarvam AI | 30B MoE (~1B active) | 10+ Indian | 32K | Lighter option for edge/mobile |
| Krutrim-2 | Ola AI | 12B dense | 22 Indian | 128K | Fast inference, Mistral-NeMo architecture |
| Hanooman | IIT Bombay + Jio | 1.5B–40B | 11 Indian | — | Multimodal (text, speech, video) |
| Airavata | AI4Bharat (IIT Madras) | Various | 22 Indian | — | NLP tooling, translation (IndicTrans2) |
| BharatGen / Param 2 | CDAC + IndiaAI | Various | 22 Indian | — | Government supercomputing initiative |

## Key Capabilities Needed
- **Multilingual text generation** across Indian languages
- **Code generation** in Indian developer contexts
- **Speech-to-text / Text-to-speech** for voice-first interactions
- **Document understanding** for Indic scripts

## Decision
No model selection at this stage. IndusClaw will be model-agnostic like OpenClaw, with the ability to configure any provider. The above models represent the exploration space.

## Consequences
- The landing page will present this table as "models we're exploring"
- Architecture must remain model-agnostic (provider configuration, not hard-coding)
- Community input will inform final model selection
