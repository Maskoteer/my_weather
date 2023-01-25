import React, { useEffect, useState } from "react";
import "./weather_chart.css";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { IChartData, IWeather } from "../../models";
import { handle_observe_forecast } from "../../redux/handlers";
import { extract_chart_data, get_formatted_unit } from "../../utils";
export default function WeatherChart() {
  const [unit, setUnit] = useState("metric");
  const [chartData, setChartData] = useState<IChartData>();
  useEffect(() => {
    const unsubscribe = handle_observe_forecast((_weather: IWeather, unit) => {
      setUnit(unit);
      setChartData(extract_chart_data(_weather));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const data = {
    labels: chartData?.labels || [],
    datasets: [
      {
        data: chartData?.data || [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    pan: {
      enabled: true,
      mode: "xy",
    },
    zoom: {
      enabled: true,
      mode: "xy",
    },
    skipNull: true,
    labels: [],
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context): string => {
            return context[0].label;
          },
          label: (context): string => {
            let label = context?.raw || "";
            return `${label} ${get_formatted_unit(unit)}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#cdcdcd",
        },
      },
      y: {
        ticks: {
          color: "#cdcdcd",
        },
      },
    },
  };
  if (!chartData || chartData.data.length === 0) return <></>;
  return (
    <Bar
      data={data}
      options={options}
      className="weather_chart"
      role="weather_chart"
    />
  );
}
