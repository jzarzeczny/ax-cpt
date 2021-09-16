import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Metrics from "../Metrics";

const submitFunction = jest.fn();

// const mockedNoInput = {
//   nickname: "To pole jest wymagane",
//   age: "To pole jest wymagane",
//   gender: "To pole jest wymagane",
//   education: "To pole jest wymagane",
//   location: "To pole jest wymagane",
// };
const setup = () => {
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <Metrics />
    </Router>
  );
  const input = utils.getByLabelText(/nick:/i);
  return {
    input,
    ...utils,
  };
};
describe("Metrics", () => {
  test("Renders a Main component", () => {
    render(<Metrics />);
  });
  // test("Name input in the document", () => {
  //   render(<Metrics />);
  //   const inputElement = screen.getByRole("textbox");
  //   expect(inputElement).toBeInTheDocument();
  // });
  test("Name ", async () => {
    const { input } = setup();
    act(() => {
      fireEvent.change(input, { target: { value: "Andrzej" } });
    });

    expect(input.value).toBe("Andrzej");
  });

  // test("Correct input for nickname field", () => {
  //   render(<Metrics />);
  //   const inputElement = screen.getByRole("textbox");

  //   act(() => {
  //     const input = "dog";
  //     fireEvent.change(inputElement, { target: { value: input } });
  //   });

  //   expect(inputElement.value).toBe("dog");
  // });
  // test("No input for nickname field", () => {
  //   render(<Metrics />);
  //   const inputElement = screen.getByRole("textbox");
  //   act(() => {
  //     const input = "";
  //     fireEvent.change(inputElement, { target: { value: input } });
  //   });

  //   expect(inputElement.value).toBe("");
  // });
});
