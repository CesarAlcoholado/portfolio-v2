import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants"
import '../index.css'

export const Language = () => {
  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:grid-language sm:h-full sm:row-start-2 sm:row-end-3">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center p-2 dark:border-gray-800">
        <span className="text-[12px] text-gray-500 dark:text-gray-200">
          LANG.
        </span>
        <p className="flex gap-1 text-2xl text-gray-500 font-medium dark:text-gray-200">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={`${svgColor[theme]}`}
            width={"28px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
          ES
        </p>
      </div>
    </div>
  );
}