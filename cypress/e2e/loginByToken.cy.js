describe('JWT Token', () => {

    it('is logged in through local storage', () => {
        cy.LoginAPI()
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('.btn.rounded').contains('Add To Cart').first().click()
    });

});