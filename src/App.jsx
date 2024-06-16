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
      <Weather />
      <RainHourLineChart />
      <HourForecastChart />
      <HourForecastChart2 />
    </div>
  );
}

export default App;
