describe("search", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    cy.productsButton();
    cy.title().should("eq", data.titles.productsPageTitle);
  });

  it("Check that user can search for a keyword that is found in the products", () => {
    cy.search().type(data.testData.foundKeyword);
    cy.searchButton();
    cy.url().should(
      "include",
      data.urls.searchProductsUrl + data.testData.foundKeyword
    );
  });

  it("Check that user can't search for a keyword that is not found in the products", () => {
    cy.search().type(data.testData.notFoundKeyword);
    cy.searchButton();
    cy.url().should(
      "include",
      data.urls.searchProductsUrl + data.testData.notFoundKeyword
    );
  });

  it("Check that user can't search for an empty keyword", () => {
    cy.searchButton();
    cy.url().should("include", data.urls.searchProductsUrl);
  });
});
