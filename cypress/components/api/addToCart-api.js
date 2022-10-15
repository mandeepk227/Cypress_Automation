Cypress.Commands.add('postApiaddproducttocart', (alias = 'postApiaddproducttocart') => {

    Cypress.log({
        name: 'postApiaddproducttocart'
    })

    cy.intercept('POST', `/addproducttocart/**`).as(alias)
});