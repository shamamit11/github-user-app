const APP_URL = Cypress.env('host')

describe('Home Page', () => {
    it('renders the home page with logo, welcome message, link to view users and navigates to users page', () => {
        cy.visit(`${APP_URL}`);
        cy.wait(1000);

        cy.get('.logo').should('be.visible');

        cy.contains('Welcome to GitHub User App').should('be.visible');

        cy.contains('a', 'View Users').should('exist');

        cy.contains('a', 'View Users').click();

        cy.url().should('include', '/users')
    });
});