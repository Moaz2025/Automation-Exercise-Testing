import Logout from "../support/POM/logout";
const logout = new Logout();

describe("logout", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    logout.login();
  });

  it("Check that user can logout successfully", () => {
    logout.logout();
    cy.homeButton().click();
    cy.logoutButton().should("not.exist");
    cy.deleteAccountButton().should("not.exist");
  });

  it("Check that user can't get back to his account after logout", () => {
    logout.logout();
    cy.go("back");
    cy.url().should("eq", data.urls.homePageUrl);
    cy.title().should("eq", data.titles.homePageTitle);
  });
});
