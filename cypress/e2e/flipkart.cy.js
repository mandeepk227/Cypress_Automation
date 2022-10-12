
describe('user login failed', () => {
    const url = "https://www.flipkart.com/" 
    const email = "mandeep227@gmail.com"
    const password = "11155588895"

    it('login failed', () => {
        cy.visit(url)
        cy.title().should('contain', 'Online Shopping Site');
        cy.get('._1_3w1N').click();
        cy.get(':nth-child(1) > ._2IX_2-').should('be.visible').type(email);
        cy.get(':nth-child(2) > ._2IX_2-').should('be.visible').type(password, {sensitive: true , log:false});
        cy.get('._1D1L_j').click();
        cy.get('._2YULOR > span').then((msg) =>{
            const textData = msg.text();
            expect(textData.includes('Your username or password is incorrect')).to.be.true
        

        })
        
    })
})