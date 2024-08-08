class Logout {
  login() {
    cy.homePage();
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
  }
  logout() {
    cy.logoutButton().click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
  }
}
export default Logout;
