// cypress/e2e/home_page_spec.js

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/') // Visits the base URL (http://localhost:3000) by default
  });

  it('should display the main heading', () => {
    cy.get('h1').should('contain', 'AI Prediction App');
  });

  it('should upload an image and display prediction results', () => {
    // Mock the API response
    cy.intercept('POST', '/api/predict', {
      statusCode: 200,
      body: {
        prediction: 'Positive',
        recommendations: ['Recommendation 1', 'Recommendation 2']
      }
    }).as('predict');

    // Upload the image file
    cy.uploadFile('input[type="file"]', 'sample-image.jpg'); // Ensure this file is in cypress/fixtures

    // Trigger the prediction process
    cy.get('button').contains('Submit').click();

    // Wait for the mocked API response
    cy.wait('@predict');

    // Verify that the prediction result and recommendations are displayed
    cy.get('.prediction-result').should('contain', 'Positive');
    cy.get('.recommendations').should('contain', 'Recommendation 1');
  });
});

describe('Image Upload Flow', () => {
  beforeEach(() => {
    cy.visit('/'); // Visits the base URL (http://localhost:3000) by default
  });

  it('should upload an image and display the prediction result', () => {
    // Load the image file from fixtures
    const fileName = 'sample-image.jpg'; // Ensure this file is in cypress/fixtures
    cy.fixture(fileName).as('imageFile');

    // Attach the file to the input element
    cy.get('input[type="file"]').uploadFile(fileName);

    // Trigger any actions needed after file upload (e.g., form submission)
    cy.get('button').contains('Submit').click(); // Adjust if your button has a different text or selector

    // Verify prediction result
    cy.get('.prediction-result').should('contain', 'Prediction Result'); // Adjust based on your app's structure
    cy.get('.recommendations').should('contain', 'Recommendation'); // Adjust based on your app's structure
  });
});
