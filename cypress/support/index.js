// cypress/support/index.js

// Import custom commands
import './commands';

// Cypress commands that are global to all tests
Cypress.on('window:before:unload', (win) => {
  // Prevent any unwanted behavior on window unload
  win.console.log = () => {}; // Suppress console logs if needed
});

// You can add other global configuration or setup here
// For example, setting up global intercepts or custom commands
