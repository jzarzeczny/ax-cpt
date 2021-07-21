import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestValidation from "../TestValidation";

const mockedData = [
  {
    id: 1,
    clue: "A",
    probe: "X",
    warriety: "AX",
    clueResponse: "no answer",
    probeResponse: "A",
    reactionTime: "127ms",
    affectId: null,
  },
  {
    id: 2,
    clue: "A",
    clueResponse: true,
    probeResponse: "A",
    probe: "B",
    warriety: "AY",
    reactionTime: "444ms",
    affectId: null,
  },
  {
    id: 3,
    clue: "B",
    probe: "X",
    warriety: "BX",
    clueResponse: true,
    probeResponse: "A",
    reactionTime: "296ms",
    affectId: null,
  },
  {
    id: 4,
    clue: "B",
    probe: "Y",
    warriety: "BY",
    clueResponse: true,
    probeResponse: "A",
    reactionTime: "538ms",
    affectId: null,
  },
  {
    id: 5,
    clue: "B",
    probe: "0",
    warriety: "No-go",
    clueResponse: true,
    probeResponse: "A",
    reactionTime: "361ms",
    affectId: null,
  },
];

describe("TestValidation", () => {
  test("Renders a Button component", () => {
    render(<TestValidation />);
  });
  test("Renders corrcect data", () => {
    render(<TestValidation data={mockedData} />);
  });
});
