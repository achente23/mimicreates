// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — edit it in src/config.ts (SITE_URL), not here.
  site: SITE_URL,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Blog drafts and the thank-you page are excluded from the sitemap.
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
