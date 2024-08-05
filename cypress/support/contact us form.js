Cypress.Commands.add("contactName", () => {
  cy.get(data.textboxes.nameTextbox);
});
Cypress.Commands.add("email", () => {
  cy.get(data.textboxes.emailTextbox);
});
Cypress.Commands.add("contactSubject", () => {
  cy.get(data.textboxes.subjectTextbox);
});
Cypress.Commands.add("message", () => {
  cy.get(data.textboxes.messageTextbox);
});
Cypress.Commands.add("submitButton", () => {
  cy.get(data.buttons.submitButton).click();
});
Cypress.Commands.add("contactForm", () => {
  cy.get(data.selectors.contactForm);
});
