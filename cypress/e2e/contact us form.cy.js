import ContactUsForm from "../support/POM/contact us form";
const contactUsForm = new ContactUsForm();

describe("contact us form", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    contactUsForm.contactUsPage();
  });

  it("Check that the user can submit the form successfully with valid data", () => {
    contactUsForm.contactName();
    contactUsForm.contactEmail();
    contactUsForm.contactSubject();
    contactUsForm.contactMessage();
    contactUsForm.submitButton();
    cy.contactForm().should("contain", data.messages.contactUsSuccessMessage);
  });

  it("Check that the user can't submit the form with empty name field", () => {
    contactUsForm.contactEmail();
    contactUsForm.contactSubject();
    contactUsForm.contactMessage();
    contactUsForm.submitButton();
  });

  it("Check that the user can't submit the form with empty email field", () => {
    contactUsForm.contactName();
    contactUsForm.contactSubject();
    contactUsForm.contactMessage();
    contactUsForm.submitButton();
  });

  it("Check that the user can't submit the form with empty subject field", () => {
    contactUsForm.contactName();
    contactUsForm.contactEmail();
    contactUsForm.contactMessage();
    contactUsForm.submitButton();
  });

  it("Check that the user can't submit the form with empty message field", () => {
    contactUsForm.contactName();
    contactUsForm.contactEmail();
    contactUsForm.contactSubject();
    contactUsForm.submitButton();
  });
});
