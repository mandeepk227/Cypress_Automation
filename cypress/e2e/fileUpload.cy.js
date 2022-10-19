describe("file upload", () => {
  const file = "img.jpg";

  it.skip("file upload verified", () => {
    cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html");
    cy.get('input[name="upfile"]').attachFile(file);
    cy.get('[type="submit"]').click();
    cy.get("p").eq(0).contains("You've uploaded a file.");
  });
});
