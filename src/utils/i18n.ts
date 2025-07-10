import { joinUrl } from "./url";
import { localizePath } from "astro-i18next";
import i18next from "i18next";
import TranslationKeys from "../../public/locales/hi/translation.json";

export const data = i18next.getDataByLanguage(i18next.language) ?? null;

if (!data)
  throw new Error(`Failed to load translation data for ${i18next.language}`);
export const t = data.translation as unknown as typeof TranslationKeys;

export function translatePath(path: string) {
  return joinUrl(import.meta.env.BASE_URL, localizePath(path));
}
