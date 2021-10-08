import "cypress-localstorage-commands";
import { mount } from "@cypress/react";
import { MemoryRouter } from "react-router-dom";
import Experiment from "../Experiment";

describe("Tutorial component", () => {
  beforeEach(() => {
    cy.setLocalStorage("nickname", "test");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });
  it("Render the reactive expermient", () => {
    mount(
      <MemoryRouter initialEntries={[{ state: { type: "reactive" } }]}>
        <Experiment />
      </MemoryRouter>
    );
  });
  it("Correct instuction", () => {
    mount(
      <MemoryRouter initialEntries={[{ state: { type: "reactive" } }]}>
        <Experiment />
      </MemoryRouter>
    );
    cy.contains("Intrukcja do tego zadania");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Modyfikacja");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Zasady");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Wskazówka");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Powodzenia");
    cy.wait(2000);
  });
});
