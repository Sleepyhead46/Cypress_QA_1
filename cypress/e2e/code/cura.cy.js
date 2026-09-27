const visitAndLogin = () => {
    cy.visit('/');
    cy.get('#btn-make-appointment').should('be.visible').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('#combo_facility').should('be.visible');
};

const bookAppointment = () => {
    cy.get('#combo_facility')
        .select('Hongkong CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    cy.get('#txt_visit_date')
        .clear()
        .type('30/09/2026')
        .type('{esc}')
        .blur();
    cy.get('#txt_comment')
        .clear()
        .type('Dutta will be avaiable at 30/09/2026');
    cy.get('#btn-book-appointment').click();
};

describe('Cura Make Appointment', function () {

    it('Visit the URL', function () {
        cy.visit('/');
        cy.get('#btn-make-appointment').should('be.visible');
    });

    it('Click on Make Appointment', function () {
        visitAndLogin();
    });

    it('Make Appointment', function () {
        visitAndLogin();
        bookAppointment();
        cy.get('h2').should('contain', 'Appointment Confirmation');
    });

    it('Verify Appointment', function () {
        visitAndLogin();
        bookAppointment();
        cy.get('h2').should('contain', 'Appointment Confirmation');
        cy.get('#comment')
            .should('contain', 'Pramod Dutta will be avaiable at 30/09/2026');
    });

    it('Take screenshot of finished appointment', function () {
        visitAndLogin();
        bookAppointment();
        cy.get('h2').should('contain', 'Appointment Confirmation');
        cy.screenshot('finished-appointment');
    });

    it('Create report for finished appointment', function () {
        visitAndLogin();
        bookAppointment();
        cy.get('h2').should('contain', 'Appointment Confirmation');
        cy.get('#comment')
            .should('contain', ' Dutta will be avaiable at 30/09/2026');
    });

});
