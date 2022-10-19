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

import "cypress-wait-until";
import "cypress-file-upload";

Cypress.Commands.add("LoginAPI", () => {
  cy.request({
    method: "POST",
    url: "https://rahulshettyacademy.com/api/ecom/auth/login",
    body: {
      userEmail: "sarao.mandeep227@gmail.com",
      userPassword: "India@1234",
    },
  }).then((res) => {
    expect(res.status).to.eq(200);
    Cypress.env("token", res.body.token);

    cy.visit("https://rahulshettyacademy.com/client", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem("token", Cypress.env("token"));
      },
    });
  });
});

/**
 *Adding details to body
 *@example
 *  const body = {
 *        client_id: " ",
 *        client_secret: " ",
 *        grant_type: " ",
 *        }
 *
 */
Cypress.Commands.add("LoginCoopApp", (body) => {
  cy.request({
    method: "POST",
    url: "http://coop.apps.symfonycasts.com/token",
    form: true,
    body: body,
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("coopAppToken", response.body.access_token);
  });
});
