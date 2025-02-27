import axios from 'axios';
import { Root, WeatherIcons } from '../types';

//******* weather card *******/
export const getWeather = async () => {

  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

  try {
    const result: Root = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bahia Blanca&appid=${APIKEY}`);
    console.log(result.data)
  } catch (error) {
    console.error(error)
  }
}

export const weatherIcon: WeatherIcons = {
  "clear sky": "sol.jpg",
  "few clouds": "sol.jpg",
  "scattered clouds": "sol.jpg",
  "broken clouds": "sol.jpg",
  "shower rain": "lluvia.jpg", //drizle
  "rain": "lluvia.jpg",
  "thunderstorm": "lluvia.jpg",
  "snow": "snow.jpg",
  "mist": "mist.jpg"
}