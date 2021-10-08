/* eslint-disable cypress/no-unnecessary-waiting */
import "cypress-localstorage-commands";
import { mount } from "@cypress/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Experiment from "../Experiment";
import "../../index.css";

describe("Experiment component - reactive version", () => {
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
  it("Correct instructions + test", () => {
    mount(
      <MemoryRouter initialEntries={[{ state: { type: "reactive" } }]}>
        <Experiment />
      </MemoryRouter>
    );
    cy.setLocalStorage("nickname", "test");
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
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ m }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("3");
    cy.wait(1000);
    cy.contains("+ + +");
    cy.wait(3000);

    cy.intercept(
      {
        method: "POST",
        url: '/"http://localhost:5000/reactive/low/*',
      },
      []
    ).as("POST data re-low");
    // Clock component render
    cy.contains("60s");
    // Wait for clock to disapear
    cy.wait(60000);
    // Render test component again

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ m }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("3");
    cy.wait(1000);
    cy.contains("+ + +");
    cy.intercept(
      {
        method: "POST",
        url: '/"http://localhost:5000/reactive/high/*',
      },
      []
    ).as("POST data re-high");
    // Mount Finish component
    cy.contains("Jutrzejsza próba jest ta samo ważna!");
  });
});

describe("Experiment component - proactive version", () => {
  beforeEach(() => {
    cy.setLocalStorage("nickname", "test");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });
  it("Render the proactive expermient", () => {
    mount(
      <MemoryRouter initialEntries={[{ state: { type: "proactive" } }]}>
        <Experiment />
      </MemoryRouter>
    );
  });
  it("Correct instruction of proactive", () => {
    mount(
      <MemoryRouter initialEntries={[{ state: { type: "proactive" } }]}>
        <Experiment />
      </MemoryRouter>
    );
    cy.contains("Witaj w drugim dniu badania");
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

    cy.contains("Uwaga");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Powodzenia");
  });

  it("Correct instruction of proactive", () => {
    mount(
      <MemoryRouter initialEntries={[{ state: { type: "proactive" } }]}>
        <Experiment />
      </MemoryRouter>
    );
    cy.contains("Witaj w drugim dniu badania");
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

    cy.contains("Uwaga");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Powodzenia");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ m }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("3");
    cy.wait(1000);
    cy.contains("+ + +");
    cy.wait(3000);

    cy.intercept(
      {
        method: "POST",
        url: '/"http://localhost:5000/proactive/low/*',
      },
      []
    ).as("POST data pro-low");
    // Clock component render
    cy.contains("60s");
    // Wait for clock to disapear
    cy.wait(60000);
    // Render test component again

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ m }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("A");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("X");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("Y");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);

    cy.get("img");
    cy.wait(3000);
    cy.contains("B");
    cy.get("body").type("{ z }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("+ + +");
    cy.wait(3000);
    cy.contains("3");
    cy.wait(1000);
    cy.contains("+ + +");
    cy.intercept(
      {
        method: "POST",
        url: '/"http://localhost:5000/proactive/high/*',
      },
      []
    ).as("POST data pro-high");
    // Mount Finish component
    cy.contains("Bardzo dziękuje Ci za udział w badania!");
  });
});
