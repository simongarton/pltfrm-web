import { useState, useEffect } from "react";

import { transparentize, CHART_COLORS } from "../utils/ChartUtils";

import LineChart from "./LineChart";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

function HourForecastOther() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", API_KEY);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(URL + "/pltfrm/weather?forecast=hour", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChartData(data);
      });
    }, 100)},[]);

  const labels = [];
  const pressure = [];
  const humidity = [];

  if (chartData["forecastHours"]) {
    for (var i = 0; i < chartData["forecastHours"].length; i++) {
      var date = new Date(chartData["forecastHours"][i]["dt"]*1000);
      labels.push(date.getHours());
      pressure.push(chartData["forecastHours"][i]["pressure"]);
      humidity.push(chartData["forecastHours"][i]["humidity"]);
    }
  }

  const title = "Pressure and humidity, 48 hours";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Pressure",
        data: pressure,
        backgroundColor: transparentize(CHART_COLORS.purple, 0.2),
        yAxisID: 'y'
      },
      {
        label: "Humidity",
        data: humidity,
        backgroundColor: transparentize(CHART_COLORS.grey, 0.2),
        yAxisID: 'y'
      },
    ],
  };

  return (
      <LineChart options={options} data={data} />
  );
}
export default HourForecastOther;
