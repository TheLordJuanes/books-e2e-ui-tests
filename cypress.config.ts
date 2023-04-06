import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'bc2poc',
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 10000
      config.video = false;
      config.screenshotOnRunFailure = false;
      // IMPORTANT return the updated config object
      return config;
    },
  },
});