import Signup from "../support/POM/signup";
const signup = new Signup();

describe("signup", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    signup.signupAndLoginPage();
  });

  it("Check that user can't signup with empty name and email", () => {
    signup.signupButton();
  });

  it("Check that user can't signup with empty name", () => {
    signup.enterEmail();
    signup.signupButton();
  });

  it("Check that user can't signup with empty email", () => {
    signup.enterName();
    signup.signupButton();
  });

  it("Check that user can't signup with invalid email", () => {
    signup.enterName();
    cy.signupEmail().type(data.testData.invalidEmail);
    signup.signupButton();
  });

  it("Check that user can signup with valid name, email, and valid details", () => {
    cy.title().should("eq", data.titles.signupAndLoginPageTitle);
    signup.enterName();
    signup.enterGeneratedEmail();
    signup.signupButton();
    cy.title().should("eq", data.titles.signupPageTitle);
    signup.validData();
    signup.createAccount();
  });

  it("Check that user can't signup with email already registered", () => {
    signup.enterName();
    signup.enterEmail();
    signup.signupButton();
    cy.signupErrorLabel().should("contain", data.messages.emailExistMessage);
  });
});
