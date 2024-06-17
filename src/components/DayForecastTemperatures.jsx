import { useState, useEffect } from "react";

import { transparentize, CHART_COLORS } from "../utils/Utils";

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
  const max = [];
  const min = [];

  if (chartData["forecastDays"]) {
    for (var i = 0; i < chartData["forecastDays"].length; i++) {
      var date = new Date(chartData["forecastDays"][i]["dt"]*1000);
      labels.push(date.getDay());
      max.push(chartData["forecastDays"][i]["temp"]["max"]);
      min.push(chartData["forecastDays"][i]["temp"]["min"]);
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
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Max",
        data: max,
        backgroundColor: transparentize(CHART_COLORS.red, 0.2),
      },
      {
        label: "Min",
        data: min,
        backgroundColor: transparentize(CHART_COLORS.orange, 0.2),
      },
    ],
  };

  return (
      <LineChart options={options} data={data} />
  );
}
export default DayForecastTemperatures;
