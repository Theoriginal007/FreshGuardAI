# Frontend Project Setup

## Project Overview

This project is a React-based frontend application with end-to-end testing using Cypress. This document outlines the setup process, including dependencies and configurations.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (for managing dependencies)

## Installation

1. **Clone the Repository**

   If you haven't cloned the repository yet, do so using:

   git clone <repository-url>
   cd <repository-directory>

## Install Project Dependencies

Install the project dependencies by running:

npm install

## Install Development Dependencies

For end-to-end testing with Cypress, you need to install additional dependencies:

npm install --save-dev cypress@latest cypress-file-upload

## Cypress Setup

## Initialize Cypress

Open Cypress for the first time to create the default directory structure:

npx cypress open
This will create the necessary directories and files under cypress/.

## Configure Cypress

Create or update the cypress.config.js file in the root directory of your project:

javascript
Copy code
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Set this to your app's URL
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Disable video upload on passing tests
    screenshotOnRunFailure: true, // Take screenshots on test failures
  },
});

## Add Custom Commands
Create or update the cypress/support/commands.js file to include custom commands:

javascript
Copy code
import 'cypress-file-upload';

// Custom command to handle file uploads
Cypress.Commands.add('uploadFile', (selector, fileName) => {
  cy.get(selector).attachFile(fileName);
});

## Update cypress/support/index.js
Ensure your cypress/support/index.js imports the custom commands:

javascript
Copy code
import './commands';

// Additional global setup or configurations can be added here

## Add Test Files
Create test files under cypress/e2e/. For example, upload_spec.js:

javascript
Copy code
describe('Image Upload Flow', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust URL as needed; visits the base URL by default
  });

  it('should upload an image and display the prediction result', () => {
    // Load the image file from fixtures
    const fileName = 'sample-image.jpg'; // Ensure this file is in cypress/fixtures
    cy.fixture(fileName).as('imageFile');

    // Attach the file to the input element
    cy.get('input[type="file"]').attachFile({
      filePath: fileName,
      encoding: 'base64'
    });

    // Trigger any actions needed after file upload (e.g., form submission)
    cy.get('button').contains('Submit').click(); // Adjust if your button has a different text or selector

    // Verify prediction result
    cy.get('.prediction-result').should('contain', 'Prediction Result'); // Adjust based on your app's structure
    cy.get('.recommendations').should('contain', 'Recommendation'); // Adjust based on your app's structure
  });
});

## Add Fixture Files

Place your fixture files in cypress/fixtures/. For example, sample-image.jpg.

## Running Tests
To run your Cypress tests, use the following command:

npx cypress open
This will open the Cypress Test Runner, where you can run your tests interactively.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Ensure that all tests pass before submitting a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.