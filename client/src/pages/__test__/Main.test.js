import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Main from "../Main";

const MockedMain = () => (
  <Router>
    <Main />
  </Router>
);

describe("Main", () => {
  test("Render a Main component", () => {
    render(<MockedMain />);
  });
  test("Render two secions", () => {
    render(<MockedMain />);
    const LinkElement = screen.getAllByRole("link");
    expect(LinkElement.length).toBe(2);
  });
});
