import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Clock from "../Clock";

describe("Clock", () => {
  test("Renders a Clock component", () => {
    render(<Clock />);
  });
  test("Initial value of Clock", () => {
    render(<Clock />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement.innerHTML).toBe("60s");
  });
  test("Value of clock after 1s", async () => {
    render(<Clock />);
    const headerElement = screen.getByRole("heading");
    await waitFor(() => expect(headerElement.innerHTML).toBe("59s"));
  });
  test("Paragraph is present", () => {
    render(<Clock />);
    const paraElement = screen.getByTestId(/clock-paragraph/i);
    expect(paraElement).toBeInTheDocument();
  });
});
