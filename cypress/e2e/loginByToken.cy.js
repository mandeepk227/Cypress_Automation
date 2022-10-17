describe('JWT Token', () => {

    it('is logged in through local storage', () => {
        
        cy.LoginAPI()
        cy.visit('https://rahulshettyacademy.com/client')
    });
    
});