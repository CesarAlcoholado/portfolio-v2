import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const Email = () => {

  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[80px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:hidden">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <p className="flex gap-2.5 text-3xl text-gray-500 dark:text-gray-200">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={`${svgColor[theme]}`}
            width={"40px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          Email
        </p>
      </div>
    </div>
  );
};
