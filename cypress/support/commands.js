// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitApiResponseStatusCode', (alias, statusCode, options = {}) => {

    cy.wait(alias, options).then((interception) => {
        cy.log("**x-miniprofiler-ids:**"+ JSON.stringify(interception.response.headers['x-miniprofiler-ids']))
        cy.get(alias).its('response.statusCode').should('eq', statusCode)
    })

    cy.log({
        name: 'waitApiResponseStatusCode',
    })
});

Cypress.Commands.add('addproducttocart', (alias = 'addproducttocart') => {

    Cypress.log({
        name: 'addproducttocart'
    })

    cy.intercept('POST', `/addproducttocart/**`, {statusCode: 200}).as(alias)
});