import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [svelte(), db()],
  adapter: vercel()
});