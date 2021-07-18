import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../Button";

describe("Button", () => {
  test("Renders a Button component", () => {
    render(<Button />);
  });
  test("Renders with proper name, based on props", () => {
    render(<Button name="Click me!" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Click me!");
  });
  test("Render basic styling", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("btn");
  });
  test("Render more styling, based on props", () => {
    render(<Button styling="button--small" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(" button--small");
  });
  test("Full test with styling and name", () => {
    render(<Button name="button" styling="button--small" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(" button--small");
    expect(buttonElement).toHaveTextContent("button");
  });
});
