describe("place order", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
  });

  // view cart from the message
  it("Check that user can't checkout as a guest", () => {
    cy.addToCartButton();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.cartButton().eq(1).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "1");
    cy.checkoutButton();
    cy.ckeckoutPopupBox().should(
      "contain",
      data.messages.checkoutAsGuestMessage
    );
    cy.ckeckoutPopupBox().contains(data.buttons.continueOnCartButton).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartQuantityDeleteButton();
  });

  // view cart from the main cart button
  it("Check that user can't checkout as a guest", () => {
    cy.addToCartButton();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.continueShoppingButton();
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "1");
    cy.checkoutButton();
    cy.ckeckoutPopupBox().should(
      "contain",
      data.messages.checkoutAsGuestMessage
    );
    cy.ckeckoutPopupBox().contains(data.buttons.continueOnCartButton).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartQuantityDeleteButton();
  });

  it("Check that user can't checkout with empty cart", () => {
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.emptyCartBox().should("contain", data.messages.emptyCartMessage);
  });

  it("Check that user can checkout with valid card", () => {
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
    cy.addToCartButton().eq(0).click();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.continueShoppingButton();
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    //cy.cartItemQuantity().should("contain", "1");
    cy.checkoutButton();
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
    cy.url().should("eq", data.urls.homePageUrl);
    cy.homeButton().should(
      "have.css",
      "color",
      data.selectors.colorOfSelectedPage
    );
  });
});
