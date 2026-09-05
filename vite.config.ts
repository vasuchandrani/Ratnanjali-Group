import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: process.env.NITRO_PRESET || "vercel",
    }),
    react(),
  ],
});
