import AddToCart from "../support/POM/add to cart";
const addToCart = new AddToCart();

describe("add to cart", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.homePage();
    addToCart.addFirstProductToCart();
  });

  after(() => {
    cy.cartQuantityDeleteButton();
  });

  // view cart from the message
  it("Check that user (as a guest) can add a product to cart", () => {
    addToCart.cartButton(1);
    addToCart.cartItemQuantity(1);
  });

  // view cart from the main cart button
  it("Check that user (as a guest) can add a product to cart", () => {
    addToCart.continueShoppingButton();
    addToCart.cartButton(0);
    addToCart.cartItemQuantity(1);
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding it one more time", () => {
    addToCart.continueShoppingButton();
    addToCart.addFirstProductToCart();
    addToCart.continueShoppingButton();
    addToCart.cartButton(0);
    // addToCart.cartItemQuantity(2);
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding more of it", () => {
    addToCart.continueShoppingButton();
    addToCart.addMoreOfFirstProduct();
    addToCart.cartButton(0);
    addToCart.cartItemQuantity(5);
  });
});
