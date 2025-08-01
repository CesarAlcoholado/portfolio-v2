import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const Linkedin = () => {

  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[80px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:row-start-11 sm:row-end-12 sm:col-span-1 sm:h-[130px] lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-6 xl:col-start-4 xl:col-end-5 xl:row-start-4 xl:row-end-5 xl:h-full">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <p className="flex gap-2.5 text-3xl font-medium text-gray-500 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-[30px]"
            fill={`${svgColor[theme]}`}
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          LINKEDIN
        </p>
      </div>
    </div>
  );
};
