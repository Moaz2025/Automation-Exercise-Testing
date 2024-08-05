Cypress.Commands.add("checkoutButton", () => {
  cy.get(data.buttons.checkoutButton).click();
});
Cypress.Commands.add("ckeckoutPopupBox", () => {
  cy.get(data.selectors.ckeckoutPopupBox);
});
Cypress.Commands.add("emptyCartBox", () => {
  cy.get(data.selectors.emptyCartBox);
});
Cypress.Commands.add("placeOrderButton", () => {
  cy.get(data.buttons.placeOrderButton).click();
});
Cypress.Commands.add("nameOnCard", () => {
  cy.get(data.textboxes.nameOnCardTextbox);
});
Cypress.Commands.add("cardNumber", () => {
  cy.get(data.textboxes.cardNumberTextbox);
});
Cypress.Commands.add("cvc", () => {
  cy.get(data.textboxes.cvcTextbox);
});
Cypress.Commands.add("expiryMonth", () => {
  cy.get(data.textboxes.expiryMonthTextbox);
});
Cypress.Commands.add("expiryYear", () => {
  cy.get(data.textboxes.expiryYearTextbox);
});
Cypress.Commands.add("payAndConfirmOrderButton", () => {
  cy.get(data.buttons.payAndConfirmOrderButton).click();
});
Cypress.Commands.add("orderPlacedBox", () => {
  cy.get(data.selectors.orderPlacedBox);
});
Cypress.Commands.add("continueButton", () => {
  cy.get(data.buttons.continueButton).click();
});
