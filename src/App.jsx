import Header from "./components/Header";
import Weather from "./components/Weather";
import RainHourLineChart from "./components/RainHourLineChart";
import HourForecastTemperatures from "./components/HourForecastTemperatures";
import HourForecastOther from "./components/HourForecastOther";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50 p-3">
        Weather data</h3>
      <Weather />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Rain for the next hour</h3>
      <RainHourLineChart />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Temperatures</h3>
      <HourForecastTemperatures />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Pressure and humidity</h3>
      <HourForecastOther />
    </div>
  );
}

export default App;
