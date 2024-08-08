class ContactUsForm {
  contactUsPage() {
    cy.homePage();
    cy.contactUsButton();
    cy.url().should("include", data.urls.contactUsUrl);
    cy.title().should("eq", data.titles.contactUsPageTitle);
  }
  contactName() {
    cy.contactName().type(data.testData.name);
  }
  contactEmail() {
    cy.email().type(data.testData.email);
  }
  contactSubject() {
    cy.contactSubject().type(data.testData.subject);
  }
  contactMessage() {
    cy.message().type(data.testData.message);
  }
  submitButton() {
    cy.submitButton();
  }
}
export default ContactUsForm;
