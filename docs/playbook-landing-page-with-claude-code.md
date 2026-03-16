# Playbook: Building a Landing Page with Claude Code

Patterns and lessons from building a multilingual landing page in a single session — from empty repo to deployed site. Everything here is reusable across projects.

---

## Phase 1: Research Before Code

**Pattern**: Spawn research agents before writing any code. They return structured context you can act on immediately.

**How**:
```
Spawn a researcher agent with a clear brief:
"Research X, Y, and Z. Return a structured summary covering..."
```

**What to research**:
- The product/project you're building on top of (architecture, API surface, extension points)
- Competing implementations or reference sites you want to learn from
- The framework you're building with (latest features, breaking changes, deployment options)

**Why it works**: Research agents can fetch live docs, crawl sites, and synthesize findings in parallel while you think about architecture. A 3-minute agent run replaces 30 minutes of tab-switching.

**Antipattern**: Researching and coding at the same time. You'll make decisions based on incomplete context, then backtrack.

---

## Phase 2: Decisions Before Implementation

**Pattern**: Write ADRs (Architecture Decision Records) after the brainstorm, before the code.

**What to decide upfront**:
- **Identity** — name, domain, positioning, tone of voice
- **Design direction** — color palette, typography choices, visual motifs
- **Tech stack** — framework, hosting, database, CSS approach
- **i18n strategy** — which languages, routing scheme, font loading
- **Content model** — what data lives where, what's static vs. dynamic

**Why it works**: When you inevitably redesign something mid-build (you will), ADRs tell you which decisions are load-bearing (keep) vs. aesthetic (evolve). Without them, a redesign becomes a rewrite.

**Format**: Keep it simple — Status, Context, Decision, Consequences. One page per decision.

---

## Phase 3: Scaffold and Ship Ugly

**Pattern**: Get a working, deployed site before making it pretty.

**Order of operations**:
1. Scaffold the framework (`npm create astro@latest`)
2. Configure hosting adapter (Cloudflare, Vercel, Netlify)
3. Set up i18n routing if multilingual
4. Create a minimal page that renders
5. Deploy it
6. *Then* make it look good

**Why it works**: Deployment problems (DNS, adapters, build config) are easier to debug with a simple page. If you build a beautiful page that won't deploy, you've wasted the design work.

---

## Phase 4: Design Skill for Visual Quality

**Pattern**: Use the frontend design skill (`/compound-engineering:frontend-design`) when the first version looks generic.

**What the skill does that you won't do yourself**:
- Forces you to name a specific aesthetic direction (not just "make it look nice")
- Bans overused fonts (Inter, Roboto, Space Grotesk, system fonts)
- Demands a dominant accent color, not evenly distributed pastels
- Pushes for atmosphere (texture, grain, glow, depth) over flat surfaces
- Requires motion with intent (orchestrated page load reveals > scattered hover effects)

**The unlock**: You don't need to be a designer. You need to commit to a direction and execute it consistently. The skill forces the commitment.

**Specific techniques that elevated our site**:
- **Film grain overlay**: An SVG noise texture at 3-5% opacity, `position: fixed`, `pointer-events: none`. Two lines of CSS, massive atmosphere.
- **Scroll reveals**: `IntersectionObserver` + CSS transitions with `animation-delay` classes (`.reveal-delay-1`, `.reveal-delay-2`). Content fades in as you scroll. ~15 lines of JS.
- **Radial glow**: A `div` with `radial-gradient` + `filter: blur(80px)` positioned behind the hero element. Costs nothing, adds depth.
- **Combined input + button**: Email input and submit button in a single bordered container instead of separate elements. Feels more polished, saves vertical space.

---

## Phase 5: i18n — Get the Architecture Right Early

**Pattern**: Separate translated content from untranslated locales at the `<html lang>` level.

**The bug we hit**: Pages with `<html lang="kn">` (Kannada) but English content got Kannada fonts applied to English text via CSS `:lang(kn)` selectors. The text looked huge and wrong.

**The fix**:
```typescript
const hasTranslation = translatedLocales.has(lang);
const effectiveLang = hasTranslation ? lang : 'en';
// ...
<html lang={effectiveLang}>
```

**Rules for partial i18n**:
1. Track which locales have real translations (a `Set` or similar)
2. Set `<html lang>` to the *content language*, not the *URL locale*
3. Only preload Indic/non-Latin fonts when the locale has actual translated content
4. Create explicit page files for every locale — don't rely on framework fallback to generate them
5. Show untranslated locales in the language switcher as "help translate" links, not as working pages

**The shared component pattern**: Extract all page content into one component (`LandingContent.astro`). Each locale page becomes a 10-line wrapper. Fixes in the component fix every locale at once.

---

## Phase 6: Copy That Converts

**Pattern**: Use the BAB framework (Before → After → Bridge) for landing page copy. Maintain a you:we ratio of at least 3:1.

**BAB in practice**:
- **Before**: "Every AI agent defaults to Western models. Your languages are an afterthought."
- **After**: "Talk to your AI in any of 22 languages natively. Voice-first. On WhatsApp."
- **Bridge**: "IndusClaw — the OpenClaw fork that puts Indian models first."

**Copy rules that worked**:
| Instead of | Write |
|---|---|
| "Coming Soon" | "Open Source · Early Access" (active, not waiting) |
| "What is [Product]?" | "The Problem" (reader cares about their problem, not your product) |
| "We're exploring" | "Ready for your agent" (confidence, not uncertainty) |
| Feature list (capabilities) | Outcome list (what you can do) |
| "Be the first to know" | "You'll hear from us before anyone else" (exclusive, specific) |

**Measuring it**: Count "you/your" vs "we/our/us" in your copy. If the ratio is below 3:1, rewrite. Our final copy was 6.3:1.

---

## Phase 7: Test Agents as QA

**Pattern**: After the build is done, spawn test agents to check every permutation you won't manually click through.

**What to test with agents**:
- Every locale/language URL returns real content (not empty or broken)
- Meta tags (`og:title`, `og:url`, `lang` attribute) are correct per page
- CSS states work correctly (`hidden` not overridden by `display: flex`, hover states, active states)
- Links and anchors resolve to real elements
- Form submissions hit the right endpoint
- Font loading doesn't apply wrong fonts to wrong content

**How to structure the test agent prompt**:
```
Test these N URLs. For each URL, check:
1. [specific thing to verify]
2. [specific thing to verify]
...
Report a table of findings per URL. Be specific about which pages have issues.
```

**Why agents beat manual QA**: A human will check the homepage and maybe one other language. An agent will check all 11 locales against 8 criteria systematically. The bugs that slip through are always in the permutations you didn't test.

---

## Phase 8: Deploy Pipeline

**Pattern**: Keep deployment as a single command sequence, credentials in `pass`.

```bash
# Store credentials once
echo 'your-token' | pass insert -e service/project-token

# Build + deploy (repeatable)
cd website && npm run build
CLOUDFLARE_API_TOKEN=$(pass show service/project-token) npx wrangler deploy
```

**Why `pass`**: GPG-encrypted, CLI-native, works in scripts, no `.env` files to accidentally commit. Set it up once with `pass init your@email.com`.

---

## Checklist: Landing Page in One Session

- [ ] Spawn research agents for project context, reference sites, and framework docs
- [ ] Write ADRs for identity, design, tech stack, i18n, and content model
- [ ] Scaffold framework and deploy a minimal page first
- [ ] Set up i18n routing and font loading for all target languages
- [ ] Build v1 with placeholder content
- [ ] Run frontend design skill to level up the visual quality
- [ ] Extract shared components before duplicating across pages
- [ ] Apply BAB copy framework with 3:1+ you:we ratio
- [ ] Store credentials with `pass`, not `.env`
- [ ] Spawn test agents to check every locale/permutation
- [ ] Fix bugs, rebuild, redeploy
- [ ] Create GitHub issues for community contributions (translations, etc.)
- [ ] Commit and push with descriptive messages
