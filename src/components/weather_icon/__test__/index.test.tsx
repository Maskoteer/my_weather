import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherIcon from "../index";

describe("Weather Icon", () => {
  it("should render weather icon component", () => {
    render(<WeatherIcon icon="03d" />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
