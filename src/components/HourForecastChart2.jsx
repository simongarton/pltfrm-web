import { useState, useEffect } from "react";

import { transparentize, CHART_COLORS } from "../utils/Utils";

import LineChart from "./LineChart";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

function HourForecastChart2() {
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
        console.log("made a call to ", URL + "/pltfrm/weather?forecast=hour")
        return res.json();
      })
      .then((data) => {
        setChartData(data);
      });
    }, 6000)},[]);

  const labels = [];
  const pressure = [];
  const humidity = [];

  console.log(chartData);

  if (chartData["forecastHours"]) {
    for (var i = 0; i < chartData["forecastHours"].length; i++) {
      var date = new Date(chartData["forecastHours"][i]["dt"]*1000);
      labels.push(date.getHours());
      pressure.push(chartData["forecastHours"][i]["pressure"]);
      humidity.push(chartData["forecastHours"][i]["humidity"]);
    }
  }

  const title = "Next 48 hours";

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
        backgroundColor: transparentize(CHART_COLORS.red, 0.2),
        yAxisID: 'y'
      },
      {
        label: "Humidity",
        data: humidity,
        backgroundColor: transparentize(CHART_COLORS.orange, 0.2),
        yAxisID: 'y'
      },
    ],
  };

  return (
      <LineChart options={options} data={data} />
  );
}
export default HourForecastChart2;
