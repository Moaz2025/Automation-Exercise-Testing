describe("home", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  it("some tests for home page", () => {
    cy.homePage();
    cy.leftSidebar().should("have.text", data.labels.category);
    cy.brandsProducts().should("have.text", data.labels.brands);
    cy.slider().should("have.class", data.selectors.carouselSlide);
  });
});
