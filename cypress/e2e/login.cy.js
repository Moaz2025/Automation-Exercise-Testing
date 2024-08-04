describe("login", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.signupAndLoginPageButton).click();
  });

  it("Check that user can login with right email and password", () => {
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.get(data.selectors.shopMenu).should("contain", data.labels.loginStatus);
    cy.get(data.buttons.logoutButton).should("exist");
    cy.get(data.buttons.deleteAccountButton).should("exist");
  });

  it("Check that user can't login with email not exist", () => {
    cy.get(data.textboxes.loginEmailTextbox).type(
      data.testData.nonExistingEmail
    );
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
    cy.get(data.labels.loginErrorLabel).should(
      "contain",
      data.messages.incorrectEmailOrPasswordMessage
    );
  });

  it("Check that user can't login with wrong password", () => {
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.textboxes.loginPasswordTextbox).type(
      data.testData.wrongPassword
    );
    cy.get(data.buttons.loginButton).click();
    cy.get(data.labels.loginErrorLabel).should(
      "contain",
      data.messages.incorrectEmailOrPasswordMessage
    );
  });

  it("Check that user can't login with empty email field", () => {
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
  });

  it("Check that user can't login with empty password field", () => {
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.buttons.loginButton).click();
  });

  it("Check that user can't login with empty email and password fields", () => {
    cy.get(data.buttons.loginButton).click();
  });
});
