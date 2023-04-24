const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  uncaughtException: false,
  reporter: "../node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
        "overwrite": false,
        "html": false,
        "json": true
    },
  projectId: "ewfuy4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
