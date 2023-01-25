import React from "react";
import icon_01d from "../../assets/icons/partly_day_storm.svg";
import icon_02d from "../../assets/icons/partly_day_storm.svg";
import icon_03d from "../../assets/icons/partly_day_storm.svg";
import icon_04d from "../../assets/icons/partly_day_storm.svg";
import icon_09d from "../../assets/icons/partly_day_storm.svg";
import icon_10d from "../../assets/icons/partly_day_storm.svg";
import icon_11d from "../../assets/icons/partly_day_storm.svg";
import icon_13d from "../../assets/icons/partly_day_storm.svg";
import icon_50d from "../../assets/icons/partly_day_storm.svg";
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
