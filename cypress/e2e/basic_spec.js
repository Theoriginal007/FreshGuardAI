describe('Basic Test', () => {
    it('should visit the base URL', () => {
      cy.visit('/');
      cy.contains('Welcome'); // Adjust based on your app's content
    });
  });
  