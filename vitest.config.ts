import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
	// any custom Vitest config you require
	test: {
		clearMocks: true,
		setupFiles: "./vitest.setup.ts",
		globals: true, // autoimport globals like describe, it, beforeEach...
		environment: "nuxt", // setup nuxt as main env. To opt out on a specfic file // @vitest-environment node
		server: {
      deps: {
        inline: ["vuetify"],
      },
    },
	}
});