Cypress.Commands.add('postApiaddproducttocart', (alias = 'postApiaddproducttocart') => {

    Cypress.log({
        name: 'postApiaddproducttocart'
    })

    cy.intercept('POST', `/addproducttocart/**`, {statusCode: 200}).as(alias)
});