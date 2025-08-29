import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const Email = () => {

  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[80px] col-span-2 rounded-md bg-backgroundLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 md:grid-email md:h-full md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-3 xl:row-end-4 card-animation scroll-reveal">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center p-2 dark:border-gray-800">
        <span className="text-xs font-firaSans text-gray-500 dark:text-gray-200 md:text-base">
          CONTACT
        </span>
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
