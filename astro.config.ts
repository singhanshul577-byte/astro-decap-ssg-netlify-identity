import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // Ye line sahi hai ab

const config: AstroUserConfig = defineConfig({
  site: "http://www.example.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(), // Ye Astro ka integration function hai
  ],
});

export default defineConfig(config);
