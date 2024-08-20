import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import path from "path";

export default defineConfig({
  base: "/dronefest-2024/",
  plugins: [
    react(),
    svgr(),
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
      exclude: [
        "Channel_1.png", "Channel_2.png", "Channel_3.png", "Channel_4.png", "Channel_5.png",
        "channels/Channel_1.png", "channels/Channel_2.png", "channels/Channel_3.png", "channels/Channel_4.png", "channels/Channel_5.png",
        "public/channels/Channel_1.png", "public/channels/Channel_2.png", "public/channels/Channel_3.png", "public/channels/Channel_4.png", "public/channels/Channel_5.png"
      ],
    }),
    VitePWA({
      registerType: "autoUpdate",

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
        globPatterns: [
          "**/*.{js,css,html,svg,png,ico,mp4,webm,avif,webp,jpg,jpeg,gif}",
          "/dronefest-2024/**/*.{js,css,html,svg,png,ico,mp4,webm,avif,webp,jpg,jpeg,gif}",
          "public/**/*.{js,css,html,svg,png,ico,mp4,webm,avif,webp,jpg,jpeg,gif}",
        ],
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
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
