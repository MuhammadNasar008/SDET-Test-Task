const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://client.amega.finance/",
    defaultCommandTimeout: 12000,
    
    "chromeWebSecurity": false,
    args: ['--no-sandbox'],
    setupNodeEvents(on, config) {
      // Load environment variables into Cypress config
      config.env = {
        ...config.env,
        ...process.env, // Merge with existing environment variables
      };
    },
  },
});
