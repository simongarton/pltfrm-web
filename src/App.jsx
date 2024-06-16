import Header from "./components/Header";
import Weather from "./components/Weather";
import RainHourLineChart from "./components/RainHourLineChart";
import HourForecastChart from "./components/HourForecastChart";
import HourForecastChart2 from "./components/HourForecastChart2";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Weather data</h3>
      <Weather />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Rain for the next hour</h3>
      <RainHourLineChart />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Termperatures</h3>
      <HourForecastChart />
      <h3 className="text-center text-2xl text-gray-800 dark:text-gray-50">
        Pressure and humidity</h3>
      <HourForecastChart2 />
    </div>
  );
}

export default App;
