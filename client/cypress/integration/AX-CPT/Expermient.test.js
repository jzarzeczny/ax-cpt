import { render } from "@testing-library/react";
import "cypress-localstorage-commands";
import { mount } from "@cypress/react";
import { MemoryRouter } from "react-router-dom";
import Experiment from "../../../src/pages/Experiment";

describe("Tutorial component", () => {
  beforeEach(() => {
    cy.setLocalStorage("nickname", "test");
    cy.visit("localhost:3000/experiment");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });
  it("Render the reactive expermient", () => {});
});
