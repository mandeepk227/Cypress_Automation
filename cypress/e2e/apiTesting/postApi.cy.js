import userData from "../../fixtures/userData.json";

describe("POST API", () => {
  let userID = "";
  const baseURL = "https://gorest.co.in/public/v2";
  const userToken =
    "8242635596e2029a59d38b6855ec78679822d619eeb573a363e547d0b828629e";
  const userEmail = `kalana${Math.floor(Math.random() * 999)}@abclh.com`;
  it("post /users", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/users",
      headers: {
        Authorization: "Bearer " + userToken,
      },
      body: {
        name: userData.name,
        email: userEmail,
        gender: userData.gender,
        status: userData.status,
      },
    })
      .then((res) => {
        cy.log(JSON.stringify(res.body));
        userID = res.body.id;
        expect(res.body).deep.include(userData);
      })
      .then((res) => {
        cy.request({
          method: "GET",
          url: baseURL + "/users/" + userID,
          headers: {
            Authorization: "Bearer " + userToken,
          },
        });
      })
      .then((res) => {
        expect(res.body.id).to.eq(userID);
      });
  });
  it("POST api", () => {
    const url = "http://216.10.245.166/Library/Addbook.php";
    const data = {
      name: "nully",
      isbn: `${Math.floor(Math.random() * 999)}`,
      aisle: "2587",
      author: "kumar",
    };
    cy.request("POST", url, data).then((response) => {
      cy.log(response.headers);
      console.log(response);
      expect(response.body.Msg).to.be.eq("successfully added");
    });
  });
});
