import type { Plugin } from "vite";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildAppGraph, buildMarketingGraph, serializeJsonLd } from "./src/seo/structuredData";

const PLACEHOLDER = "<!-- STRUCTURED_DATA -->";

export function structuredDataPlugin(): Plugin {
  return {
    name: "structured-data",
    transformIndexHtml(html) {
      const jsonLd = serializeJsonLd(buildMarketingGraph());
      const script = `<script type="application/ld+json">\n${jsonLd}\n    </script>`;
      if (html.includes(PLACEHOLDER)) {
        return html.replace(PLACEHOLDER, script);
      }
      return html.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g,
        `${script}\n    `,
      );
    },
    closeBundle() {
      const outDir = resolve(__dirname, "dist");
      const appSchema = serializeJsonLd(buildAppGraph());
      const appJsonPath = resolve(__dirname, "public", "app-schema.json");
      writeFileSync(resolve(outDir, "app-schema.json"), appSchema, "utf8");
      writeFileSync(appJsonPath, appSchema, "utf8");
      writeFileSync(
        resolve(__dirname, "public", "app-schema-embed.html"),
        `<!-- Paste inside <head> on app.12vsim.com -->\n<script type="application/ld+json">\n${appSchema}\n</script>\n`,
        "utf8",
      );
    },
  };
}
