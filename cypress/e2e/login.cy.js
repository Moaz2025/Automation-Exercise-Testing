describe("login", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    cy.signupAndLoginPageButton();
  });

  it("Check that user can login with right email and password", () => {
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
    cy.logoutButton().should("exist");
    cy.deleteAccountButton().should("exist");
  });

  it("Check that user can't login with email not exist", () => {
    cy.loginEmail().type(data.testData.nonExistingEmail);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.loginErrorLabel().should(
      "contain",
      data.messages.incorrectEmailOrPasswordMessage
    );
  });

  it("Check that user can't login with wrong password", () => {
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.wrongPassword);
    cy.loginButton();
    cy.loginErrorLabel().should(
      "contain",
      data.messages.incorrectEmailOrPasswordMessage
    );
  });

  it("Check that user can't login with empty email field", () => {
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
  });

  it("Check that user can't login with empty password field", () => {
    cy.loginEmail().type(data.testData.email);
    cy.loginButton();
  });

  it("Check that user can't login with empty email and password fields", () => {
    cy.loginButton();
  });
});
