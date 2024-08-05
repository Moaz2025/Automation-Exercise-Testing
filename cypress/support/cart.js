Cypress.Commands.add("addToCartButton", () => {
  cy.get(data.buttons.addToCartButton).eq(0).click();
});
Cypress.Commands.add("addedToCartPopupBox", () => {
  cy.get(data.selectors.addedToCartPopupBox);
});
Cypress.Commands.add("cartButton", () => {
  cy.get(data.buttons.cartButton);
});
Cypress.Commands.add("cartItemQuantity", () => {
  cy.get(data.labels.cartItemQuantity);
});
Cypress.Commands.add("continueShoppingButton", () => {
  cy.get(data.buttons.continueShoppingButton).click();
});
Cypress.Commands.add("viewProduct1Button", () => {
  cy.get(data.buttons.viewProduct1Button).click();
});
Cypress.Commands.add("quantityTextbox", () => {
  cy.get(data.textboxes.quantityTextbox);
});
Cypress.Commands.add("addToCartButtonAtDetailsPage", () => {
  cy.get(data.buttons.addToCartButtonAtDetailsPage).click();
});
Cypress.Commands.add("cartQuantityDeleteButton", () => {
  cy.get(data.buttons.cartQuantityDeleteButton).click();
});
