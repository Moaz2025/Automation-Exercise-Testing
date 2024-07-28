describe("signup", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('[href="/login"]').click();
  });

  it("Check that user can't signup with empty name and email", () => {
    cy.get('[data-qa="signup-button"]').click();
  });

  it("Check that user can't signup with empty name", () => {
    cy.get('[data-qa="signup-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
  });

  it("Check that user can't signup with empty email", () => {
    cy.get('[data-qa="signup-name"]').type("Moaz");
    cy.get('[data-qa="signup-button"]').click();
  });

  it("Check that user can't signup with invalid email", () => {
    cy.get('[data-qa="signup-name"]').type("Moaz");
    cy.get('[data-qa="signup-email"]').type("moaz#gmail.com");
    cy.get('[data-qa="signup-button"]').click();
  });

  it("Check that user can signup with valid name, email, and valid details", () => {
    cy.title().should("eq", "Automation Exercise - Signup / Login");
    cy.get('[data-qa="signup-name"]').type("Moaz");
    let email = generateEmail();
    cy.get('[data-qa="signup-email"]').type(email);
    cy.readFile("emails.txt", { log: false }).then((fileContent) => {
      cy.writeFile("emails.txt", fileContent + email + "\n");
    });
    cy.get('[data-qa="signup-button"]').click();
    cy.title().should("eq", "Automation Exercise - Signup");
    cy.get('[type="password"]').type("Brightskies@123");
    cy.get('[id="first_name"]').type("Moaz");
    cy.get('[id="last_name"]').type("Ahmed");
    cy.get('[name="address1"]').type("Flowers Avenue, CA");
    cy.get('[name="country"]').select("United States");
    cy.get('[data-qa="state"]').type("CA");
    cy.get('[data-qa="city"]').type("San");
    cy.get('[data-qa="zipcode"]').type("21444");
    cy.get('[data-qa="mobile_number"]').type("01567436541");
    cy.get('[data-qa="create-account"]').click();
    cy.title().should("eq", "Automation Exercise - Account Created");
    cy.url().should("include", "account_created");
  });

  it("Check that user can't signup with email already registered", () => {
    cy.get('[data-qa="signup-name"]').type("Moaz");
    cy.get('[data-qa="signup-email"]').type("moaz@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[action="/signup"]').should(
      "contain",
      "Email Address already exist!"
    );
  });
});

function generateEmail() {
  let emailBase = "@gmail.com";
  let emailBody = "moaz20ahmed";
  let random = Math.floor(Math.random() * 1000000 + 1);
  let email = `${emailBody}+${random}${emailBase}`;
  return email;
}
