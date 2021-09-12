import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestValidation from "../TestValidation";
import { BrowserRouter } from "react-router-dom";

const MockedTestValidation = ({ input }) => {
  return (
    <BrowserRouter>
      <TestValidation data={input} />
    </BrowserRouter>
  );
};
const mockedDataPositive = [
  {
    id: 1,
    clue: "A",
    probe: "X",
    warriety: "AX",
    clueResponse: "z",
    probeResponse: "m",
    reactionTime: "127ms",
    affectId: null,
  },
  {
    id: 2,
    clue: "A",
    clueResponse: "z",
    probeResponse: "z",
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
    clueResponse: "z",
    probeResponse: "z",
    reactionTime: "296ms",
    affectId: null,
  },
  {
    id: 4,
    clue: "B",
    probe: "Y",
    warriety: "BY",
    clueResponse: "z",
    probeResponse: "z",
    reactionTime: "538ms",
    affectId: null,
  },
  {
    id: 5,
    clue: "B",
    probe: "0",
    warriety: "No-go",
    clueResponse: "z",
    probeResponse: "no answer",
    reactionTime: "361ms",
    affectId: null,
  },
];
const mockedDataNegative = [
  // 1/1
  {
    id: 1,
    clue: "A",
    probe: "X",
    warriety: "AX",
    clueResponse: false,
    probeResponse: "z",
    reactionTime: "127ms",
    affectId: null,
  },
];

describe("TestValidation", () => {
  test("Renders a TestValidation component", () => {
    render(<MockedTestValidation input={mockedDataPositive} />);
  });
  test("Renders correct answer based on positive results.", async () => {
    render(<MockedTestValidation input={mockedDataPositive} />);
    const headerElement = await screen.findByRole("heading");
    expect(headerElement.innerHTML).toBe("Świetnie sobie poradziłeś!");
  });
  test("Renders correct button based on positive results.", async () => {
    render(<MockedTestValidation input={mockedDataPositive} />);
    const headerElement = await screen.findByRole("button");
    expect(headerElement.innerHTML).toBe("Zacznij zadanie");
  });
  test("Renders correct heading - negative result.", async () => {
    render(<MockedTestValidation input={mockedDataNegative} />);
    const headerElement = await screen.findByRole("heading");
    expect(headerElement.innerHTML).toBe(
      "Niestety, nie udzieliłeś prawidłowej odpowiedzi na większośc pytań."
    );
  });
  test("Renders correct button - negative result.", async () => {
    render(<MockedTestValidation input={mockedDataNegative} />);
    const headerElement = await screen.findByRole("button");
    expect(headerElement.innerHTML).toBe("Zacznij jeszcze raz");
  });
});
