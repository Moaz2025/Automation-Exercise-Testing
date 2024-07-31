describe("add to cart (logged in)", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-password"]').type("Brightskies@123");
    cy.get('[data-qa="login-button"]').click();
    cy.title().should("eq", "Automation Exercise");
    cy.get('[class="col-sm-8"]').should("contain", " Logged in as ");
  });

  beforeEach(() => {
    cy.get('[class="btn btn-default add-to-cart"]').eq(0).click();
    cy.get('[class="modal-content"]').should(
      "contain",
      "Your product has been added to cart."
    );
  });

  afterEach(() => {
    cy.get('[class="cart_quantity_delete"]').click();
    cy.get('[class="col-sm-8"]').contains(" Home").click();
  });

  after(() => {
    cy.get('[href="/logout"]').click();
    cy.url().should("include", "login");
  });

  // view cart from the message
  it("Check that user (logged in) can add a product to cart", () => {
    cy.get('[href="/view_cart"]').eq(1).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
  });

  // view cart from the main cart button
  it("Check that user (logged in) can add a product to cart", () => {
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
  });

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding it one more time", () => {
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[class="btn btn-default add-to-cart"]').eq(0).click();
    cy.get('[class="modal-content"]').should(
      "contain",
      "Your product has been added to cart."
    );
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "2");
  });

  it("Check that user (logged in) can increase the quantity of a product in the cart by adding more of it", () => {
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[href="/product_details/1"]').click();
    cy.url().should("include", "/product_details/1");
    cy.get('[name="quantity"]').clear();
    cy.get('[name="quantity"]').type("4");
    cy.get('[class="btn btn-default cart"]').click();
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "5");
  });
});
