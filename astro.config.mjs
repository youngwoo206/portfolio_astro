import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
});

// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

// export default defineConfig({
//   // ...
//   integrations: [tailwind()],
// });
