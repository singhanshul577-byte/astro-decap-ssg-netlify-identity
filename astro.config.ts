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
  // YEH WALA BLOCK VITE KO DIRECT KAREGA
  vite: {
    resolve: {
      alias: {
        'react-dom/client': 'react-dom/client',
        'react': 'react',
        'react-dom': 'react-dom'
      },
    },
    build: {
      rollupOptions: {
        // Agar zaroorat pade toh yahan modules externalize kiye ja sakte hain
      }
    }
  },
});

export default defineConfig(config);
