import { languages, translations, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  // Fall back to English for languages without full translations yet
  if (lang in translations) return translations[lang as keyof typeof translations];
  return translations.en;
}
