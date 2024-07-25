describe("contact us form", () => {
  it.only("Check that the user can submit the form successfully with valid data", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/contact_us"]').click();
    cy.url().should("include", "contact_us");
    cy.title().should("eq", "Automation Exercise - Contact Us");
    cy.get('[data-qa="name"]').type("Moaz");
    cy.get('[data-qa="email"]').type("moaz@gmail.com");
    cy.get('[data-qa="subject"]').type("Inquiry");
    cy.get('[data-qa="message"]').type("Hello");
    cy.get('[data-qa="submit-button"]').click();
    cy.get('[class="col-sm-8"]').should(
      "contain",
      "Success! Your details have been submitted successfully."
    );
  });

  it("Check that the user can't submit the form with empty name field", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/contact_us"]').click();
    cy.get('[data-qa="email"]').type("moaz@gmail.com");
    cy.get('[data-qa="subject"]').type("Inquiry");
    cy.get('[data-qa="message"]').type("Hello");
    cy.get('[data-qa="submit-button"]').click();
  });

  it("Check that the user can't submit the form with empty email field", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/contact_us"]').click();
    cy.get('[data-qa="name"]').type("Moaz");
    cy.get('[data-qa="subject"]').type("Inquiry");
    cy.get('[data-qa="message"]').type("Hello");
    cy.get('[data-qa="submit-button"]').click();
  });

  it("Check that the user can't submit the form with empty subject field", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/contact_us"]').click();
    cy.get('[data-qa="name"]').type("Moaz");
    cy.get('[data-qa="email"]').type("moaz@gmail.com");
    cy.get('[data-qa="message"]').type("Hello");
    cy.get('[data-qa="submit-button"]').click();
  });

  it("Check that the user can't submit the form with empty message field", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/contact_us"]').click();
    cy.get('[data-qa="name"]').type("Moaz");
    cy.get('[data-qa="email"]').type("moaz@gmail.com");
    cy.get('[data-qa="subject"]').type("Inquiry");
    cy.get('[data-qa="submit-button"]').click();
  });
});
