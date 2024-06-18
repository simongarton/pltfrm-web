import { useState, useEffect } from "react";

// eslint-disable-next-line no-undef
const API_KEY = process.env.PLTFRM_API_KEY;
// eslint-disable-next-line no-undef
const URL = process.env.PLTFRM_URL;

export default function Weather() {
  const [weather, setWeather] = useState();

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

      fetch(URL + "/pltfrm/weather", requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWeather(data["message"]);
        });
    }, 0);
  }, []);

  return (
    <header className="bg-gray-50 dark:bg-gray-900 p-4">
      <h3 className="text-l font-bold text-center">Current weather</h3>
      {weather ? <p>{weather}</p> : <p>loading...</p>}
    </header>
  );
}
