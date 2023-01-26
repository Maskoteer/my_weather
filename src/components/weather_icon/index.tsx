import React from "react";
import "./weather_icon.css";

interface IProps {
  icon: string;
}

export default function WeatherIcon({ icon }: IProps) {
  const get_icon = () => {
    try {
      const icon_src = require(`../../assets/icons/${icon}.svg`);
      return icon_src;
    } catch (error) {
      return null;
    }
  };
  return <img src={get_icon()} className="weather_icon" alt="weather icon" />;
}
