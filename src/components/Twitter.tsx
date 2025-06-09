import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const Twitter = () => {

  const { theme } = usePortfolioContext()

  return (
    <div className="w-full h-[80px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:grid-twitter sm:row-start-11 sm:row-end-12 sm:col-span-1 sm:h-[130px] lg:col-start-3 lg:col-end-4 lg:row-start-6 lg:row-end-7 xl:col-start-4 xl:col-end-5 xl:row-start-3 xl:row-end-4 xl:h-full">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <p className="flex gap-2.5 text-3xl font-medium text-gray-500 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[30px]"
            fill={`${svgColor[theme]}`}
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
          TWITTER
        </p>
      </div>
    </div>
  );
};
