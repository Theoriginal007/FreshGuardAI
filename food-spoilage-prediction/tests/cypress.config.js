const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Adjust to your app's URL
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Disable video upload on passing tests
    screenshotOnRunFailure: true, // Take screenshots on test failures
  },
});
