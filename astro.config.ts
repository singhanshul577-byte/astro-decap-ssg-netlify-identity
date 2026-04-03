import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const config: AstroUserConfig = defineConfig({
  site: "http://www.example.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  // YEH WALA HISSA ADD KAREIN
  vite: {
    resolve: {
      alias: {
        'react-dom/client': 'react-dom/client',
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
});

export default defineConfig(config);

import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const config: AstroUserConfig = defineConfig({
  site: "http://www.example.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  // YE WALA HISSA ZAROOR DAALEIN
  vite: {
    resolve: {
      alias: {
        'react-dom/client': 'react-dom/client',
        'react': 'react',
        'react-dom': 'react-dom'
      },
    },
  },
});

export default defineConfig(config);
