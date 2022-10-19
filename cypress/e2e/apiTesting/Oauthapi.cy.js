describe("Oauth Feature APIs", () => {
  const body = {
    client_id: "CypressAppMandy",
    client_secret: "319ebbac0c143909130677df9fa8010d",
    grant_type: "client_credentials",
  };
  let userID;
  const baseURL = "http://coop.apps.symfonycasts.com/api/";

  it("get my information", () => {
    cy.LoginCoopApp(body)
      .then(() => {
        cy.request({
          method: "GET",
          url: baseURL + "me",
          headers: {
            Authorization: "Bearer " + Cypress.env("coopAppToken"),
          },
        });
      })
      .then((response) => {
        cy.log(JSON.stringify(response.body));
        userID = response.body.id;
      });
  });

  it("Unlock the Barn", () => {
    cy.request({
      method: "POST",
      url: baseURL + userID + "/barn-unlock",
      headers: {
        Authorization: "Bearer " + Cypress.env("coopAppToken"),
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });
});
