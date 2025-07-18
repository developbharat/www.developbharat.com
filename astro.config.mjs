// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { i18n } from "astro-i18n-aut/integration";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://developbharat.github.io",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  output: "static",
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
    alpinejs({ entrypoint: "/src/plugins/alpine" }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
