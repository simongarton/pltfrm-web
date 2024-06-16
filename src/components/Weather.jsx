import { useState, useEffect } from "react";
import { PLTFRM_API_KEY } from "../../secrets";

export default function Weather() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", PLTFRM_API_KEY);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://dl2op2mqy7.execute-api.ap-southeast-2.amazonaws.com/pltfrm/weather",
      requestOptions
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeather(data['message']);
      });
  }, []);

  return (
    <header className="bg-gray-50 p-4">
      <h1 className="text-grey-900 text-xl">current weather</h1>
      {weather? <p>{weather}</p> : <p>loading...</p>}
    </header>
  );
}