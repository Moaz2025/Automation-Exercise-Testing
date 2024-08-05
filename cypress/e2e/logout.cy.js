describe("logout", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
  });

  it("Check that user can logout successfully", () => {
    cy.logoutButton().click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
    cy.homeButton().click();
    cy.logoutButton().should("not.exist");
    cy.deleteAccountButton().should("not.exist");
  });

  it("Check that user can't get back to his account after logout", () => {
    cy.logoutButton().click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
    cy.go("back");
    cy.url().should("eq", data.urls.homePageUrl);
    cy.title().should("eq", data.titles.homePageTitle);
  });
});
