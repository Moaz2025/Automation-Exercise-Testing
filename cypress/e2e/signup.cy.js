describe("signup", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.homePageUrl);
    cy.get(data.signupAndLoginPageButton).click();
  });

  it("Check that user can't signup with empty name and email", () => {
    cy.get(data.signupButton).click();
  });

  it("Check that user can't signup with empty name", () => {
    cy.get(data.signupEmailTextbox).type(data.email);
    cy.get(data.signupButton).click();
  });

  it("Check that user can't signup with empty email", () => {
    cy.get(data.signupNameTextbox).type(data.name);
    cy.get(data.signupButton).click();
  });

  it("Check that user can't signup with invalid email", () => {
    cy.get(data.signupNameTextbox).type(data.name);
    cy.get(data.signupEmailTextbox).type(data.invalidEmail);
    cy.get(data.signupButton).click();
  });

  it("Check that user can signup with valid name, email, and valid details", () => {
    cy.title().should("eq", data.signupAndLoginPageTitle);
    cy.get(data.signupNameTextbox).type(data.name);
    let email = generateEmail();
    cy.get(data.signupEmailTextbox).type(email);
    cy.readFile("emails.txt", { log: false }).then((fileContent) => {
      cy.writeFile("emails.txt", fileContent + email + "\n");
    });
    cy.get(data.signupButton).click();
    cy.title().should("eq", data.signupPageTitle);
    cy.get(data.passwordTextbox).type(data.password);
    cy.get(data.firstNameTextbox).type(data.name);
    cy.get(data.lastNameTextbox).type(data.lastName);
    cy.get(data.addressTextbox).type(data.address);
    cy.get(data.countryDropdownMenu).select(data.country);
    cy.get(data.stateTextbox).type(data.state);
    cy.get(data.cityTextbox).type(data.city);
    cy.get(data.zipcodeTextbox).type(data.zipcode);
    cy.get(data.mobileNumberTextbox).type(data.mobileNumber);
    cy.get(data.createAccountButton).click();
    cy.title().should("eq", data.accountCreatedPageTitle);
    cy.url().should("include", data.accountCreatedPageUrl);
  });

  it("Check that user can't signup with email already registered", () => {
    cy.get(data.signupNameTextbox).type(data.name);
    cy.get(data.signupEmailTextbox).type(data.email);
    cy.get(data.signupButton).click();
    cy.get(data.signupErrorLabel).should("contain", data.emailExistMessage);
  });
});

function generateEmail() {
  let emailBase = "@gmail.com";
  let emailBody = "moaz20ahmed";
  let random = Math.floor(Math.random() * 1000000 + 1);
  let email = `${emailBody}+${random}${emailBase}`;
  return email;
}
