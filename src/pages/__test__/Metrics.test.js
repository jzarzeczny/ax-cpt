import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Metrics from "../Metrics";

const submitFunction = jest.fn();

describe("Metrics", () => {
  test("Renders a Main component", () => {
    render(<Metrics />);
  });
  test("Name input in the document", () => {
    render(<Metrics />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
  test("Correct input for nickname field", () => {
    render(<Metrics />);
    const inputElement = screen.getByRole("textbox");
    const input = "dog";
    fireEvent.change(inputElement, { target: { value: input } });
    expect(inputElement.value).toBe("dog");
  });
  test("No input for nickname field", () => {
    render(<Metrics />);
    const inputElement = screen.getByRole("textbox");
    const input = "";
    fireEvent.change(inputElement, { target: { value: input } });
    expect(inputElement.value).toBe("");
  });
  test("Checking if empty nickname field generate error with correct value", () => {
    render(<Metrics />);
    const inputElement = screen.getByRole("textbox");
    const input = "";
    fireEvent.change(inputElement, { target: { value: input } });
    fireEvent.click(screen.getByRole("button"));
    const errorElement = screen.getByTestId("nicknameError");

    expect(errorElement.value).toBe("To pole jest wymagane");
  });
});
