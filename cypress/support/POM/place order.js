class PlaceOrder {
  checkoutButton() {
    cy.checkoutButton();
  }
  checkoutAsGuest() {
    cy.ckeckoutPopupBox().should(
      "contain",
      data.messages.checkoutAsGuestMessage
    );
    cy.ckeckoutPopupBox().contains(data.buttons.continueOnCartButton).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartQuantityDeleteButton();
  }
  login() {
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
  }
  enterCardDataAndConfirmOrder() {
    cy.url().should("include", data.urls.checkoutUrl);
    cy.placeOrderButton();
    cy.nameOnCard().type(data.testData.name);
    cy.cardNumber().type(data.testData.cardNumber);
    cy.cvc().type(data.testData.cvc);
    cy.expiryMonth().type(data.testData.expiryMonth);
    cy.expiryYear().type(data.testData.expiryYear);
    cy.payAndConfirmOrderButton();
    cy.url().should("include", data.urls.orderPlacedUrl);
    cy.orderPlacedBox().should("contain", data.messages.orderPlacedMessage);
    cy.continueButton();
  }
}
export default PlaceOrder;
