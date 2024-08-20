import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import path from "path";

export default defineConfig({
  base: "/dronefest-2024/",
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["**/*"],

      pwaAssets: {
        disabled: false,
        config: true,
      },

      srcDir: "src",
      filename: "sw.ts",

      strategies: "injectManifest",

      manifest: {
        name: "FPV Dronefest 2024",
        short_name: "FPV DRONEFEST",
        description: "FPV Dronefest 2024",
        theme_color: "#8300e9",
        scope: "/dronefest-2024/",
        start_url: "/dronefest-2024/",
        display: "standalone",
        orientation: "portrait-primary",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 20,
      },

      injectManifest: {
        minify: false,
        enableWorkboxModulesLogs: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: false,
        type: "module",
      },
    }),
    ViteImageOptimizer({
      includePublic: true,
      avif: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
        progressive: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
      },
      png: {
        compressionLevel: 9,
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
