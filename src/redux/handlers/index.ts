import { IWeather } from "../../models";
import {
  save_forecast,
  remove_forecast,
  save_unit,
  remove_unit,
} from "../actions";
import {setupStore} from "../store";
const store = setupStore().store;

export const handle_get_forecast = () => {
  const forecast: IWeather = store.getState().forecast;
  return forecast;
};
export const handle_save_forecast = (data: IWeather) => {
  store.dispatch(save_forecast(data));
};
export const handle_remove_forecast = () => {
  store.dispatch(remove_forecast());
};
export const handle_observe_forecast = (
  handle_change = (data: IWeather, unit: string) => {}
) => {
  const unsubscribe = store.subscribe(() => {
    handle_change(handle_get_forecast(), handle_get_unit());
  });
  return unsubscribe;
};
// unit
export const handle_get_unit = () => {
  const unit: string = store.getState().unit;
  return unit;
};
export const handle_save_unit = (data: string) => {
  store.dispatch(save_unit(data));
};
export const handle_remove_unit = () => {
  store.dispatch(remove_unit());
};
export const handle_observe_unit = (handle_change = (unit: string) => {}) => {
  const unsubscribe = store.subscribe(() => {
    handle_change(handle_get_unit());
  });

  return unsubscribe;
};
