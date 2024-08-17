import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,


      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "FPV Dronefest 2024",
        short_name: "FPV-Dronefest-2024",
        description: "FPV Dronefest 2024",
        theme_color: "#8300e9",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,mp4,webm,jpg,jpeg,gif}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,

        maximumFileSizeToCacheInBytes: 1024 * 1024 * 20,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
