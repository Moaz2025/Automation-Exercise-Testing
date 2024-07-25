describe("contact us", () => {
  it.skip("[1] visit the website", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  });

  it.skip("[2] how to select elements by id", () => {
    cy.visit("https://webdriveruniversity.com/");

    // select element by id --> # plus value of id
    cy.get("#contact-us").click();
  });

  it.skip("[3] how to select elements by class", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    // select element by class --> dot plus class name
    cy.get(".contact_button").first().click();
    //cy.get(".contact_button").last().click();
  });

  it.skip("[4] how to select elements by attribute or css selector", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.title().should("eq", "WebDriver | Contact Us");
    // select element by attribute or css selector
    cy.get('[name="first_name"]').type("Moaz");
    cy.get('[name="last_name"]').type("Ahmed");
    cy.get('[name="email"]').type("moaz@gmail.com");
    // select element by class
    cy.get(".feedback-input").eq(3).type("this is an automation test");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "contact-form-thank-you");
    cy.title().should("eq", "Gianni Bruno - Designer");
  });

  it.skip("[5] how to find elements by class name", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.wait(2000);
    cy.get(".container:nth(1)");
  });

  it("[6] assertion by attributes and css", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get('[href="Contact-Us/contactus.html"]').should(
      "have.attr",
      "target",
      "_blank"
    );
    cy.get('[href="Contact-Us/contactus.html"]').should(
      "have.css",
      "font-size",
      "14px"
    );
  });
});
