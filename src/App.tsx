import CurrentWeather from "./components/CurrentWeather";
import Location from "./components/Location";
import { useEffect, useState } from "react";
import { Geolocation, LocationData, WeatherData } from "./types";
import { byIso } from "country-code-lookup";

function App() {
  const [geolocation, setGeolocation] = useState<Geolocation>({
    latitude: 0,
    longitude: 0,
  });

  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [locationData, setLocationData] = useState<LocationData>({});

  const openWeatherAPIKey = "af0726443490c0752126572700056176";

  /**
   * Gets location from user's browser
   */
  useEffect(() => {
    (async () => {
      await navigator.geolocation.getCurrentPosition((pos) => {
        setGeolocation({
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
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${openWeatherAPIKey}`
      );
      const weatherDataResponse = await response.json();

      console.log({ weatherDataResponse });

      setWeatherData({
        description: weatherDataResponse.weather[0].main.toLowerCase(),
        temperature: Math.round(weatherDataResponse.main.temp),
        temperatureMax: Math.round(weatherDataResponse.main.temp_max),
        temperatureMin: Math.round(weatherDataResponse.main.temp_min),
        sunrise: new Date(weatherDataResponse.sys.sunrise * 1000),
        sunset: new Date(weatherDataResponse.sys.sunset * 1000),
        windSpeed: Math.round(weatherDataResponse.wind.speed),
      });

      setLocationData({
        city: weatherDataResponse.name,
        country: byIso(weatherDataResponse.sys.country)?.country,
      });

      console.log({ weatherData });
    })();
  }, [geolocation]);

  return (
    <div id="App">
      <Location locationData={locationData} />
      <CurrentWeather weatherData={weatherData} />
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
