import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Location from "./components/Location";
import { useEffect, useState } from "react";
import { Geolocation, WeatherData } from "./types";

function App() {
  const [location, setLocation] = useState<Geolocation>({
    latitude: 0,
    longitude: 0,
  });

  const [weatherData, setWeatherData] = useState<WeatherData>({});

  const openWeatherAPIKey = "af0726443490c0752126572700056176";

  /**
   * Gets location from user's browser
   */
  useEffect(() => {
    (async () => {
      await navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    })();
  }, []);

  /**
   * Based on location being updated get weather data
   */
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.latitude}&lon=${location.longitude}&appid=${openWeatherAPIKey}`
      );
      const weatherDataResponse = await response.json();

      setWeatherData({
        description: weatherDataResponse.weather[0].main.toLowerCase(),
        temperature: Math.round(weatherDataResponse.main.temp),
        temperatureMax: Math.round(weatherDataResponse.main.temp_max),
        temperatureMin: Math.round(weatherDataResponse.main.temp_min),
        sunrise: new Date(weatherDataResponse.sys.sunrise * 1000),
        sunset: new Date(weatherDataResponse.sys.sunset * 1000),
        windSpeed: Math.round(weatherDataResponse.wind.speed),
      });

    })();
  }, [location]);

  return (
    <div id="App">
      <Location />
      <CurrentWeather weatherData={weatherData} />
    </div>
  );
}

export default App;
