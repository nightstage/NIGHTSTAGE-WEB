import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nightstage-es.com",
  server: {
    host: true,
    port: 4321
  }
});
