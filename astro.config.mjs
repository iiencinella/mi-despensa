import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import vercelServerless from '@astrojs/vercel/serverless';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: node({
  //   mode: "standalone"
  // }),
  adapter: vercelServerless(),
  integrations: [tailwind(), db()]
});