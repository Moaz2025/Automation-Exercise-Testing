class Search {
  productsPage() {
    cy.homePage();
    cy.productsButton();
    cy.title().should("eq", data.titles.productsPageTitle);
  }
  searchButton() {
    cy.searchButton();
  }
}
export default Search;
