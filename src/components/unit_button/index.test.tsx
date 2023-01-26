import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UnitButton from "./index";
import { Units } from "../../constants";
import { handle_get_unit } from "../../redux/handlers";

describe("Unit Button", () => {
  it("should render unit_button component", () => {
    render(
      <UnitButton
        index={0}
        selected={0}
        unit={Units.metric}
        handleClick={() => {}}
      />
    );
    const unit_button = screen.getByRole("unit_button");
    expect(unit_button).toBeInTheDocument();
  });
  it("should unit_button component have correct attributes", () => {
    render(
      <UnitButton
        index={0}
        selected={1}
        unit={Units.metric}
        handleClick={() => {}}
      />
    );
    const unit_button = screen.getByText("Celsius");
    expect(unit_button).toBeInTheDocument();
    expect(unit_button.className).not.toContain("selected");
  });
  it("should unit_button handleClick to work fine", () => {
    let selected = 1;
    render(
      <UnitButton
        index={0}
        selected={selected}
        unit={Units.metric}
        handleClick={() => (selected = 0)}
      />
    );
    const unit_button = screen.getByRole("unit_button");
    fireEvent.click(unit_button);
    expect(selected).toBe(0);
  });
  it("should unit_button handleClick change redux state", () => {
    let default_unit = handle_get_unit();
    render(
      <UnitButton
        index={1}
        selected={0}
        unit={Units.imperial}
        handleClick={() => {}}
      />
    );
    const unit_button = screen.getByRole("unit_button");
    fireEvent.click(unit_button);
    let new_unit = handle_get_unit();
    expect(default_unit).not.toBe(new_unit);
    expect(new_unit).toBe("imperial");
  });
});
