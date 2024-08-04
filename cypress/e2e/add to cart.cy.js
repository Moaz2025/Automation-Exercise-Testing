describe("add to cart", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.addToCartButton).eq(0).click();
    cy.get(data.selectors.addedToCartPopupBox).should(
      "contain",
      data.messages.addedToCartMessage
    );
  });

  // view cart from the message
  it("Check that user (as a guest) can add a product to cart", () => {
    cy.get(data.buttons.cartButton).eq(1).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
  });

  // view cart from the main cart button
  it("Check that user (as a guest) can add a product to cart", () => {
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding it one more time", () => {
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.addToCartButton).eq(0).click();
    cy.get(data.selectors.addedToCartPopupBox).should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "2");
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding more of it", () => {
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.viewProduct1Button).click();
    cy.url().should("include", data.urls.productDetailsPageUrl + "1");
    cy.get(data.textboxes.quantityTextbox).clear();
    cy.get(data.textboxes.quantityTextbox).type("4");
    cy.get(data.buttons.addToCartButtonAtDetailsPage).click();
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "5");
  });
});
