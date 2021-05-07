const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout:30000,
  responseTimeout:30000,
  pageLoadTimeout:60000,
  viewportHeight:768,
  viewportWidth:1440,
  video: true,
  retries:1,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
