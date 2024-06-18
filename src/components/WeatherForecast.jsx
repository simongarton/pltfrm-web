import { useState, useEffect } from "react";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

function WeatherForecast() {
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
    }, 100);
  }, []);

  const icons = [];

  if (chartData["forecastDays"]) {
    for (var i = 0; i < chartData["forecastDays"].length; i++) {
      let url =
        "https://openweathermap.org/img/wn/" +
        chartData["forecastDays"][i]["weather"][0]["icon"] +
        "@2x.png";
      icons.push({
        url: url,
        alt: chartData["forecastDays"][i]["weather"][0]["main"],
        id: i,
      });
    }
  }

  return (
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {icons.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
          ))}
      </div>
  );
}
export default WeatherForecast;
