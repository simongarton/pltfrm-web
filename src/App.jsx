import Header from "./components/Header";
import Weather from "./components/Weather";
import RainHourLineChart from "./components/RainHourLineChart";
import HourForecastChart from "./components/HourForecastChart";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Weather />
      <RainHourLineChart />
      <HourForecastChart />
    </div>
  );
}

export default App;
