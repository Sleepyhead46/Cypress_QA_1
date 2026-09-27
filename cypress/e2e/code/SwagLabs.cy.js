describe('Swag Labs', function() { 
    it('logs in with valid credentials', function () {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()


        cy.get('[data-test="inventory-item"]')
            .contains('.inventory_item_name', 'Sauce Labs Backpack')
            .parents('[data-test="inventory-item"]')
            .find('button')
            .click();
        cy.get('[data-test="inventory-item"]')
            .contains('.inventory_item_name', 'Sauce Labs Fleece Jacket')
            .parents('[data-test="inventory-item"]')
            .find('button')
            .click();

        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="checkout"]').click();

        cy.get('[data-test="firstName"]').type('Cypress');
        cy.get('[data-test="lastName"]').type('Test');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        cy.screenshot('checkout-info')

        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="complete-header"]')
            .should('be.visible')
            .and('have.text', 'Thank you for your order!');
        cy.get('[data-test="generate-pdf-order"]').click()    
    
    })

})
