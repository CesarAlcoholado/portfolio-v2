
import { usePortfolioContext } from "../context/PortfolioContext"
import { svgColor } from "../utils/constants";
import "../index.css"

export const Mode = () => {
  const { theme, toggleMode } = usePortfolioContext()

  return (
    <div
      className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 md:grid-mode md:h-full md:row-start-1 md:row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2"
      onClick={toggleMode}
    >
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center p-2 dark:border-gray-800">
        <span className="text-xs font-firaSans text-gray-500 dark:text-gray-200 md:text-base">
          {theme.toUpperCase()}
        </span>
        <p className="flex text-2xl text-gray-500 font-medium dark:text-gray-200 gap-2 md:text-3xl">
          MODE
          {theme == "dark" ? (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${svgColor[theme]}`}
              className="w-7 md:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${svgColor[theme]}`}
              className="w-7 md:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </p>
      </div>
    </div>
  );
}