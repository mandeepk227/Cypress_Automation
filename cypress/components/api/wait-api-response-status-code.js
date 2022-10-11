Cypress.Commands.add('waitApiResponseStatusCode', (alias, statusCode, options = {}) => {

    cy.wait(alias, options).then((interception) => {
        cy.log("**x-miniprofiler-ids:**"+ JSON.stringify(interception.response.headers['x-miniprofiler-ids']))
        cy.get(alias).its('response.statusCode').should('eq', statusCode)
    })

    cy.log({
        name: 'waitApiResponseStatusCode',
    })
});