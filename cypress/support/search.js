Cypress.Commands.add("productsButton", () => {
  cy.get(data.buttons.productsButton).click();
});
Cypress.Commands.add("search", () => {
  cy.get(data.textboxes.searchBox);
});
Cypress.Commands.add("searchButton", () => {
  cy.get(data.buttons.searchButton).click();
});
