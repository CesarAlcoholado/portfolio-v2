  //******* Mode ********
  interface SvgColor {
    [light: string]: string;
    dark: string;
  }

  //******* Weather *******

  export interface Root {
  data: Data
}

  interface Data {
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
}

interface Clouds {
  all: number
}

interface Sys {
  country: string
  sunrise: number
  sunset: number
}

interface WeatherIcons {
  [key: string]: string;
}
