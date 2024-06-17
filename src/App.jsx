import Header from "./components/Header";
import Weather from "./components/Weather";
import RainHourLineChart from "./components/RainHourLineChart";
import HourForecastTemperatures from "./components/HourForecastTemperatures";
import HourForecastOther from "./components/HourForecastOther";
import DayForecastTemperatures from "./components/DayForecastTemperatures";
import DayForecastRain from "./components/DayForecastRain";
import WeatherForecast from "./components/WeatherForecast";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50 p-3">
        Weather data</h3>
      <Weather className="chart" />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Rain for the next hour</h3>
      <RainHourLineChart className="chart"  />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Temperatures</h3>
      <HourForecastTemperatures className="chart"  />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Pressure and humidity</h3>
      <HourForecastOther />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Long range temperatures</h3>
      <DayForecastTemperatures />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Long range rain</h3>
      <DayForecastRain />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Forecast</h3>
      <WeatherForecast />
    </div>
  );
}

export default App;
