describe("home", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  it("some tests for home page", () => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.selectors.leftSidebar).should(
      "have.text",
      data.labels.category
    );
    cy.get(data.selectors.brandsProducts).should(
      "have.text",
      data.labels.brands
    );
    cy.get(data.selectors.slider).should(
      "have.class",
      data.selectors.carouselSlide
    );
  });
});
