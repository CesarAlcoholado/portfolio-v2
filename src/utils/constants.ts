import { SvgColor, WeatherIcons } from "../types";
import clear from "../assets/weatherIcons/clear.png";
import cloud from "../assets/weatherIcons/cloud.png";
import drizzle from "../assets/weatherIcons/drizzle.png";
import humidity from "../assets/weatherIcons/humidity.png";
import mist from "../assets/weatherIcons/mist.png";
import rain from "../assets/weatherIcons/rain.png";
import snow from "../assets/weatherIcons/snow.png";
import wind from "../assets/weatherIcons/wind.png";

  export const svgColor: SvgColor = {
    light: "#6a7282",
    dark: "#eeeeee",
  };
    
  export const weatherIcon: WeatherIcons = {
  "clear sky": clear,
  "few clouds": cloud,
  "scattered clouds": cloud,
  "broken clouds": cloud,
  "shower rain": drizzle, //drizle
  "rain": rain,
  "thunderstorm": rain,
  "snow": snow,
  "mist": mist,
  "wind": wind,
  "humidity": humidity,
  undefined: ""
}