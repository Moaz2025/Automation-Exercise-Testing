describe("home", () => {
  it("some tests for home page", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get(".left-sidebar > h2").should("have.text", "Category");
    cy.get(".brands_products > h2").should("have.text", "Brands");
    cy.get("#slider-carousel").should("have.class", "carousel slide");
  });
});
