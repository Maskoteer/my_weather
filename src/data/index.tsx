import axios from "axios";
import { IWeather } from "../models";
import { handle_save_forecast } from "../redux/handlers";
import * as Endpoint from "./endpoints";

export const getForecastData = (lat: number, lon: number, unit: string) => {
  return axios
    .get(Endpoint.getForecast(lat, lon, unit))
    .then(({ data }: { data: IWeather }) => {
      handle_save_forecast(data);
    })
    // .catch((error) => {
    //   // TODO handle fail
    //   //error boundary maybe
    // });
};
