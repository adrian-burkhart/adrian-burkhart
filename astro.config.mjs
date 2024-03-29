import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import sitemap from "@astrojs/sitemap"

// https://astro.build/config

// https://astro.build/config
import mdx from "@astrojs/mdx"

// https://astro.build/config
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  site: "https://adrian-burkhart.de",
  integrations: [react(), tailwind(), sitemap(), mdx(), prefetch()],
})
