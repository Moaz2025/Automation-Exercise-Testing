describe("contact us form", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.homePageUrl);
    cy.get(data.contactUsButton).click();
    cy.url().should("include", data.contactUsUrl);
    cy.title().should("eq", data.contactUsPageTitle);
  });

  it("Check that the user can submit the form successfully with valid data", () => {
    cy.get(data.nameTextbox).type(data.name);
    cy.get(data.emailTextbox).type(data.email);
    cy.get(data.subjectTextbox).type(data.subject);
    cy.get(data.messagetextbox).type(data.message);
    cy.get(data.submitButton).click();
    cy.get(data.contactForm).should("contain", data.contactUsSuccessMessage);
  });

  it("Check that the user can't submit the form with empty name field", () => {
    cy.get(data.emailTextbox).type(data.email);
    cy.get(data.subjectTextbox).type(data.subject);
    cy.get(data.messagetextbox).type(data.message);
    cy.get(data.submitButton).click();
  });

  it("Check that the user can't submit the form with empty email field", () => {
    cy.get(data.nameTextbox).type(data.name);
    cy.get(data.subjectTextbox).type(data.subject);
    cy.get(data.messagetextbox).type(data.message);
    cy.get(data.submitButton).click();
  });

  it("Check that the user can't submit the form with empty subject field", () => {
    cy.get(data.nameTextbox).type(data.name);
    cy.get(data.emailTextbox).type(data.email);
    cy.get(data.messagetextbox).type(data.message);
    cy.get(data.submitButton).click();
  });

  it("Check that the user can't submit the form with empty message field", () => {
    cy.get(data.nameTextbox).type(data.name);
    cy.get(data.emailTextbox).type(data.email);
    cy.get(data.subjectTextbox).type(data.subject);
    cy.get(data.submitButton).click();
  });
});
