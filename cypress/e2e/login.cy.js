describe("login", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/login"]').click();
  });

  it("Check that user can login with right email and password", () => {
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-password"]').type("Brightskies@123");
    cy.get('[data-qa="login-button"]').click();
    cy.title().should("eq", "Automation Exercise");
    cy.get('[class="col-sm-8"]').should("contain", " Logged in as ");
    cy.get('[href="/logout"]').should("exist");
    cy.get('[href="/delete_account"]').should("exist");
  });

  it("Check that user can't login with email not exist", () => {
    cy.get('[data-qa="login-email"]').type("ahmed@gmail.com");
    cy.get('[data-qa="login-password"]').type("moaz");
    cy.get('[data-qa="login-button"]').click();
    cy.get('[action="/login"]').should(
      "contain",
      "Your email or password is incorrect!"
    );
  });

  it("Check that user can't login with wrong password", () => {
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-password"]').type("ahmed");
    cy.get('[data-qa="login-button"]').click();
    cy.get('[action="/login"]').should(
      "contain",
      "Your email or password is incorrect!"
    );
  });

  it("Check that user can't login with empty email field", () => {
    cy.get('[data-qa="login-password"]').type("moaz");
    cy.get('[data-qa="login-button"]').click();
  });

  it("Check that user can't login with empty password field", () => {
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-button"]').click();
  });

  it("Check that user can't login with empty email and password fields", () => {
    cy.get('[data-qa="login-button"]').click();
  });
});
