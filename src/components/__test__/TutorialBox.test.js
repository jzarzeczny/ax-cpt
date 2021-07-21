import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TutorialBox from "../TutorialBox";

describe("TutorialBox", () => {
  test("Renders a Button component", () => {
    render(<TutorialBox />);
  });
  test("Renders corrcect data", () => {
    render(
      <TutorialBox
        boxVisible={true}
        boxContent="A"
        header="Header"
        para="lorem ipsum"
        func={jest.fn()}
      />
    );
    const boxLetterElement = screen.getByTestId("tutorial__letter");
    const headerElement = screen.getByTestId("tutorial__header");
    const paraElement = screen.getByTestId("tutorial__para");
    const alertElement = screen.getByTestId("tutorial__alert");
    expect(boxLetterElement).toHaveTextContent("A");
    expect(headerElement).toHaveTextContent("Header");
    expect(paraElement).toHaveTextContent("lorem ipsum");
    expect(alertElement).toHaveTextContent("Naciśnij Spację aby kontyunować");
  });
  test("Hides box", () => {
    render(
      <TutorialBox
        boxVisible={false}
        boxContent="A"
        header="Header"
        para="lorem ipsum"
        func={jest.fn()}
      />
    );
    const boxElement = screen.getByTestId("tutorial__box");
    expect(boxElement.classList).not.toBe("tutorial__box--visible");
  });
});
