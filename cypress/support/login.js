Cypress.Commands.add("loginEmail", () => {
  cy.get(data.textboxes.loginEmailTextbox);
});
Cypress.Commands.add("loginPassword", () => {
  cy.get(data.textboxes.loginPasswordTextbox);
});
Cypress.Commands.add("loginButton", () => {
  cy.get(data.buttons.loginButton).click();
});
Cypress.Commands.add("loginErrorLabel", () => {
  cy.get(data.labels.loginErrorLabel);
});
