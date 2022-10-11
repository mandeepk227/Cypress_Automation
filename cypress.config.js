const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n32bcg',
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
      return require('./cypress/plugins/index.js')
      // implement node event listeners here
      // set CYPRESS_RECORD_KEY= 07115e55-8b2d-446b-a90c-03c3c0062102
    },
  },
});
