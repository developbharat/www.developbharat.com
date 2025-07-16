import { createInstance } from "i18next";
import Backend from "i18next-fs-backend";
import type TranslationKeys from "../../public/locales/hi/translation.json";
import { joinUrl } from "./url";
import { join } from "path";
import { getLocale, defaultLocale, locales } from "astro-i18n-aut";

// Cache i18n instances by locale
const instances = new Map<string, any>();

// Initialize i18next instance for a specific locale
async function initI18n(locale: string = defaultLocale) {
  const instance = createInstance();

  await instance.use(Backend).init({
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: Object.keys(locales),
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: { escapeValue: false },
  });

  return instance;
}

// Get translations data for current language
async function getTranslations(locale: string = defaultLocale) {
  if (!instances.has(locale)) {
    instances.set(locale, await initI18n(locale));
  }

  const instance = instances.get(locale);
  return {
    data: instance.store.data[locale] ?? null,
    instance,
  };
}

// Typed translation function
export async function useT(locale: string): Promise<typeof TranslationKeys> {
  const { data } = await getTranslations(locale);
  if (!data) {
    throw new Error(`Failed to load translations for ${locale}`);
  }
  return data.translation;
}

// Path translation utility
export function useTranslatePath(locale: string = defaultLocale) {
  return function translatePath(path: string) {
    const localizedPath = join(locale === defaultLocale ? "/" : locale, path);
    return joinUrl(import.meta.env.BASE_URL, localizedPath);
  };
}
