import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TutorialBox from "../TutorialBox";

const mockedData = [
  {
    boxVisible: false,
    boxContent: "",
    header: "Hello",
    para: "lorem",
  },
  {
    boxVisible: false,
    boxContent: "",
    header: "Friend",
    para: "ipsum",
  },
  {
    boxVisible: true,
    boxContent: "A",
    header: "How",
    para: "lorem",
  },
  {
    boxVisible: false,
    boxContent: "A",
    header: "Are",
    para: "ipsum",
  },
];

describe("TutorialBox", () => {
  test("Renders a Button component", () => {
    render(<TutorialBox data={mockedData} func={jest.fn()} />);
  });
  test("Renders corrcect data", () => {
    render(<TutorialBox data={mockedData} func={jest.fn()} />);
    const boxLetterElement = screen.getByTestId("tutorial__letter");
    const headerElement = screen.getByTestId("tutorial__header");
    const paraElement = screen.getByTestId("tutorial__para");
    const alertElement = screen.getByTestId("tutorial__alert");
    expect(boxLetterElement).toHaveTextContent("");
    expect(headerElement).toHaveTextContent("Hello");
    expect(paraElement).toHaveTextContent("lorem");
    expect(alertElement).toHaveTextContent("Naciśnij Spację aby kontyunować");
  });
  test("Renders new data after spacebar click", () => {
    render(<TutorialBox data={mockedData} func={jest.fn()} />);
    const boxElement = screen.getByTestId("tutorial__box");
    const boxLetterElement = screen.getByTestId("tutorial__letter");
    const headerElement = screen.getByTestId("tutorial__header");
    const paraElement = screen.getByTestId("tutorial__para");
    const alertElement = screen.getByTestId("tutorial__alert");
    const containerElement = screen.getByTestId("tutorial__container");
    fireEvent.keyDown(containerElement, { key: " ", code: "Space" });
    expect(boxElement.classList).not.toContain("tutorial__box--visible");
    expect(boxLetterElement).toHaveTextContent("");
    expect(headerElement).toHaveTextContent("Friend");
    expect(paraElement).toHaveTextContent("ipsum");
    expect(alertElement).toHaveTextContent("Naciśnij Spację aby kontyunować");
  });
  test("Change class and render box with letter inside", () => {
    render(<TutorialBox data={mockedData} func={jest.fn()} />);
    const boxElement = screen.getByTestId("tutorial__box");
    const boxLetterElement = screen.getByTestId("tutorial__letter");
    const headerElement = screen.getByTestId("tutorial__header");
    const paraElement = screen.getByTestId("tutorial__para");
    const alertElement = screen.getByTestId("tutorial__alert");
    const containerElement = screen.getByTestId("tutorial__container");
    fireEvent.keyDown(containerElement, { key: " ", code: "Space" });
    fireEvent.keyDown(containerElement, { key: " ", code: "Space" });
    expect(boxElement.classList).toContain("tutorial__box--visible");
    expect(boxLetterElement).toHaveTextContent("A");
    expect(headerElement).toHaveTextContent("How");
    expect(paraElement).toHaveTextContent("lorem");
    expect(alertElement).toHaveTextContent("Naciśnij Spację aby kontyunować");
  });
  test("Remove visible class", () => {
    render(<TutorialBox data={mockedData} func={jest.fn()} />);
    const boxElement = screen.getByTestId("tutorial__box");
    const containerElement = screen.getByTestId("tutorial__container");
    fireEvent.keyDown(containerElement, { key: " ", code: "Space" });
    fireEvent.keyDown(containerElement, { key: " ", code: "Space" });
    fireEvent.keyDown(containerElement, { key: " ", code: "Space" });
    expect(boxElement).not.toBeNull();
  });
});
