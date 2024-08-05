describe("add to cart", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    cy.addToCartButton();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
  });

  after(() => {
    cy.cartQuantityDeleteButton();
  });

  // view cart from the message
  it("Check that user (as a guest) can add a product to cart", () => {
    cy.cartButton().eq(1).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "1");
  });

  // view cart from the main cart button
  it("Check that user (as a guest) can add a product to cart", () => {
    cy.continueShoppingButton();
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "1");
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding it one more time", () => {
    cy.continueShoppingButton();
    cy.addToCartButton().eq(0).click();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
    cy.continueShoppingButton();
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    //cy.cartItemQuantity().should("contain", "2");
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding more of it", () => {
    cy.continueShoppingButton();
    cy.viewProduct1Button();
    cy.url().should("include", data.urls.productDetailsPageUrl + "1");
    cy.quantityTextbox().clear();
    cy.quantityTextbox().type("4");
    cy.addToCartButtonAtDetailsPage();
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "5");
  });
});
