import { useEffect } from "react";
import { getWeather } from "../utils/functions";
import { svgColor } from "../utils/constants";
import { usePortfolioContext } from "../context/PortfolioContext";

export const Weather = () => {

  const { theme } = usePortfolioContext()
    // useEffect(() => {
    //   const callApi = async () => {
    //     const result = await getWeather();
    //     return result;
    //   };
    //   callApi();
    // }, []);

  return (
    <div className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <span className="flex text-[12px] text-gray-500 dark:text-gray-200 gap-2">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={`${svgColor[theme]}`}
            width={"16px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          </svg>
          weather
        </span>
        <p className="text-2xl text-gray-500 dark:text-gray-200">Wheather</p>
      </div>
    </div>
  );
}