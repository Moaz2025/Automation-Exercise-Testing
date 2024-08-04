describe("add to cart (logged in)", { testIsolation: false }, () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  before(() => {
    cy.clearAllCookies();
    cy.visit(data.urls.homePageUrl);
    cy.get(data.buttons.signupAndLoginPageButton).click();
    cy.get(data.textboxes.loginEmailTextbox).type(data.testData.email);
    cy.get(data.textboxes.loginPasswordTextbox).type(data.testData.password);
    cy.get(data.buttons.loginButton).click();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.get(data.selectors.shopMenu).should("contain", data.labels.loginStatus);
  });

  beforeEach(() => {
    cy.get(data.buttons.addToCartButton).eq(0).click();
    cy.get(data.selectors.addedToCartPopupBox).should(
      "contain",
      data.messages.addedToCartMessage
    );
  });

  afterEach(() => {
    cy.get(data.buttons.cartQuantityDeleteButton).click();
    cy.get(data.selectors.shopMenu)
      .contains(data.selectors.homeButtonText)
      .click();
  });

  after(() => {
    cy.get(data.buttons.logoutButton).click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
  });

  // view cart from the message
  it("Check that user (logged in) can add a product to cart", () => {
    cy.get(data.buttons.cartButton).eq(1).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
  });

  // view cart from the main cart button
  it("Check that user (logged in) can add a product to cart", () => {
    cy.get(data.buttons.continueShoppingButton).click();
    cy.get(data.buttons.cartButton).eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.get(data.labels.cartItemQuantity).should("contain", "1");
  });

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding it one more time", () => {
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

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding more of it", () => {
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
