import PlaceOrder from "../support/POM/place order";
import AddToCart from "../support/POM/add to cart";

const placeOrder = new PlaceOrder();
const addToCart = new AddToCart();

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
    addToCart.addFirstProductToCart();
    addToCart.cartButton(1);
    addToCart.cartItemQuantity(1);
    placeOrder.checkoutButton();
    placeOrder.checkoutAsGuest();
  });

  // view cart from the main cart button
  it("Check that user can't checkout as a guest", () => {
    addToCart.addFirstProductToCart();
    addToCart.continueShoppingButton();
    addToCart.cartButton(0);
    addToCart.cartItemQuantity(1);
    placeOrder.checkoutButton();
    placeOrder.checkoutAsGuest();
  });

  it("Check that user can't checkout with empty cart", () => {
    placeOrder.login();
    addToCart.cartButton(0);
    cy.emptyCartBox().should("contain", data.messages.emptyCartMessage);
  });

  it("Check that user can checkout with valid card", () => {
    placeOrder.login();
    addToCart.addFirstProductToCart();
    addToCart.continueShoppingButton();
    addToCart.cartButton(0);
    // addToCart.cartItemQuantity(1);
    placeOrder.checkoutButton();
    placeOrder.enterCardDataAndConfirmOrder();
    cy.url().should("eq", data.urls.homePageUrl);
    cy.homeButton().should(
      "have.css",
      "color",
      data.selectors.colorOfSelectedPage
    );
  });
});
