import { useState, useEffect } from "react";

import { transparentize, CHART_COLORS } from "../utils/Utils";

import LineChart from "./LineChart";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

function RainHourLineChart() {
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

    fetch(URL + "/pltfrm/weather?data=rain", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChartData(data);
      });
    }, 100)},[]);

  const labels = [];
  const values = [];

  if (chartData["rainMinutes"]) {
    for (var i = 0; i < chartData["rainMinutes"].length; i++) {
      var date = new Date(chartData["rainMinutes"][i]["timestamp"]);
      labels.push(date.getMinutes());
      values.push(chartData["rainMinutes"][i]["precipitation"]);
    }
  }

  const title = "Next 60 minutes";

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
        label: "Forecast",
        data: values,
        backgroundColor: transparentize(CHART_COLORS.blue, 0.2),
      },
    ],
  };

  return (
      <LineChart options={options} data={data} />
  );
}
export default RainHourLineChart;
