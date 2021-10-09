describe("Initial cypress", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Correct cards rendered", () => {
    cy.get(".mainPage__card").should("have.length", 2);
    cy.get(".mainPage__card h2")
      .first()
      .should("have.text", "Pierwszy dzień badania");
    cy.get(".mainPage__card h2")
      .last()
      .should("have.text", "Drugi dzień badania");
  });
  it("Visit first day of experminet", () => {
    cy.get(".mainPage__card h2").first().click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/metrics");
    });
  });
  it("Go to the Contact page and go back", () => {
    cy.contains("Kontakt").click();
    cy.contains("Jeżeli masz jakiekolwiek pytania, pisz śmiało!");
    cy.contains("axcpt.kul@gmail.com");
    cy.go("back");
  });
  it("Go to contack and go by via button", () => {
    cy.contains("Kontakt").click();
    cy.contains("Jeżeli masz jakiekolwiek pytania, pisz śmiało!");
    cy.contains("axcpt.kul@gmail.com");
    cy.contains("Strona główna").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });
});
