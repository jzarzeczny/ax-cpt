import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Main from "../Main";

const MockedMain = () => (
  <Router>
    <Main />
  </Router>
);

describe("Main", () => {
  test("Renders a Main component", () => {
    render(<MockedMain />);
  });
});
