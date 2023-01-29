import { IconContext } from "react-icons";
import {
  WiCloud,
  WiDayLightning,
  WiDaySunny,
  WiFog, WiRain,
  WiSnow, WiSprinkle,
} from "react-icons/wi";
import { WeatherData } from "../types";
import { format as dateFormat } from "date-fns";
import "../App.css";
import React from "react";

const CurrentWeather = (props: { weatherData: WeatherData }) => {
  const { weatherData } = props;

  const iconToWeatherMap: { [n: string]: JSX.Element } = {
    thunderstorm: <WiDayLightning />,
    drizzle: <WiSprinkle />,
    rain: <WiRain />,
    snow: <WiSnow />,
    mist: <WiFog />,
    clouds: <WiCloud />,
    clear: <WiDaySunny />,
  };

  return (
    <section id="current-weather" className="flex p-6 justify-start flex-wrap">
      <div className="flex">
        <IconContext.Provider value={{ className: "text-[10rem]" }}>
          {weatherData.description && iconToWeatherMap[weatherData.description]}
        </IconContext.Provider>
        <div className="flex flex-col p-4">
          <div className="text-8xl">{weatherData.temperature}°</div>
          <div className="capitalize">{weatherData.description}</div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-5">
        <div>
          <div className="text-3xl font-medium">
            {weatherData.temperatureMax}°
          </div>
          <div>High</div>
        </div>
        <div>
          <div className="text-3xl font-medium">
            {weatherData.windSpeed}
            <span className="text-base">m/s</span>
          </div>
          <div>Wind</div>
        </div>
        <div>
          <div className="text-3xl font-medium">
            {weatherData.sunrise && dateFormat(weatherData.sunrise, "H:mm")}
          </div>
          <div>Sunrise</div>
        </div>
        <div>
          <div className="text-3xl font-medium">
            {weatherData.temperatureMin}°
          </div>
          <div>Low</div>
        </div>
        <div>
          <div className="text-3xl font-medium">
            0<span className="text-base">%</span>
          </div>
          <div>Rain</div>
        </div>
        <div>
          <div className="text-3xl font-medium">
            {weatherData.sunset && dateFormat(weatherData.sunset, "H:mm")}
          </div>
          <div>Sunset</div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
