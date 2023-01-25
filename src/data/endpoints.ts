import { API_KEY } from "../config";

export const getForecast = (lat: number, lon: number, unit: string) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&cnt=40&appid=${API_KEY}`;
