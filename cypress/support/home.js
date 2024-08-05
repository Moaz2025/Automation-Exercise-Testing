Cypress.Commands.add("homePage", () => {
  cy.visit(data.urls.homePageUrl);
});
Cypress.Commands.add("shopMenu", () => {
  cy.get(data.selectors.shopMenu);
});
Cypress.Commands.add("logoutButton", () => {
  cy.get(data.buttons.logoutButton);
});
Cypress.Commands.add("deleteAccountButton", () => {
  cy.get(data.buttons.deleteAccountButton);
});
Cypress.Commands.add("homeButton", () => {
  cy.get(data.buttons.homeButton).eq(1);
});
Cypress.Commands.add("leftSidebar", () => {
  cy.get(data.selectors.leftSidebar);
});
Cypress.Commands.add("brandsProducts", () => {
  cy.get(data.selectors.brandsProducts);
});
Cypress.Commands.add("slider", () => {
  cy.get(data.selectors.slider);
});
Cypress.Commands.add("contactUsButton", () => {
  cy.get(data.buttons.contactUsButton).click();
});
