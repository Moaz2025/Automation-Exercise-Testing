describe("logout", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.homePageUrl);
    cy.get(data.signupAndLoginPageButton).click();
    cy.get(data.loginEmailTextbox).type(data.email);
    cy.get(data.loginPasswordTextbox).type(data.password);
    cy.get(data.loginButton).click();
  });

  it("Check that user can logout successfully", () => {
    cy.get(data.logoutButton).click();
    cy.url().should("include", data.signupAndLoginPageUrl);
    cy.get(data.homeButton).eq(1).click();
    cy.get(data.logoutButton).should("not.exist");
    cy.get(data.deleteAccountButton).should("not.exist");
  });

  it("Check that user can't get back to his account after logout", () => {
    cy.get(data.logoutButton).click();
    cy.url().should("include", data.signupAndLoginPageUrl);
    cy.go("back");
    cy.url().should("eq", data.homePageUrl);
    cy.title().should("eq", data.homePageTitle);
  });
});
