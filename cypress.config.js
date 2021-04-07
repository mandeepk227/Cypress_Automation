const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout:30000,
  retries:1,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
