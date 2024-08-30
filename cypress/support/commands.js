// Import Cypress file upload support
import 'cypress-file-upload'; 

// Import code coverage support if needed
import '@cypress/code-coverage/support';

// Custom command to handle file uploads
Cypress.Commands.add('uploadFile', (selector, fileName) => {
  // Load the file from the fixtures folder
  cy.fixture(fileName, 'base64').then(fileContent => {
    // Create a blob from the base64 string
    const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
    const file = new File([blob], fileName, { type: 'image/jpeg' });
    
    // Create a DataTransfer object to simulate file upload
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    // Set the files property of the input element
    cy.get(selector).then(subject => {
      const input = subject[0];
      input.files = dataTransfer.files;

      // Trigger the change event on the input element
      cy.wrap(subject).trigger('change', { force: true });
    });
  });
});
