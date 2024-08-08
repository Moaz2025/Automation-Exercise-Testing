class Login {
  enterEmail() {
    cy.loginEmail().type(data.testData.email);
  }
  enterPassword() {
    cy.loginPassword().type(data.testData.password);
  }
  loginbutton() {
    cy.loginButton();
  }
  loggedIn() {
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
    cy.logoutButton().should("exist");
    cy.deleteAccountButton().should("exist");
  }
  loginErrorMessage() {
    cy.loginErrorLabel().should(
      "contain",
      data.messages.incorrectEmailOrPasswordMessage
    );
  }
}
export default Login;
