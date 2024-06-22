// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
	devtools: { enabled: true },
	build: {
		transpile: ["vuetify"],
	},
	modules: [
    "@pinia/nuxt",
		"@nuxt/test-utils/module",
    "nuxt-icons",
		async (options, nuxt) => {
			// @ts-expect-error
			nuxt.hooks.hook("vite:extendConfig", config => config.plugins.push(
				vuetify()
			));
		},
	],
  pinia: {
    storesDirs: ["./stores/**"],
  },
	css: ["~/assets/css/main.css"],
  components: [
    { path: "~/assets/icons" },
    "~/components"
  ],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
});
