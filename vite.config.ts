import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { structuredDataPlugin } from "./vite-plugin-structured-data";

export default defineConfig({
  plugins: [react(), tailwindcss(), structuredDataPlugin()],
  server: {
    port: 5174,
    strictPort: false,
  },
});
