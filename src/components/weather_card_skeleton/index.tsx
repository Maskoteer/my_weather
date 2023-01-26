import React from "react";
import "./weather_card_skeleton.css";
import { Skeleton } from "@mui/material";

export default function WeatherCardSkeleton() {
  return (
    <div className="weather_card_skeleton" role="weather_card">
      <div className="icon_container">
        <Skeleton variant="circular" width={80} height={80} />
      </div>
      <div className="weather_details">
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        {/* <h1 className="weather_temp">
        </h1> */}
      </div>
      <div className="weather_card_footer">
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} height={30} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </div>
      <div className="weather_card_footer">
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </div>
    </div>
  );
}
