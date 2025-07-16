// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { i18n } from "astro-i18n-aut/integration";

// https://astro.build/config
export default defineConfig({
  site: "https://developbharat.github.io",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  output: "static",
  // base: "/www.developbharat.com/",
  // i18n: {
  //   locales: ["hi", "en"],
  //   defaultLocale: "hi",
  //   routing: {
  //     prefixDefaultLocale: false,
  //     redirectToDefaultLocale: true,
  //     fallbackType: "redirect",
  //   },
  // },
  integrations: [
    mdx(),
    sitemap(),
    i18n({
      locales: {
        hi: "hi",
        en: "en",
      },
      defaultLocale: "hi",
      redirectDefaultLocale: true,
      exclude: ["pages/rss.xml.js"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
