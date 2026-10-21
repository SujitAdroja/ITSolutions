// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://echoeleganceltd.uk",
  trailingSlash: "never",

  // CSS bundle is ~9KB gzipped: inlining it removes a render-blocking request on first paint
  build: {
    inlineStylesheets: "always",
  },

  // Self-host Inter: fetched once at build, served from our origin, preloaded via <Font />
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600, 700, 800],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
      fallbacks: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});