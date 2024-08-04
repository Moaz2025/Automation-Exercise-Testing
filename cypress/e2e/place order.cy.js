describe("place order", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
  });

  // view cart from the message
  it("Check that user can't checkout as a guest", () => {
    cy.get(data.buttons.addToCartButton).eq(0).click();
    cy.get(data.selectors.addedToCartPopupBox).should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.get(data.buttons.cartButton).eq(1).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
    cy.get(data.buttons.checkoutButton).click();
    cy.get(data.selectors.ckeckoutPopupBox).should(
      "contain",
      data.messages.checkoutAsGuestMessage
    );
    cy.get(data.selectors.ckeckoutPopupBox)
      .contains(data.buttons.continueOnCartButton)
      .click();
    cy.url().should("include", data.urls.cartUrl);
  });

  // view cart from the main cart button
  it("Check that user can't checkout as a guest", () => {
    cy.get(data.buttons.addToCartButton).eq(0).click();
    cy.get(data.selectors.addedToCartPopupBox).should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
    cy.get(data.buttons.checkoutButton).click();
    cy.get(data.selectors.ckeckoutPopupBox).should(
      "contain",
      data.messages.checkoutAsGuestMessage
    );
    cy.get(data.selectors.ckeckoutPopupBox)
      .contains(data.buttons.continueOnCartButton)
      .click();
    cy.url().should("include", data.urls.cartUrl);
  });

  it("Check that user can't checkout with empty cart", () => {
    cy.get(data.buttons.signupAndLoginPageButton).click();
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.get(data.selectors.shopMenu).should("contain", data.labels.loginStatus);
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.selectors.emptyCartBox).should(
      "contain",
      data.messages.emptyCartMessage
    );
  });

  it("Check that user can checkout with valid card", () => {
    cy.get(data.buttons.signupAndLoginPageButton).click();
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.get(data.selectors.shopMenu).should("contain", data.labels.loginStatus);
    cy.get(data.buttons.addToCartButton).eq(0).click();
    cy.get(data.selectors.addedToCartPopupBox).should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
    cy.get(data.buttons.checkoutButton).click();
    cy.url().should("include", data.urls.checkoutUrl);
    cy.get(data.buttons.placeOrderButton).click();
    cy.get(data.textboxes.nameOnCardTextbox).type(data.testData.name);
    cy.get(data.textboxes.cardNumberTextbox).type(data.testData.cardNumber);
    cy.get(data.textboxes.cvcTextbox).type(data.testData.cvc);
    cy.get(data.textboxes.expiryMonthTextbox).type(data.testData.expiryMonth);
    cy.get(data.textboxes.expiryYearTextbox).type(data.testData.expiryYear);
    cy.get(data.buttons.payAndConfirmOrderButton).click();
    cy.url().should("include", data.urls.orderPlacedUrl);
    cy.get(data.selectors.orderPlacedBox).should(
      "contain",
      data.messages.orderPlacedMessage
    );
    cy.get(data.buttons.continueButton).click();
    cy.url().should("eq", data.urls.homePageUrl);
    cy.get(data.buttons.homeButton).should(
      "have.css",
      "color",
      data.selectors.colorOfSelectedPage
    );
  });
});
