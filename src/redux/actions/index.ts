import { IWeather } from "../../models";

export const save_forecast = (data: IWeather) => {
  return {
    type: "SAVE_FORECAST",
    data,
  };
};
export const remove_forecast = () => {
  return {
    type: "REMOVE_FORECAST",
  };
};

export const save_unit = (data: string) => {
  return {
    type: "SAVE_UNIT",
    data,
  };
};
export const remove_unit = () => {
  return {
    type: "REMOVE_UNIT",
  };
};
