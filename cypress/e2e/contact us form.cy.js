describe("contact us form", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.contactUsButton).click();
    cy.url().should("include", data.urls.contactUsUrl);
    cy.title().should("eq", data.titles.contactUsPageTitle);
  });

  it("Check that the user can submit the form successfully with valid data", () => {
    cy.get(data.textboxes.nameTextbox).type(data.testData.name);
    cy.get(data.textboxes.emailTextbox).type(data.testData.email);
    cy.get(data.textboxes.subjectTextbox).type(data.testData.subject);
    cy.get(data.textboxes.messageTextbox).type(data.testData.message);
    cy.get(data.buttons.submitButton).click();
    cy.get(data.selectors.contactForm).should(
      "contain",
      data.messages.contactUsSuccessMessage
    );
  });

  it("Check that the user can't submit the form with empty name field", () => {
    cy.get(data.textboxes.emailTextbox).type(data.testData.email);
    cy.get(data.textboxes.subjectTextbox).type(data.testData.subject);
    cy.get(data.textboxes.messageTextbox).type(data.testData.message);
    cy.get(data.buttons.submitButton).click();
  });

  it("Check that the user can't submit the form with empty email field", () => {
    cy.get(data.textboxes.nameTextbox).type(data.testData.name);
    cy.get(data.textboxes.subjectTextbox).type(data.testData.subject);
    cy.get(data.textboxes.messageTextbox).type(data.testData.message);
    cy.get(data.buttons.submitButton).click();
  });

  it("Check that the user can't submit the form with empty subject field", () => {
    cy.get(data.textboxes.nameTextbox).type(data.testData.name);
    cy.get(data.textboxes.emailTextbox).type(data.testData.email);
    cy.get(data.textboxes.messageTextbox).type(data.testData.message);
    cy.get(data.buttons.submitButton).click();
  });

  it("Check that the user can't submit the form with empty message field", () => {
    cy.get(data.textboxes.nameTextbox).type(data.testData.name);
    cy.get(data.textboxes.emailTextbox).type(data.testData.email);
    cy.get(data.textboxes.subjectTextbox).type(data.testData.subject);
    cy.get(data.buttons.submitButton).click();
  });
});
