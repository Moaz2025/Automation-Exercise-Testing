describe("logout", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-password"]').type("Brightskies@123");
    cy.get('[data-qa="login-button"]').click();
  });

  it("Check that user can logout successfully", () => {
    cy.get('[href="/logout"]').click();
    cy.url().should("include", "login");
  });

  it("Check that user can't get back to his account after logout", () => {
    cy.get('[href="/logout"]').click();
    cy.url().should("include", "login");
    cy.go("back");
    cy.url().should("eq", "https://www.automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
  });
});
