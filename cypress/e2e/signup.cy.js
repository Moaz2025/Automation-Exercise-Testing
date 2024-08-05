describe("signup", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    cy.signupAndLoginPageButton();
  });

  it("Check that user can't signup with empty name and email", () => {
    cy.signupButton();
  });

  it("Check that user can't signup with empty name", () => {
    cy.signupEmail().type(data.testData.email);
    cy.signupButton();
  });

  it("Check that user can't signup with empty email", () => {
    cy.signupName().type(data.testData.name);
    cy.signupButton();
  });

  it("Check that user can't signup with invalid email", () => {
    cy.signupName().type(data.testData.name);
    cy.signupEmail().type(data.testData.invalidEmail);
    cy.signupButton();
  });

  it("Check that user can signup with valid name, email, and valid details", () => {
    cy.title().should("eq", data.titles.signupAndLoginPageTitle);
    cy.signupName().type(data.testData.name);
    let email = generateEmail();
    cy.signupEmail().type(email);
    cy.readFile("emails.txt", { log: false }).then((fileContent) => {
      cy.writeFile("emails.txt", fileContent + email + "\n");
    });
    cy.signupButton();
    cy.title().should("eq", data.titles.signupPageTitle);
    cy.password().type(data.testData.password);
    cy.firstName().type(data.testData.name);
    cy.lastName().type(data.testData.lastName);
    cy.address().type(data.testData.address);
    cy.country().select(data.testData.country);
    cy.states().type(data.testData.state);
    cy.city().type(data.testData.city);
    cy.zipcode().type(data.testData.zipcode);
    cy.mobileNumber().type(data.testData.mobileNumber);
    cy.createAccountButton();
    cy.title().should("eq", data.titles.accountCreatedPageTitle);
    cy.url().should("include", data.urls.accountCreatedPageUrl);
  });

  it("Check that user can't signup with email already registered", () => {
    cy.signupName().type(data.testData.name);
    cy.signupEmail().type(data.testData.email);
    cy.signupButton();
    cy.signupErrorLabel().should("contain", data.messages.emailExistMessage);
  });
});

function generateEmail() {
  let emailBase = "@gmail.com";
  let emailBody = "moaz20ahmed";
  let random = Math.floor(Math.random() * 1000000 + 1);
  let email = `${emailBody}+${random}${emailBase}`;
  return email;
}
