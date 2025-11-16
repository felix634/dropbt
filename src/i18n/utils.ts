// src/i18n/utils.ts

import english from '../../public/locales/en.json';
import german from '../../public/locales/de.json';
import hungarian from '../../public/locales/hu.json';

// Supported languages
export const languages = {
  en: 'English',
  de: 'Deutsch',
  hu: 'Magyar',
};

// Default language
export const defaultLang = 'en';

// Maps language codes to translation files
const translations = {
  en: english,
  de: german,
  hu: hungarian,
};

/**
 * Gets the language code from the URL path.
 * @param url The Astro URL object.
 * @returns The determined language code ('en', 'de', or 'hu').
 */
export function getLangFromUrl(url: URL) {
  const parts = url.pathname.split('/');
  
  // Check if the second part of the path is a supported language code (e.g., /en/ or /de/)
  if (parts.length > 1 && parts[1] in languages) {
    return parts[1] as keyof typeof languages;
  }
  
  // Default to 'en' if no valid language is found in the path
  return defaultLang;
}

/**
 * Provides a translation function for a given language.
 * @param lang The language code ('en', 'de', or 'hu').
 * @returns A function (t) that takes a key (like 'header.home') and returns the translated string.
 */
export function useTranslations(lang: keyof typeof languages) {
  // Define the translation function
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[lang];

    // Traverse the JSON object using the dot-separated key
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback for missing key in the JSON structure
        return `[MISSING_TRANSLATION:${key}]`;
      }
    }
    return String(value);
  };
  return t;
}