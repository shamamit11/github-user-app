const APP_URL = Cypress.env('host')

const DUMMY_DATA = [
    {
        id: 1,
        login: 'johndoe',
        avatar_url: "https://picsum.photos/400"
    },
    {
        id: 2,
        login: 'foobar',
        avatar_url: "https://picsum.photos/500"
    },
]

describe('Users Page', () => {
    beforeEach(() => {
        cy.visit(`${APP_URL}/users`);

        cy.intercept('GET', 'https://api.github.com/users', {
            statusCode: 200,
            body: DUMMY_DATA,
        });
    });

    it('renders the page with user card containing user info', () => {

        cy.contains('GitHub Users').should('be.visible');

        cy.get('.grid').find('.user-card').should('have.length', DUMMY_DATA.length);

        cy.get('.grid').find('.user-card').first().contains(DUMMY_DATA[0].login).should('be.visible');

        cy.get('.grid').find('.user-card').first().get(`button[aria-label="Delete user ${DUMMY_DATA[0].login}"]`).should('be.visible');
    });

    it('deletes a user from the users page', () => {
        cy.get('.grid').find('.user-card').first().get(`button[aria-label="Delete user ${DUMMY_DATA[0].login}"]`).click();

        cy.wait(1000)

        cy.get('.grid').find('.user-card').should('have.length', DUMMY_DATA.length - 1);
    });
});