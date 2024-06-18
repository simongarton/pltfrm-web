import Weather from "./components/Weather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RainHourLineChart from "./components/RainHourLineChart";
import HourForecastTemperatures from "./components/HourForecastTemperatures";
import HourForecastOther from "./components/HourForecastOther";
import DayForecastTemperatures from "./components/DayForecastTemperatures";
import DayForecastRain from "./components/DayForecastRain";
import WeatherForecast from "./components/WeatherForecast";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="hidden md:inline">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Weather />
          </div>
          <div className="col-span-1">
            <h3 className="text-l font-bold text-center">Next 8 days</h3>
            <WeatherForecast />
          </div>
          {
          // I cannot get this to take up the full width of the screen : it limits at 616px -->
          }
          <div className="col-span-2">
            <RainHourLineChart />
          </div>
          <div className="col-span-1">
            <HourForecastTemperatures />
          </div>
          <div className="col-span-1">
            <HourForecastOther />
          </div>
          <div className="col-span-1">
            <DayForecastTemperatures />
          </div>
          <div className="col-span-1">
            <DayForecastRain />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col">
          <Weather />
          <WeatherForecast />
          <RainHourLineChart />
          <HourForecastTemperatures />
          <HourForecastOther />
          <DayForecastTemperatures />
          <DayForecastRain />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
