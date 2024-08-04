describe("search", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.productsButton).click();
    cy.title().should("eq", data.titles.productsPageTitle);
  });

  it("Check that user can search for a keyword that is found in the products", () => {
    cy.get(data.textboxes.searchBox).type(data.testData.foundKeyword);
    cy.get(data.buttons.searchButton).click();
    cy.url().should(
      "include",
      data.urls.searchProductsUrl + data.testData.foundKeyword
    );
  });

  it("Check that user can't search for a keyword that is not found in the products", () => {
    cy.get(data.textboxes.searchBox).type(data.testData.notFoundKeyword);
    cy.get(data.buttons.searchButton).click();
    cy.url().should(
      "include",
      data.urls.searchProductsUrl + data.testData.notFoundKeyword
    );
  });

  it("Check that user can't search for an empty keyword", () => {
    cy.get(data.buttons.searchButton).click();
    cy.url().should("include", data.urls.searchProductsUrl);
  });
});
