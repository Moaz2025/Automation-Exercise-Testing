describe("signup", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.signupAndLoginPageButton).click();
  });

  it("Check that user can't signup with empty name and email", () => {
    cy.get(data.buttons.signupButton).click();
  });

  it("Check that user can't signup with empty name", () => {
    cy.get(data.textboxes.signupEmailTextbox).type(data.testData.email);
    cy.get(data.buttons.signupButton).click();
  });

  it("Check that user can't signup with empty email", () => {
    cy.get(data.textboxes.signupNameTextbox).type(data.testData.name);
    cy.get(data.buttons.signupButton).click();
  });

  it("Check that user can't signup with invalid email", () => {
    cy.get(data.textboxes.signupNameTextbox).type(data.testData.name);
    cy.get(data.textboxes.signupEmailTextbox).type(data.testData.invalidEmail);
    cy.get(data.buttons.signupButton).click();
  });

  it("Check that user can signup with valid name, email, and valid details", () => {
    cy.title().should("eq", data.titles.signupAndLoginPageTitle);
    cy.get(data.textboxes.signupNameTextbox).type(data.testData.name);
    let email = generateEmail();
    cy.get(data.textboxes.signupEmailTextbox).type(email);
    cy.readFile("emails.txt", { log: false }).then((fileContent) => {
      cy.writeFile("emails.txt", fileContent + email + "\n");
    });
    cy.get(data.buttons.signupButton).click();
    cy.title().should("eq", data.titles.signupPageTitle);
    cy.get(data.textboxes.passwordTextbox).type(data.testData.password);
    cy.get(data.textboxes.firstNameTextbox).type(data.testData.name);
    cy.get(data.textboxes.lastNameTextbox).type(data.testData.lastName);
    cy.get(data.textboxes.addressTextbox).type(data.testData.address);
    cy.get(data.selectors.countryDropdownMenu).select(data.testData.country);
    cy.get(data.textboxes.stateTextbox).type(data.testData.state);
    cy.get(data.textboxes.cityTextbox).type(data.testData.city);
    cy.get(data.textboxes.zipcodeTextbox).type(data.testData.zipcode);
    cy.get(data.textboxes.mobileNumberTextbox).type(data.testData.mobileNumber);
    cy.get(data.buttons.createAccountButton).click();
    cy.title().should("eq", data.titles.accountCreatedPageTitle);
    cy.url().should("include", data.urls.accountCreatedPageUrl);
  });

  it("Check that user can't signup with email already registered", () => {
    cy.get(data.textboxes.signupNameTextbox).type(data.testData.name);
    cy.get(data.textboxes.signupEmailTextbox).type(data.testData.email);
    cy.get(data.buttons.signupButton).click();
    cy.get(data.labels.signupErrorLabel).should(
      "contain",
      data.messages.emailExistMessage
    );
  });
});

function generateEmail() {
  let emailBase = "@gmail.com";
  let emailBody = "moaz20ahmed";
  let random = Math.floor(Math.random() * 1000000 + 1);
  let email = `${emailBody}+${random}${emailBase}`;
  return email;
}
