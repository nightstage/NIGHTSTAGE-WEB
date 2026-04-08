import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nightstage.github.io",
  base: "/NIGHTSTAGE-WEB",
  server: {
    host: true,
    port: 4321
  }
});
