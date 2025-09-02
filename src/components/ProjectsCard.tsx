import { useTranslation } from "react-i18next";
import { usePortfolioContext } from "../context/PortfolioContext";
import { svgColor } from "../utils/constants";

export const ProjectsCard = () => {
  const { theme } = usePortfolioContext()
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[130px] rounded-md border-blue-600/10 border-4 border-solid shadow-sm shadow-gray-900/5 sm:grid-projects sm:row-start-6 sm:row-end-8 lg:h-full lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 overflow-hidden card-animation scroll-reveal dark:bg-[linear-gradient(to_right,_rgba(79,70,229,0.1)_0%,_rgba(8,145,178,0.1)_100%)] hover:border-blue-600/40 cursor-pointer">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-firaSans text-gray-500 dark:text-gray-200 md:text-base">
            {t("projects.my")}
          </span>
        </div>
        <p className="text-2xl flex gap-2 font-medium text-gray-500 dark:text-gray-200 md:text-3xl">
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
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          {t("projects.projects")}
        </p>
        <span className="text-xs font-firaSans text-gray-500 dark:text-gray-200 md:text-base">
          {t("projects.take_a_look")} »»
        </span>
      </div>
    </div>
  );
};
