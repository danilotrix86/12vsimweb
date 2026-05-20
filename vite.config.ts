import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { buildAppGraph, serializeJsonLd } from "./src/seo/structuredData";
import { structuredDataPlugin } from "./vite-plugin-structured-data";

function writeAppSchemaArtifacts() {
  const appSchema = serializeJsonLd(buildAppGraph());
  const publicDir = resolve(__dirname, "public");
  writeFileSync(resolve(publicDir, "app-schema.json"), appSchema, "utf8");
  writeFileSync(
    resolve(publicDir, "app-schema-embed.html"),
    `<!-- Paste inside <head> on app.12vsim.com -->\n<script type="application/ld+json">\n${appSchema}\n</script>\n`,
    "utf8",
  );
}

writeAppSchemaArtifacts();

export default defineConfig({
  plugins: [react(), tailwindcss(), structuredDataPlugin()],
  server: {
    port: 5174,
    strictPort: false,
  },
});
