import AddToCart from "../support/POM/add to cart";
import Logout from "../support/POM/logout";

const addToCart = new AddToCart();
const logout = new Logout();

describe("add to cart (logged in)", { testIsolation: false }, () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  before(() => {
    addToCart.clearCookiesAndLogin();
  });

  beforeEach(() => {
    addToCart.addFirstProductToCart();
  });

  afterEach(() => {
    cy.cartQuantityDeleteButton();
    cy.shopMenu().contains(data.selectors.homeButtonText).click();
  });

  after(() => {
    logout.logout();
  });

  // view cart from the message
  it("Check that user (logged in) can add a product to cart", () => {
    addToCart.cartButton(1);
    addToCart.cartItemQuantity(1);
  });

  // view cart from the main cart button
  it("Check that user (logged in) can add a product to cart", () => {
    addToCart.continueShoppingButton();
    addToCart.cartButton(0);
    addToCart.cartItemQuantity(1);
  });

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding it one more time", () => {
    addToCart.continueShoppingButton();
    addToCart.addFirstProductToCart();
    addToCart.continueShoppingButton();
    addToCart.cartButton(0);
    // addToCart.cartItemQuantity(2);
  });

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding more of it", () => {
    addToCart.continueShoppingButton();
    addToCart.addMoreOfFirstProduct();
    addToCart.cartButton(0);
    addToCart.cartItemQuantity(5);
  });
});
