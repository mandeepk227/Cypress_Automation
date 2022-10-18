describe("first test case suite", () => {
  it("Mock api response", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        status: 200,
        body: [
          {
            book_name: "RobotFramework",
            isbn: "984353",
            aisle: "982053",
          },
        ],
      }
    ).as("bookRetrievals");
    cy.get('[data-target="#exampleModal"]').contains("Virtual Library").click();
    cy.wait("@bookRetrievals").should(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
    cy.get("p").contains("Oops only 1 Book available").should("be.visible");
  });

  it("modifying url", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=kumar";

        req.continue((res) => {
          // expect(res.statusCode).to.equal(403)
        });
      }
    ).as("dummyurl");
    cy.get('[data-target="#exampleModal"]').contains("Virtual Library").click();
    cy.wait("@dummyurl");
  });
});
