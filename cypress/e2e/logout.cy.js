describe("logout", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.signupAndLoginPageButton).click();
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
  });

  it("Check that user can logout successfully", () => {
    cy.get(data.buttons.logoutButton).click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
    cy.get(data.buttons.homeButton).eq(1).click();
    cy.get(data.buttons.logoutButton).should("not.exist");
    cy.get(data.buttons.deleteAccountButton).should("not.exist");
  });

  it("Check that user can't get back to his account after logout", () => {
    cy.get(data.buttons.logoutButton).click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
    cy.go("back");
    cy.url().should("eq", data.urls.homePageUrl);
    cy.title().should("eq", data.titles.homePageTitle);
  });
});
