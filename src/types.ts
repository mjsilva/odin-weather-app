export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  description?: string;
  temperature?: number;
  temperatureMax?: number;
  temperatureMin?: number;
  sunrise?: Date;
  sunset?: Date;
  windSpeed?: number;
  rainProbability?: number;
}
