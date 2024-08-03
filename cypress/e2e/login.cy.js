describe("login", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.homePageUrl);
    cy.get(data.signupAndLoginPageButton).click();
  });

  it("Check that user can login with right email and password", () => {
    cy.get(data.loginEmailTextbox).type(data.email);
    cy.get(data.loginPasswordTextbox).type(data.password);
    cy.get(data.loginButton).click();
    cy.title().should("eq", data.homePageTitle);
    cy.get(data.shopMenu).should("contain", data.loginStatus);
    cy.get(data.logoutButton).should("exist");
    cy.get(data.deleteAccountButton).should("exist");
  });

  it("Check that user can't login with email not exist", () => {
    cy.get(data.loginEmailTextbox).type(data.nonExistingEmail);
    cy.get(data.loginPasswordTextbox).type(data.password);
    cy.get(data.loginButton).click();
    cy.get(data.loginErrorLabel).should(
      "contain",
      data.incorrectEmailOrPasswordMessage
    );
  });

  it("Check that user can't login with wrong password", () => {
    cy.get(data.loginEmailTextbox).type(data.email);
    cy.get(data.loginPasswordTextbox).type(data.wrongPassword);
    cy.get(data.loginButton).click();
    cy.get(data.loginErrorLabel).should(
      "contain",
      data.incorrectEmailOrPasswordMessage
    );
  });

  it("Check that user can't login with empty email field", () => {
    cy.get(data.loginPasswordTextbox).type(data.password);
    cy.get(data.loginButton).click();
  });

  it("Check that user can't login with empty password field", () => {
    cy.get(data.loginEmailTextbox).type(data.email);
    cy.get(data.loginButton).click();
  });

  it("Check that user can't login with empty email and password fields", () => {
    cy.get(data.loginButton).click();
  });
});
