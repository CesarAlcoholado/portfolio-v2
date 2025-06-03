import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const Email = () => {

  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[80px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:grid-email sm:h-full sm:row-start-3 sm:row-end-4 sm:col-start-2 sm:col-end-3">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center p-2 dark:border-gray-800">
      <span className="text-xs font-firaSans text-gray-500 dark:text-gray-200 md:text-base">CONTACT</span>
        <p className="flex gap-2.5 text-2xl font-medium text-gray-500 dark:text-gray-200 md:text-3xl">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={`${svgColor[theme]}`}
            className="w-7 md:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          EMAIL
        </p>
      </div>
    </div>
  );
};
