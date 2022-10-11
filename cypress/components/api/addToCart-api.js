Cypress.Commands.add('addproducttocart', (alias = 'addproducttocart') => {

    Cypress.log({
        name: 'addproducttocart'
    })

    cy.intercept('POST', `/addproducttocart/**`, {statusCode: 200}).as(alias)
});