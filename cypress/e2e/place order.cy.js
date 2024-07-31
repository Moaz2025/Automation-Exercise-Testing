describe("place order", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
  });

  // view cart from the message
  it("Check that user can't checkout as a guest", () => {
    cy.get('[class="btn btn-default add-to-cart"]').eq(0).click();
    cy.get('[class="modal-content"]').should(
      "contain",
      "Your product has been added to cart."
    );
    cy.get('[href="/view_cart"]').eq(1).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
    cy.get('[class="btn btn-default check_out"]').click();
    cy.get('[class="modal-body"]').should(
      "contain",
      "Register / Login account to proceed on checkout."
    );
    cy.get('[class="modal-footer"]').contains("Continue On Cart").click();
    cy.url().should("include", "view_cart");
  });

  // view cart from the main cart button
  it("Check that user can't checkout as a guest", () => {
    cy.get('[class="btn btn-default add-to-cart"]').eq(0).click();
    cy.get('[class="modal-content"]').should(
      "contain",
      "Your product has been added to cart."
    );
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
    cy.get('[class="btn btn-default check_out"]').click();
    cy.get('[class="modal-body"]').should(
      "contain",
      "Register / Login account to proceed on checkout."
    );
    cy.get('[class="modal-footer"]').contains("Continue On Cart").click();
    cy.url().should("include", "view_cart");
  });

  it("Check that user can't checkout with empty cart", () => {
    cy.get('[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-password"]').type("Brightskies@123");
    cy.get('[data-qa="login-button"]').click();
    cy.title().should("eq", "Automation Exercise");
    cy.get('[class="col-sm-8"]').should("contain", " Logged in as ");
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[id="empty_cart"]').should("contain", "Cart is empty!");
  });

  it("Check that user can checkout with valid card", () => {
    cy.get('[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="login-password"]').type("Brightskies@123");
    cy.get('[data-qa="login-button"]').click();
    cy.title().should("eq", "Automation Exercise");
    cy.get('[class="col-sm-8"]').should("contain", " Logged in as ");
    cy.get('[class="btn btn-default add-to-cart"]').eq(0).click();
    cy.get('[class="modal-content"]').should(
      "contain",
      "Your product has been added to cart."
    );
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
    cy.get('[href="/view_cart"]').eq(0).click();
    cy.url().should("include", "view_cart");
    cy.get('[class="cart_quantity"]').should("contain", "1");
    cy.get('[class="btn btn-default check_out"]').click();
    cy.url().should("include", "checkout");
    cy.get('[class="btn btn-default check_out"]').click();
    cy.get('[name="name_on_card"]').type("Moaz");
    cy.get('[name="card_number"]').type("5127880999999990");
    cy.get('[name="cvc"]').type("737");
    cy.get('[name="expiry_month"]').type("03");
    cy.get('[name="expiry_year"]').type("2030");
    cy.get('[class="form-control btn btn-primary submit-button"]').click();
    cy.url().should("include", "payment_done");
    cy.get('[class="col-sm-9 col-sm-offset-1"]').should(
      "contain",
      "Order Placed!"
    );
    cy.get('[data-qa="continue-button"]').click();
    cy.url().should("eq", "https://www.automationexercise.com/");
    cy.get('[href="/"]').should("have.css", "color", "rgb(66, 139, 202)");
  });
});
