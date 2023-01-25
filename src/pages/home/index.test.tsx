import React from "react";
import {
  act,
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from ".";
import { IWeather } from "../../models";
import { renderWithProviders } from "../../utils/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { handlers } from "../../mocks/handlers";
import { setupServer } from "msw/node";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
}));
jest.setTimeout(30000);

describe("Home", () => {
  const server = setupServer(...handlers);
  // // Enable API mocking before tests.
  // beforeAll(() => server.listen());
  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());
  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it("should render 5 cards on the Weather Swiper", async () => {
    await waitFor(() => renderWithProviders(<Home />));
    await wait(3000);
    const weather_cards = screen.getAllByRole("weather_card");
    expect(weather_cards).toHaveLength(5);
  });
  it("should render 'No data found' on the Weather Swiper if there is no weather data from the api", async () => {
    server.listen();
    await waitFor(() => renderWithProviders(<Home />));
    await wait(3000);
    const weather_cards = screen.queryAllByRole("weather_card");
    expect(weather_cards).toHaveLength(0);
    expect(screen.getByText(/no data found/i)).toBeInTheDocument();
    server.close();
  });
});
