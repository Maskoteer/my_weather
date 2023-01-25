import { CELSIUS, FAHRENHEIT, IMPERIAL, METRIC } from "../constants";
import { IChartData, IWeather, IWeatherItem } from "../models";

export const get_formatted_unit = (unit: string): string => {
  if (unit.toLowerCase() === METRIC) return CELSIUS;
  if (unit.toLowerCase() === IMPERIAL) return FAHRENHEIT;
  return "";
};

// extract the 5 temperatures the closed to mid-day
export const extract_data = (data: IWeather): IWeather => {
  let { list = [] } = data || {};
  if (!Array.isArray(list) || list.length === 0) return data;
  let element_index;
  list = list.reduce((accum: IWeatherItem[], current) => {
    element_index = accum.findIndex(
      (elem) => elem.dt_txt.split(" ")[0] === current.dt_txt.split(" ")[0]
    );
    if (element_index > -1 && new Date(current.dt_txt).getHours() === 12) {
      current.dt_txt = current.dt_txt.split(" ")[0];
      accum[element_index] = current;
    }
    if (element_index === -1 && accum.length < 5) {
      current.dt_txt = current.dt_txt.split(" ")[0];
      accum.push(current);
    }
    return accum;
  }, []);
  data.list = list;
  return data;
};

export const extract_chart_data = (data: IWeather): IChartData => {
  if (!data || !Array.isArray(data.list) || data.list.length === 0)
    return { labels: [], data: [] };
  let element_index;
  const chart_data = data.list.reduce(
    (accum: IChartData, current) => {
      element_index = accum.labels.findIndex(
        (elem) => elem === current.dt_txt.split(" ")[0]
      );

      if (element_index > -1 && new Date(current.dt_txt).getHours() === 12) {
        accum.data[element_index] = Math.ceil(current.main.temp);
      }

      if (element_index === -1 && accum.labels.length < 5) {
        accum.data.push(Math.ceil(current.main.temp));
        accum.labels.push(current.dt_txt.split(" ")[0]);
      }
      return accum;
    },
    { labels: [], data: [] }
  );
  return chart_data;
};
