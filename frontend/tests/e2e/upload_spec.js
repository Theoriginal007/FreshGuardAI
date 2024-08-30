describe('Image Upload Flow', () => {
    beforeEach(() => {
      cy.visit('/'); // Visits the base URL by default (http://localhost:3000)
    });
  
    it('should upload an image and display the prediction result', () => {
      // Load the image file from fixtures
      const fileName = 'sample-image.jpg'; // Ensure this file is in cypress/fixtures
  
      // Attach the file to the input element using the custom command
      cy.get('input[type="file"]').uploadFile(fileName);
  
      // Trigger any actions needed after file upload (e.g., form submission)
      cy.get('button').contains('Submit').click(); // Adjust if your button has a different text or selector
  
      // Verify prediction result
      cy.get('.prediction-result').should('contain', 'Prediction Result'); // Adjust based on your app's structure
      cy.get('.recommendations').should('contain', 'Recommendation'); // Adjust based on your app's structure
    });
  });
  