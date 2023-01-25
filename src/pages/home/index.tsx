import React, { useEffect } from "react";
import "./home.css";
import Search from "../../components/search";
import UnitSelect from "../../components/unit_select";
import WeatherChart from "../../components/weather_chart";
import WeatherSwiper from "../../components/weather_swiper";

export default function Home() {
  return (
    <div className="container">
      <div className="top_wraper">
        <Search />
        <UnitSelect />
      </div>
      <WeatherSwiper />
      <WeatherChart />
    </div>
  );
}
