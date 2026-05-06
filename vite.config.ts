import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const BACKEND = "http://localhost:5000";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth":      { target: BACKEND, changeOrigin: true },
      "/ai":        { target: BACKEND, changeOrigin: true },
      "/interview": { target: BACKEND, changeOrigin: true },
      "/portfolio": { target: BACKEND, changeOrigin: true },
      "/chat":      { target: BACKEND, changeOrigin: true },
      "/career":    { target: BACKEND, changeOrigin: true },
    },
  },
});
