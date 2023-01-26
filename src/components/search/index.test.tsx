import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./index";

describe("Search", () => {
  it("should render search component", () => {
    render(<Search />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });
  it("should have a default value of 'tunis'", () => {
    render(<Search />);
    const combobox = screen.getByRole("combobox");
    expect(combobox.getAttribute("value")).toBe("Tunis");
  });
  it("expect select dropdown to show up", () => {
    render(<Search />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Béja" } });
    expect(screen.getByText("Béja")).toBeInTheDocument();
  });
});
