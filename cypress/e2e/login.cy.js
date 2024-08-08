import Signup from "../support/POM/signup";
import Login from "../support/POM/login";

const signup = new Signup();
const login = new Login();

describe("login", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    signup.signupAndLoginPage();
  });

  it("Check that user can login with right email and password", () => {
    login.enterEmail();
    login.enterPassword();
    login.loginbutton();
    login.loggedIn();
  });

  it("Check that user can't login with email not exist", () => {
    cy.loginEmail().type(data.testData.nonExistingEmail);
    login.enterPassword();
    login.loginbutton();
    login.loginErrorMessage();
  });

  it("Check that user can't login with wrong password", () => {
    login.enterEmail();
    cy.loginPassword().type(data.testData.wrongPassword);
    login.loginbutton();
    login.loginErrorMessage();
  });

  it("Check that user can't login with empty email field", () => {
    login.enterPassword();
    login.loginbutton();
  });

  it("Check that user can't login with empty password field", () => {
    login.enterEmail();
    login.loginbutton();
  });

  it("Check that user can't login with empty email and password fields", () => {
    login.loginbutton();
  });
});
