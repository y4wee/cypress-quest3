const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "osnkfm",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://practice.expandtesting.com/notes/api",
	},
});
