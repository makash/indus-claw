# How We Built the IndusClaw Website

A rundown of the skills, plugins, agents, prompts, and tools that took the website from scaffolding to a polished, deployed landing page in one session.

## The Starting Point

An empty repo with a CLAUDE.md config. The goal: a coming-soon landing page for IndusClaw at indusclaw.in — an India-centric fork of OpenClaw powered by Indian LLMs. The page needed to look distinctive (Harappan/Indus Valley inspired), support multiple Indian languages, and collect email signups.

## What Got Us There

### 1. Research Agents (Subagent: `researcher`)

Before writing a single line of code, we spawned research agents to gather context in parallel:

- **OpenClaw + Indian LLMs + Astro 6** — a single researcher agent returned structured findings on OpenClaw's architecture (model-agnostic Gateway, Pi Agent Engine), all major Indian LLMs (Sarvam, Krutrim, Hanooman, AI4Bharat, BharatGen), and Astro 6's new features (Fonts API, i18n, Cloudflare support). This informed every architectural decision that followed.
- **getbot.run Tally integration** — another researcher reverse-engineered how getbot.run does headless Tally form submission (custom HTML form POSTing to Tally's API with honeypot spam protection). We initially used this pattern before switching to our own D1 backend.
- **ccrank.dev footer** — a researcher fetched the exact footer structure (three rows: "by @makash", credits + links, social icons with UTM tracking) so we could replicate the pattern.

**Lesson**: Spawning research agents before coding saves massive time. They return structured findings you can act on immediately rather than context-switching to browse docs yourself.

### 2. The Frontend Design Skill (`/compound-engineering:frontend-design`)

The first version of the site was functional but generic — flat cream background, Space Grotesk + Inter (the two most overused developer fonts), basic cards, no motion. The user's feedback: "It looks rough and unpolished."

Invoking the frontend design skill triggered a complete aesthetic rethink:

**What the skill enforced:**
- Choose a BOLD aesthetic direction and commit to it (we went with "Excavated Artifact" — dark, warm, cinematic)
- Never use generic fonts (Space Grotesk and Inter were explicitly called out as too common)
- Typography should be distinctive — we switched to DM Serif Display (carved serif) + Outfit (geometric sans) + IBM Plex Mono
- Color must have a dominant accent with sharp contrast, not evenly distributed pastels
- Motion should focus on high-impact moments (scroll reveals with staggered delays) over scattered micro-interactions
- Add atmosphere — film grain overlay, radial glow effects, gradient meshes

**What we built from this direction:**
- Dark warm palette (`#110F0D` bg, `#E8603C` terracotta accent, `#C9A456` gold secondary)
- Film grain SVG overlay at 3.5% opacity
- Scroll-triggered `IntersectionObserver` reveals with staggered delays
- Floating Harappan seal SVG with pulse ring animation and 8-second float cycle
- Grid-city background pattern (SVG lines with radial gradient mask)
- Stepped battlement dividers between sections (Harappan crenellation pattern)
- Glowing CTA button with box-shadow accent glow
- Combined email input + submit button in a single bordered container

**Lesson**: The skill's main value isn't the specific CSS it suggests — it's forcing you out of default choices. The "never use Inter/Space Grotesk" rule alone changed the entire feel.

### 3. Test Agents (Subagent: `tester` + `Explore`)

After the redesign, two agents ran in parallel to catch bugs:

**Tester agent** — fetched all 11 locale URLs and checked:
- Page returns non-empty HTML (caught the 0-byte pages for kn/ml/mr/gu/pa/or)
- `lang` attribute correctness
- Whether content was actually translated or English fallback
- Font/content mismatch (Indic fonts applied to English text)
- Anchor links present
- Success div visibility bug
- `og:url` domain correctness

**Explore agent** — analyzed the i18n and font architecture to diagnose why fallback locale pages showed oversized text. Root cause: CSS `:lang(kn)` applied `font-family: var(--font-kannada)` to the page even when the content was English (no Kannada translations existed). The fix: render untranslated locales with `<html lang="en">` instead.

**Bugs caught by agents that a human reported first:**
- Green tick showing without email submission (CSS `display: flex` overriding `hidden` attribute)
- Punjabi page loading blank (missing page file)
- Indic fonts on English text for 6 locales

**Lesson**: Test agents catch the class of bugs you forget to look for. The font/content mismatch would have been hard to spot without systematically checking all 11 locales.

### 4. BAB Copywriting Framework (User-provided)

The user provided rewritten English copy using the BAB (Before → After → Bridge) framework in `website-en-copy.ts`:

**Key copy shifts:**
| Original | Rewritten |
|----------|-----------|
| "Coming Soon" badge | "Open Source · Early Access" |
| "Open-Source AI Agents, Made in India" | "Your AI Agent Should Speak All 22 of Your Languages" |
| "What is IndusClaw?" | "The Problem" |
| "Indian LLMs We're Exploring" | "Indian LLMs Ready for Your Agent" |
| "Be the first to know" | "You'll hear from us before anyone else" |
| Feature list (capabilities) | Outcomes with "you/your" framing |

You:We ratio went from ~1:1 to 6.3:1. The copy stopped describing the product and started addressing the reader.

**Lesson**: BAB framework + high you:we ratio transforms a feature-dump landing page into something that feels like it's speaking directly to you.

### 5. Cloudflare Stack (Wrangler + D1 + Workers)

- `npx astro add cloudflare` — added the Cloudflare adapter with one command
- `wrangler d1 create indusclaw-db` — created the edge database
- `wrangler d1 execute --remote --file=./db/schema.sql` — deployed the schema
- `wrangler deploy` — deployed the full site (static pages + API worker)
- `pass` — stored the Cloudflare API token securely via GPG-encrypted password store

The API route (`/api/signup`) is a Cloudflare Worker that validates email, checks a honeypot field, and inserts into D1 with `ON CONFLICT` upsert. Total: ~50 lines of TypeScript.

### 6. GitHub CLI (`gh`)

- `gh repo create makash/indus-claw --public` — created the repo with description and homepage
- `gh label create translations` — created labels for translation issues
- `gh issue create` (×6) — created translation-needed issues for Kannada, Malayalam, Marathi, Gujarati, Punjabi, and Odia with structured templates

### 7. Astro 6 Fonts API

The single biggest quality-of-life feature for this project. One config block per font:

```js
{
  provider: fontProviders.google(),
  name: 'DM Serif Display',
  cssVariable: '--font-display',
  weights: [400],
  styles: ['normal', 'italic'],
  subsets: ['latin'],
}
```

Astro downloads fonts at build time, self-hosts them, generates fallback font metrics (size-adjust, ascent-override), and preloads them. No FOUT, no external requests. We used this for 3 Latin fonts + 9 Indic script fonts.

### 8. Architecture Decision Records (ADRs)

Five ADRs written before coding:
- **001** Project Identity — name, domain, positioning, tone
- **002** Design System — Harappan color palette, typography, visual motifs
- **003** Tech Stack — Astro 6, Cloudflare, vanilla CSS
- **004** i18n Strategy — which languages, routing approach, font loading
- **005** Indian LLMs — landscape survey, model-agnostic commitment

These weren't bureaucracy — they were the brainstorm output crystallized into decisions. When we later redesigned the visual theme (from light cream to dark cinematic), the ADRs told us which design tokens to keep (Harappan motifs) and which to evolve (color values).

## What Worked Best

1. **Research first, code second** — parallel research agents front-loaded all the context we needed
2. **The design skill forced boldness** — without it, we'd have shipped a generic cream-on-white page
3. **Shared components eliminated duplication** — `LandingContent.astro` cut 560 lines and fixed 10 locale pages at once
4. **Test agents as QA** — caught 3 real bugs across 11 locale permutations
5. **BAB copy framework** — transformed the page from product-centric to reader-centric
6. **`effectiveLang` pattern** — one variable solved the font-on-wrong-content bug elegantly

## What We'd Do Differently

1. **Extract shared components earlier** — we duplicated hero styles across 4 locale pages before creating `LandingContent.astro`. Should have done this from the start.
2. **Create locale page files upfront** — the 6 missing locale pages caused blank pages in production. Astro's i18n fallback doesn't generate page files automatically.
3. **Test all locales before first deploy** — the font mismatch bug was visible from the first deploy but wasn't caught until a human clicked through languages.
4. **Use `effectiveLang` from day one** — the pattern of setting `<html lang="en">` for untranslated locales should be the default for any i18n project with partial translations.
