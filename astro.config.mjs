// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://astro-portfolio.ct2xmh.workers.dev",
	integrations: [mdx(), sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	adapter: cloudflare({
		imageService: "compile",
		platformProxy: {
			enabled: true,
		},
	}),
});
