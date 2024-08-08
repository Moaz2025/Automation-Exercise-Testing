class Signup {
  signupAndLoginPage() {
    cy.homePage();
    cy.signupAndLoginPageButton();
  }
  validData() {
    cy.password().type(data.testData.password);
    cy.firstName().type(data.testData.name);
    cy.lastName().type(data.testData.lastName);
    cy.address().type(data.testData.address);
    cy.country().select(data.testData.country);
    cy.states().type(data.testData.state);
    cy.city().type(data.testData.city);
    cy.zipcode().type(data.testData.zipcode);
    cy.mobileNumber().type(data.testData.mobileNumber);
  }
  enterName() {
    cy.signupName().type(data.testData.name);
  }
  enterEmail() {
    cy.signupEmail().type(data.testData.email);
  }
  signupButton() {
    cy.signupButton();
  }
  createAccount() {
    cy.createAccountButton();
    cy.title().should("eq", data.titles.accountCreatedPageTitle);
    cy.url().should("include", data.urls.accountCreatedPageUrl);
  }
  enterGeneratedEmail() {
    let email = this.generateEmail();
    cy.signupEmail().type(email);
    cy.readFile("emails.txt", { log: false }).then((fileContent) => {
      cy.writeFile("emails.txt", fileContent + email + "\n");
    });
  }
  generateEmail() {
    let emailBase = "@gmail.com";
    let emailBody = "moaz20ahmed";
    let random = Math.floor(Math.random() * 1000000 + 1);
    let email = `${emailBody}+${random}${emailBase}`;
    return email;
  }
}
export default Signup;
