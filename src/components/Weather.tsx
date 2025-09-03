import { useEffect, useState } from "react";
import { getWeather } from "../utils/functions";
import { svgColor} from "../utils/constants";
import { usePortfolioContext } from "../context/PortfolioContext";
import { Data } from "../types";
import { useTranslation } from "react-i18next";

export const Weather = () => {
  const [weather, setWeather] = useState<Data | null>()
  const { theme } = usePortfolioContext()
  const { t } = useTranslation();

    useEffect(() => {
      // try {
      //   const callApi = async () => {
      //     const result = await getWeather();
      //     setWeather(result);
      //   };
      //   callApi()
      // } catch (error) {
      //   console.error(error)
      // }
    }, []);

  return (
    <div className="w-full h-[130px] rounded-md bg-backgroundLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:grid-area-weather sm:row-start-8 sm:row-end-10 lg:h-full lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5 xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3 card-animation scroll-reveal">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <span className="flex text-xs font-firaSans text-gray-500 dark:text-gray-200 gap-2 md:text-base">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={`${svgColor[theme]}`}
            className="w-4 md:w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          </svg>
          {t("weather")}
        </span>
        {/* <div className="flex flex-col items-center gap-3"> */}
        <p className="text-xl font-medium text-gray-500 dark:text-gray-200 sm:text-2xl md:text-3xl">
          {/* {fhToCelsius(weather?.main.temp)} */}
          {weather?.main.temp.toFixed(1)} ℃
        </p>
        <span className="flex text-xs text-gray-500 dark:text-gray-200 gap-2 text-center font-firaSans md:text-base">
          {weather?.weather[0].description}
        </span>
        {/* <LazyLoadImage src={weather?.weather[0].description ? weatherIcon[weather?.weather[0].description] : ""} className="w-10 h-10"/> */}
        {/* </div> */}
      </div>
    </div>
  );
}