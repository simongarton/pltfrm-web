import { useState, useEffect } from "react";

import { transparentize, CHART_COLORS } from "../utils/ChartUtils";

import { formatDateWordsShort } from "../utils/Utils";

import LineChart from "./LineChart";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

function DayForecastTemperatures() {
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

    fetch(URL + "/pltfrm/weather?forecast=day", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChartData(data);
      });
    }, 100)},[]);

  const labels = [];
  const rain = [];

  if (chartData["forecastDays"]) {
    for (var i = 0; i < chartData["forecastDays"].length; i++) {
      var date = new Date(chartData["forecastDays"][i]["dt"]*1000);
      labels.push(formatDateWordsShort(date));
      rain.push(chartData["forecastDays"][i]["rain"]);
    }
  }


  const title = "Rain, next 8 days";

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
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Rain",
        data: rain,
        backgroundColor: transparentize(CHART_COLORS.blue, 0.2),
      },
    ],
  };

  return (
      <LineChart options={options} data={data} />
  );
}
export default DayForecastTemperatures;
