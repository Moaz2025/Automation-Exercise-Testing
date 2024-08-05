describe("contact us form", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    cy.contactUsButton();
    cy.url().should("include", data.urls.contactUsUrl);
    cy.title().should("eq", data.titles.contactUsPageTitle);
  });

  it("Check that the user can submit the form successfully with valid data", () => {
    cy.contactName().type(data.testData.name);
    cy.email().type(data.testData.email);
    cy.contactSubject().type(data.testData.subject);
    cy.message().type(data.testData.message);
    cy.submitButton();
    cy.contactForm().should("contain", data.messages.contactUsSuccessMessage);
  });

  it("Check that the user can't submit the form with empty name field", () => {
    cy.email().type(data.testData.email);
    cy.contactSubject().type(data.testData.subject);
    cy.message().type(data.testData.message);
    cy.submitButton();
  });

  it("Check that the user can't submit the form with empty email field", () => {
    cy.contactName().type(data.testData.name);
    cy.contactSubject().type(data.testData.subject);
    cy.message().type(data.testData.message);
    cy.submitButton();
  });

  it("Check that the user can't submit the form with empty subject field", () => {
    cy.contactName().type(data.testData.name);
    cy.email().type(data.testData.email);
    cy.message().type(data.testData.message);
    cy.submitButton();
  });

  it("Check that the user can't submit the form with empty message field", () => {
    cy.contactName().type(data.testData.name);
    cy.email().type(data.testData.email);
    cy.contactSubject().type(data.testData.subject);
    cy.submitButton();
  });
});
