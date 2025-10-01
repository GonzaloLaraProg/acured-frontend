// vite.config.ts
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/acured/",   // 👈 Importante para cPanel subcarpeta
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
