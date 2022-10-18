describe("get API", () => {
  const baseURL = "https://gorest.co.in/public/v2";
  const userToken =
    "f163e665de46756702766387b5efd3ddd4c5d96453fbf64c521cb3e6e87e767f";
  it("GET /users", () => {
    cy.request({
      method: "GET",
      url: baseURL + "/users",
      Headers: {
        authorization: "Bearer " + userToken,
      },
    }).then((res) => {
      expect(res.body.length).to.eq(10);
      cy.log(JSON.stringify(res.body));
    });
  });
});
