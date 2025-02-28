import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const Projects = () => {
  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <div className="flex items-center gap-2">
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
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <span className="text-[12px] text-gray-500 dark:text-gray-200">
            WORK
          </span>
        </div>
        <p className="text-2xl text-gray-500 dark:text-gray-200">PROJECTS</p>
        <span className="text-[12px] text-gray-500 dark:text-gray-200">take a look »»</span>
      </div>
    </div>
  );
};
