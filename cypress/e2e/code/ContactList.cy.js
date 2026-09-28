describe('Contact List App', function () {

    it('creates an account, adds 2 contacts, logs back in, and verifies both', function () {

        const appUrl = 'https://thinking-tester-contact-list.herokuapp.com';

        const runId = Date.now();
        const email = `cypress-${runId}@example.com`;
        const password = 'CypressTest123!';

        const contact1Email = `contact1-${runId}@example.com`;
        const contact2Email = `contact2-${runId}@example.com`;


        // =========================================
        // 1. Open application
        // =========================================
        cy.visit(appUrl);


        // =========================================
        // 2. Create account
        // =========================================
        cy.contains('button', 'Sign up')
            .should('be.visible')
            .click();

        cy.get('#firstName')
            .type('Cypress');

        cy.get('#lastName')
            .type('Automation');

        cy.get('#email')
            .type(email);

        cy.get('#password')
            .type(password);

        cy.get('#submit')
            .click();

        cy.get('#add-contact')
            .should('be.visible');


        // =========================================
        // 3. Add Contact 1
        // =========================================
        cy.get('#add-contact')
            .click();

        cy.get('#firstName')
            .type('Cypress');

        cy.get('#lastName')
            .type('Contact1');

        cy.get('#birthdate')
            .type('1990-01-15');

        cy.get('#email')
            .type(contact1Email);

        cy.get('#phone')
            .type('8005551234');

        cy.get('#street1')
            .type('123 Cypress Street');

        cy.get('#street2')
            .type('Apartment 4');

        cy.get('#city')
            .type('Test City');

        cy.get('#stateProvince')
            .type('California');

        cy.get('#postalCode')
            .type('90210');

        cy.get('#country')
            .type('United States');

        cy.get('#submit')
            .click();


        // Verify Contact 1 was added
        cy.contains('Cypress')
            .should('be.visible');

        cy.contains('Contact1')
            .should('be.visible');


        // =========================================
        // 4. Add Contact 2
        // =========================================
        cy.get('#add-contact')
            .should('be.visible')
            .click();

        cy.get('#firstName')
            .type('Automation');

        cy.get('#lastName')
            .type('Contact2');

        cy.get('#birthdate')
            .type('1995-05-20');

        cy.get('#email')
            .type(contact2Email);

        cy.get('#phone')
            .type('8005555678');

        cy.get('#street1')
            .type('456 Automation Avenue');

        cy.get('#street2')
            .type('Suite 10');

        cy.get('#city')
            .type('Test City');

        cy.get('#stateProvince')
            .type('New York');

        cy.get('#postalCode')
            .type('10001');

        cy.get('#country')
            .type('United States');

        cy.get('#submit')
            .click();


        // Verify Contact 2 was added
        cy.contains('Automation')
            .should('be.visible');

        cy.contains('Contact2')
            .should('be.visible');


        // =========================================
        // 5. Verify Both Contacts
        // =========================================
        cy.contains('Cypress')
            .should('be.visible');

        cy.contains('Contact1')
            .should('be.visible');

        cy.contains('Automation')
            .should('be.visible');

        cy.contains('Contact2')
            .should('be.visible');


        // =========================================
        // 6. Logout
        // =========================================
        cy.contains('button', 'Logout')
            .should('be.visible')
            .click();


        // =========================================
        // 7. Return to Login Page
        // =========================================
        cy.visit(appUrl);


        // =========================================
        // 8. Login Again
        // =========================================
        cy.get('#email')
            .should('be.visible')
            .and('not.be.disabled')
            .type(email);

        cy.get('#password')
            .should('be.visible')
            .and('not.be.disabled')
            .type(password);

        cy.get('#submit')
            .should('be.visible')
            .click();


        // =========================================
        // 9. Verify Contact List
        // =========================================
        cy.get('#add-contact')
            .should('be.visible');


        // =========================================
        // 10. Verify Contact 1 After Login
        // =========================================
        cy.contains('Cypress')
            .should('be.visible');

        cy.contains('Contact1')
            .should('be.visible');


        // =========================================
        // 11. Verify Contact 2 After Login
        // =========================================
        cy.contains('Automation')
            .should('be.visible');

        cy.contains('Contact2')
            .should('be.visible');


        cy.screenshot('final-contact-list')    

    });

});

