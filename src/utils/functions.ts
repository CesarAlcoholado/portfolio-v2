import axios from 'axios';
import { Data, Root } from '../types';

//******* weather card *******/
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
export const getWeather = async (): Promise<Data | null> => {
  let result: Root;
  try {
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Bahia Blanca&appid=${APIKEY}&units=metric`);
    return result.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const fhToCelsius = (temp:number | undefined)=> {
  return temp ? Math.floor((temp - 32) * 1.8).toFixed(1) : 0
}