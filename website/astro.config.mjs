// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://indusclaw.in',

  i18n: {
    locales: ['en', 'hi', 'ta', 'te', 'bn', 'kn', 'ml', 'mr', 'gu', 'pa', 'or'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      hi: 'en',
      ta: 'en',
      te: 'en',
      bn: 'en',
      kn: 'en',
      ml: 'en',
      mr: 'en',
      gu: 'en',
      pa: 'en',
      or: 'en',
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'DM Serif Display',
      cssVariable: '--font-display',
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Outfit',
      cssVariable: '--font-sans',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Devanagari',
      cssVariable: '--font-devanagari',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['devanagari'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Tamil',
      cssVariable: '--font-tamil',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['tamil'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Telugu',
      cssVariable: '--font-telugu',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['telugu'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Bengali',
      cssVariable: '--font-bengali',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['bengali'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Kannada',
      cssVariable: '--font-kannada',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['kannada'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Malayalam',
      cssVariable: '--font-malayalam',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['malayalam'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Gujarati',
      cssVariable: '--font-gujarati',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['gujarati'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Gurmukhi',
      cssVariable: '--font-gurmukhi',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['gurmukhi'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Sans Oriya',
      cssVariable: '--font-oriya',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['oriya'],
    },
  ],

  output: 'static',
  adapter: cloudflare(),
});