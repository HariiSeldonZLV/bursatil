import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// Base apunta a tu repo en GitHub Pages
export default defineConfig({
  base: "/bursatil/",   // importante para GH Pages
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})