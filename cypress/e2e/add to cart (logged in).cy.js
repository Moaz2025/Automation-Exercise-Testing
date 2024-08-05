describe("add to cart (logged in)", { testIsolation: false }, () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  before(() => {
    cy.clearAllCookies();
    cy.homePage();
    cy.signupAndLoginPageButton();
    cy.loginEmail().type(data.testData.email);
    cy.loginPassword().type(data.testData.password);
    cy.loginButton();
    cy.title().should("eq", data.titles.homePageTitle);
    cy.shopMenu().should("contain", data.labels.loginStatus);
  });

  beforeEach(() => {
    cy.addToCartButton();
    cy.addedToCartPopupBox().should(
      "contain",
      data.messages.addedToCartMessage
    );
  });

  afterEach(() => {
    cy.cartQuantityDeleteButton();
    cy.shopMenu().contains(data.selectors.homeButtonText).click();
  });

  after(() => {
    cy.logoutButton().click();
    cy.url().should("include", data.urls.signupAndLoginPageUrl);
  });

  // view cart from the message
  it("Check that user (logged in) can add a product to cart", () => {
    cy.cartButton().eq(1).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "1");
  });

  // view cart from the main cart button
  it("Check that user (logged in) can add a product to cart", () => {
    cy.continueShoppingButton();
    cy.cartButton().eq(0).click();
    cy.url().should("include", data.urls.cartUrl);
    cy.cartItemQuantity().should("contain", "1");
  });

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding it one more time", () => {
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

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding more of it", () => {
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
