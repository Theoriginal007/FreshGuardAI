// cypress/e2e/other-page.spec.js

describe('Other Page', () => {
    beforeEach(() => {
      cy.visit('/other-page'); // Visits the URL of the other page
    });
  
    it('should display the correct page heading', () => {
      cy.get('h1').should('contain', 'Other Page Heading'); // Change to the actual heading text
    });
  
    it('should load and display some content', () => {
      cy.get('.some-content-class').should('be.visible'); // Replace with actual class or selector
    });
  
    it('should handle form submissions correctly', () => {
      // Fill out a form
      cy.get('input[name="example"]').type('Test input'); // Change to your form field
      cy.get('form').submit(); // Submit the form
  
      // Verify form submission results
      cy.get('.result').should('contain', 'Submission successful'); // Change to expected result
    });
  
    it('should navigate to another page and display content', () => {
      cy.get('a[href="/another-page"]').click(); // Click a link to navigate
  
      // Verify navigation and content on the new page
      cy.url().should('include', '/another-page'); // Ensure URL is correct
      cy.get('h1').should('contain', 'Another Page Heading'); // Verify heading on new page
    });
  });
  