describe("search", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.homePageUrl);
    cy.get(data.productsButton).click();
    cy.title().should("eq", data.productsPageTitle);
  });

  it("Check that user can search for a keyword that is found in the products", () => {
    cy.get(data.searchBox).type(data.foundKeyword);
    cy.get(data.searchButton).click();
    cy.url().should("include", data.searchProductsUrl + data.foundKeyword);
  });

  it("Check that user can't search for a keyword that is not found in the products", () => {
    cy.get(data.searchBox).type(data.notFoundKeyword);
    cy.get(data.searchButton).click();
    cy.url().should("include", data.searchProductsUrl + data.notFoundKeyword);
  });

  it("Check that user can't search for an empty keyword", () => {
    cy.get(data.searchButton).click();
    cy.url().should("include", data.searchProductsUrl);
  });
});
