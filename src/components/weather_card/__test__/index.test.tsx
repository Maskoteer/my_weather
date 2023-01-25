import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "..";
import { IWeatherItem } from "../../../models";

describe("Weather Card", () => {
  it("should render WeatherCard component with correct text and units (metric)", () => {
    render(<WeatherCard unit="imperial" data={data} />);
    const weather_temp_element = screen.getByText(
      `${Math.ceil(data.main.temp)} °F`
    );
    const weather_description_element = screen.getByText(
      data.weather[0].description
    );
    const weather_wind_speed_element = screen.getByText(
      `${data.wind.speed} mph`
    );
    const weather_date_element = screen.getByText(data.dt_txt);
    expect(weather_temp_element).toBeInTheDocument();
    expect(weather_description_element).toBeInTheDocument();
    expect(weather_wind_speed_element).toBeInTheDocument();
    expect(weather_date_element).toBeInTheDocument();
  });
  it("should render WeatherCard component with correct text and units (imperial)", () => {
    render(<WeatherCard unit="metric" data={data} />);
    const weather_temp_element = screen.getByText(
      `${Math.ceil(data.main.temp)} °C`
    );
    const weather_description_element = screen.getByText(
      data.weather[0].description
    );
    const weather_wind_speed_element = screen.getByText(
      `${data.wind.speed} m/s`
    );
    const weather_date_element = screen.getByText(data.dt_txt);
    expect(weather_temp_element).toBeInTheDocument();
    expect(weather_description_element).toBeInTheDocument();
    expect(weather_wind_speed_element).toBeInTheDocument();
    expect(weather_date_element).toBeInTheDocument();
  });
});

const data: IWeatherItem = {
  dt: 1674464400,
  main: {
    temp: 270.47,
    feels_like: 270.47,
    temp_min: 270.47,
    temp_max: 273.75,
    pressure: 1036,
    sea_level: 1036,
    grnd_level: 1034,
    humidity: 93,
    temp_kf: -3.28,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  clouds: {
    all: 33,
  },
  wind: {
    speed: 1.15,
    deg: 67,
    gust: 1.88,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d",
  },
  dt_txt: "2023-01-23 09:00:00",
};
