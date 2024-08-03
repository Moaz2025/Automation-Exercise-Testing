describe("home", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  it("some tests for home page", () => {
    cy.visit(data.homePageUrl);
    cy.get(".left-sidebar > h2").should("have.text", "Category");
    cy.get(".brands_products > h2").should("have.text", "Brands");
    cy.get("#slider-carousel").should("have.class", "carousel slide");
  });
});
