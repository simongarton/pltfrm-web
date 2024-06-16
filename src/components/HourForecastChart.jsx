import { useState, useEffect } from "react";

import { transparentize, CHART_COLORS } from "../utils/Utils";

import LineChart from "./LineChart";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

function HourForecastChart() {
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
    }, 4000)},[]);

  const labels = [];
  const temps = [];
  const dew_points = [];

  console.log(chartData);

  if (chartData["forecastHours"]) {
    for (var i = 0; i < chartData["forecastHours"].length; i++) {
      var date = new Date(chartData["forecastHours"][i]["dt"]*1000);
      labels.push(date.getHours());
      temps.push(chartData["forecastHours"][i]["temp"]);
      dew_points.push(chartData["forecastHours"][i]["dew_point"]);
    }
  }

  const title = "Next 48 hours";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temps,
        backgroundColor: transparentize(CHART_COLORS.blue, 0.2),
      },
      {
        label: "Dew point",
        data: dew_points,
        backgroundColor: transparentize(CHART_COLORS.purple, 0.2),
      },
    ],
  };

  return (
      <LineChart options={options} data={data} />
  );
}
export default HourForecastChart;
