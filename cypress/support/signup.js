Cypress.Commands.add("signupAndLoginPageButton", () => {
  cy.get(data.buttons.signupAndLoginPageButton).click();
});
Cypress.Commands.add("signupName", () => {
  cy.get(data.textboxes.signupNameTextbox);
});
Cypress.Commands.add("signupEmail", () => {
  cy.get(data.textboxes.signupEmailTextbox);
});
Cypress.Commands.add("signupButton", () => {
  cy.get(data.buttons.signupButton).click();
});
Cypress.Commands.add("password", () => {
  cy.get(data.textboxes.passwordTextbox);
});
Cypress.Commands.add("firstName", () => {
  cy.get(data.textboxes.firstNameTextbox);
});
Cypress.Commands.add("lastName", () => {
  cy.get(data.textboxes.lastNameTextbox);
});
Cypress.Commands.add("address", () => {
  cy.get(data.textboxes.addressTextbox);
});
Cypress.Commands.add("country", () => {
  cy.get(data.selectors.countryDropdownMenu);
});
Cypress.Commands.add("states", () => {
  cy.get(data.textboxes.stateTextbox);
});
Cypress.Commands.add("city", () => {
  cy.get(data.textboxes.cityTextbox);
});
Cypress.Commands.add("zipcode", () => {
  cy.get(data.textboxes.zipcodeTextbox);
});
Cypress.Commands.add("mobileNumber", () => {
  cy.get(data.textboxes.mobileNumberTextbox);
});
Cypress.Commands.add("createAccountButton", () => {
  cy.get(data.buttons.createAccountButton).click();
});
Cypress.Commands.add("signupErrorLabel", () => {
  cy.get(data.labels.signupErrorLabel);
});
