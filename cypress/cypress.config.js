const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here, if needed
      // Example: on('before:browser:launch', (browser = {}, launchOptions) => { ... });
    },
    baseUrl: 'http://localhost:3000', // Your app's base URL
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Disable video upload on passing tests
    screenshotOnRunFailure: true, // Take screenshots on test failures
    // Other configurations can go here
  },
});
