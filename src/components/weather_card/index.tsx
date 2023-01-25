import React from "react";
import "./weather_card.css";
import WeatherIcon from "../weather_icon";
import { IWeatherItem } from "../../models";
interface IProps {
  data: IWeatherItem;
  unit: string;
}
export default function WeatherCard({ data, unit }: IProps) {
  const render_wind_speed_unit = () => {
    return unit === "metric" ? "m/s" : "mph";
  };
  const render_weath_unit_abbrev = () => {
    return unit === "metric" ? "°C" : "°F";
  };
  return (
    <div className="weather_card" role="weather_card">
      <div className="icon_container">
        <WeatherIcon icon={data.weather[0].icon} />
      </div>
      <div className="weather_details">
        <h1 className="weather_temp">
          {Math.ceil(data.main.temp)} {render_weath_unit_abbrev()}
        </h1>
      </div>
      <div className="weather_card_footer">
        <h6 className="weather_detail weather_description">
          <span>{data.weather[0].description}</span>
        </h6>
        <h6 className="weather_detail">
          <i className="fas fa-wind detail_icon"></i>
          <span>
            {data.wind.speed} {render_wind_speed_unit()}
          </span>
        </h6>
      </div>
      <div className="weather_card_footer">
        <h6 className="weather_date">
          <i className="fas fa-calendar-alt calendar_icon"></i>
          <span>{data.dt_txt}</span>
        </h6>
      </div>
    </div>
  );
}
