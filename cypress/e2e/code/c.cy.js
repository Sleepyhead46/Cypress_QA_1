describe('Cura Make Appointment', function() {

    it('Make Appointment', function() {

        // 1. Visit URL
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        // 2. Click Make Appointment
        cy.get('#btn-make-appointment')
            .should('be.visible')
            .click();

        // 3. Login
        cy.get('#txt-username')
            .should('be.visible')
            .type('John Doe');

        cy.get('#txt-password')
            .should('be.visible')
            .type('ThisIsNotAPassword');

        cy.get('#btn-login')
            .should('be.visible')
            .click();

        // IMPORTANT:
        // Confirm that login succeeded and appointment page loaded
        cy.get('#combo_facility')
            .should('be.visible');

        // 4. Select facility
        cy.get('#combo_facility')
            .select('Hongkong CURA Healthcare Center');

        // 5. Hospital readmission
        cy.get('#chk_hospotal_readmission')
            .should('exist')
            .check();

        // 6. Healthcare program - Medicaid
        cy.get('#radio_program_medicaid')
            .should('exist')
            .check();

        // 7. Visit date
        cy.get('#txt_visit_date')
            .click()
            .type('01/01/2023');

        // 8. Comment
        cy.get('#txt_comment').click({ force: true });

        cy.get('#txt_comment')
            .should('be.visible')
            .type('Dutta will be available at 30/09/2026');

        // 9. Book appointment
        cy.get('#btn-book-appointment')
            .should('be.visible')
            .click();

        // 10. Verify appointment
        cy.get('h2')
            .should('contain', 'Appointment Confirmation');

        cy.get('#comment')
            .should('contain', 'Dutta will be available at 30/09/2026');
    });

});