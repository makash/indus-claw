# ADR-004: Internationalization Strategy

## Status
Accepted

## Context
IndusClaw targets the Indian market where 22 scheduled languages are spoken. The website must support multiple Indian languages from launch, starting with the most widely spoken ones.

## Decision

### Launch Languages
| Code | Language | Script | Font |
|------|----------|--------|------|
| `en` | English | Latin | Inter |
| `hi` | Hindi | Devanagari | Noto Sans Devanagari |
| `ta` | Tamil | Tamil | Noto Sans Tamil |
| `te` | Telugu | Telugu | Noto Sans Telugu |
| `bn` | Bengali | Bengali | Noto Sans Bengali |

### Routing
- English is the default locale (no prefix: `/`)
- Other languages use prefix: `/hi/`, `/ta/`, `/te/`, `/bn/`
- Fallback: all languages fall back to English

### Translation Approach
- Content is duplicated per locale in `src/pages/{locale}/`
- Shared UI strings via a `src/i18n/` translations module
- English is the source of truth; translations added progressively

### Future Expansion
- Kannada, Malayalam, Gujarati, Marathi, Punjabi, Odia planned
- All 22 scheduled languages eventually

## Consequences
- Users can access the site in their preferred language
- Fonts are only preloaded for the current locale (performance optimization)
- Content creation requires translation effort for each new language
