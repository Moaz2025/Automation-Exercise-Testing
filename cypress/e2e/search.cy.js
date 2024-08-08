import Search from "../support/POM/search";
const search = new Search();

describe("search", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    search.productsPage();
  });

  it("Check that user can search for a keyword that is found in the products", () => {
    cy.search().type(data.testData.foundKeyword);
    search.searchButton();
    cy.url().should(
      "include",
      data.urls.searchProductsUrl + data.testData.foundKeyword
    );
  });

  it("Check that user can't search for a keyword that is not found in the products", () => {
    cy.search().type(data.testData.notFoundKeyword);
    search.searchButton();
    cy.url().should(
      "include",
      data.urls.searchProductsUrl + data.testData.notFoundKeyword
    );
  });

  it("Check that user can't search for an empty keyword", () => {
    search.searchButton();
    cy.url().should("include", data.urls.searchProductsUrl);
  });
});
