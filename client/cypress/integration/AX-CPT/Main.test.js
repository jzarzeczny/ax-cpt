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
});

describe("Testing metrics", () => {
  beforeEach(() => {
    cy.visit("/metrics");
  });
  it("Check if errors display correctly", () => {
    cy.get("[type='submit']").click();
    cy.get(".form__error").should("have.length", 5);
  });
  it("Type the nickname", () => {
    cy.get("#nickname").type("Papa").should("have.value", "Papa");
    cy.get("[type='submit']").click();
    cy.get(".form__error").should("have.length", 4);
  });
  it("Type the age", () => {
    cy.get("#age").type("1").should("have.value", "1");
    cy.get("[type='submit']").click();
    cy.get(".form__error").should("have.length", 5);
    cy.get('[data-testid="ageError"]').should(
      "have.text",
      "Musisz mieć między 18, a 100 lat"
    );
  });
  it("Type the values into the form", () => {
    cy.get("#nickname").type("wazniak").should("have.value", "wazniak");
    cy.get("#age").type("23").should("have.value", "23");
    cy.get("#gender").select("m").should("have.value", "m");
    cy.get("#eduction").select("wyższe").should("have.value", "wyższe");
    cy.get("#location")
      .select("sredniemiasto")
      .should("have.value", "sredniemiasto");
  });
  // it("Go from metric to agreement", () => {
  //   cy.get("#nickname").type("test").should("have.value", "test");
  //   cy.get("#age").type("23").should("have.value", "23");
  //   cy.get("#gender").select("m").should("have.value", "m");
  //   cy.get("#eduction").select("wyższe").should("have.value", "wyższe");
  //   cy.get("#location")
  //     .select("sredniemiasto")
  //     .should("have.value", "sredniemiasto");
  //   cy.get("[type='submit']").click();
  //   cy.location().should((location) => {
  //     expect(location.pathname).to.eq("/agreement");
  //   });
  // });
});
describe("Testing metric component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/agreement");
    cy.setLocalStorage("nickname", "test");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });
  it("Visit the agreement page, finds agreement checkbox and check it", () => {
    cy.get("#agreement").check().should("be.checked");
  });
  it("Correct class, after click without check the agreement", () => {
    cy.get("span").should("not.have.class", "agreement__checkbox--fail");
    cy.get(".btn--standard").click();
    cy.get("span").should("have.class", "agreement__checkbox--fail");
  });
  it("Go to trening when the agreement is checked", () => {
    cy.get("span").should("not.have.class", "agreement__checkbox--fail");
    cy.get(".btn--standard").click();
    cy.get("span").should("have.class", "agreement__checkbox--fail");
    cy.get("#agreement").check().should("be.checked");
    // Context need to me mocked
    // cy.get(".btn--standard").click();
  });
});
