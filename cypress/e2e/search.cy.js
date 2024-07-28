describe("search", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/products"]').click();
    cy.title().should("eq", "Automation Exercise - All Products");
  });

  it("Check that user can search for a keyword that is found in the products", () => {
    cy.get('[id="search_product"]').type("T-shirt");
    cy.get('[id="submit_search"]').click();
    cy.url().should("include", "/products?search=T-shirt");
  });

  it("Check that user can't search for a keyword that is not found in the products", () => {
    cy.get('[id="search_product"]').type("Car");
    cy.get('[id="submit_search"]').click();
    cy.url().should("include", "/products?search=Car");
  });

  it("Check that user can't search for an empty keyword", () => {
    cy.get('[id="submit_search"]').click();
    cy.url().should("include", "/products?search=");
  });
});
