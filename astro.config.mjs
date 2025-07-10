// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://www.developbharat.com",
  // base: "/website",
  // i18n: {
  //   locales: ["hi", "en"],
  //   defaultLocale: "hi",
  //   routing: {
  //     prefixDefaultLocale: true,
  //   },
  // },
  integrations: [mdx(), sitemap(), astroI18next()],
  vite: {
    plugins: [tailwindcss()],
  },
});
