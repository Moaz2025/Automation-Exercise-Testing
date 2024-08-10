class AddToCart {
  addFirstProductToCart() {
    cy.addToCartButton();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
  }
  continueShoppingButton() {
    cy.continueShoppingButton();
  }
  cartButton(choice) {
    cy.cartButton().eq(choice).click();
    cy.url().should("include", data.urls.cartUrl);
  }
  cartItemQuantity(quantity) {
    cy.cartItemQuantity().should("contain", quantity);
  }
  clearCookiesAndLogin() {
    cy.clearAllCookies();
    cy.homePage();
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
  }
  addMoreOfFirstProduct() {
    cy.viewProduct1Button();
    cy.url().should("include", data.urls.productDetailsPageUrl + "1");
    cy.quantityTextbox().clear();
    cy.quantityTextbox().type("4");
    cy.addToCartButtonAtDetailsPage();
  }
}
export default AddToCart;
