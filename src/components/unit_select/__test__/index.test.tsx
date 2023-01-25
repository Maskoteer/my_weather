import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UnitSelect from "../index";

describe("Unit Select", () => {
  it("should render unit_select component", () => {
    render(<UnitSelect />);
    const buttons = screen.getAllByRole("unit_button");
    expect(buttons).toHaveLength(2);
  });
  it("should have Celsius as default unit", () => {
    render(<UnitSelect />);
    const celsius_button = screen.getByText(/celsius/i);
    const fahrenheit_button = screen.getByText(/fahrenheit/i);
    expect(celsius_button.className).toContain("selected");
    expect(fahrenheit_button.className).not.toContain("selected");
  });
  it("should change selected unit when unit button click", () => {
    render(<UnitSelect />);
    const celsius_button = screen.getByText(/celsius/i);
    const fahrenheit_button = screen.getByText(/fahrenheit/i);
    fireEvent.click(fahrenheit_button);
    expect(celsius_button.className).not.toContain("selected");
    expect(fahrenheit_button.className).toContain("selected");
  });
});
