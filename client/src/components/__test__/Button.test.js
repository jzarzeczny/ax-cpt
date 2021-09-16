import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../Button";

const fn = jest.fn();

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
  test("Have type based on props", () => {
    render(<Button name="button" styling="button--small" type="submit" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.type).toBe("submit");
  });
  test("Button click fire the function", () => {
    render(<Button name="button" styling="button--small" func={fn} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(fn).toBeCalledTimes(1);
  });
  test("Full test with all props passed", () => {
    render(
      <Button
        name="Finall boss"
        styling="button--big"
        func={fn}
        type="submit"
      />
    );
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(fn).toBeCalledTimes(1);
    expect(buttonElement.type).toBe("submit");
    expect(buttonElement).toHaveClass(" button--big");
    expect(buttonElement).toHaveTextContent("Finall boss");
  });
});
