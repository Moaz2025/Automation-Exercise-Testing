describe("add to cart", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[class="btn btn-default add-to-cart"]').eq(0).click();
    cy.get('[class="modal-content"]').should(
      "contain",
      "Your product has been added to cart."
    );
  });

  // view cart from the message
  it("Check that user (as a guest) can add a product to cart", () => {
    cy.get('[href="/view_cart"]').eq(1).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
  });

  // view cart from the main cart button
  it("Check that user (as a guest) can add a product to cart", () => {
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
  });

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding it one more time", () => {
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

  it("Check that user (as a guest) can increase the quantity of a product in the cart by adding more of it", () => {
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
