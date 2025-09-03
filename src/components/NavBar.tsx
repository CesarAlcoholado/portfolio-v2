
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export const NavBar = () => {

  const { t } = useTranslation();

  return (
    <nav className="w-auto h-11 max-w-[2000px] mx-auto font-montserrat rounded-md bg-backgroundLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 m-1.5 md:h-14 card-animation">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex justify-end items-center gap-5 dark:border-gray-800 p-2">
        <Link to="/">
          <p className="text-sm text-gray-500 dark:text-gray-200 font-medium sm:text-base md:text-lg hover:text-blue-600">
            {t("navbar.home")}
          </p>
        </Link>
        <Link to="/projects">
          <p className="text-sm text-gray-500 dark:text-gray-200 font-medium sm:text-base md:text-lg hover:text-blue-600">
            {t("navbar.projects")}
          </p>
        </Link>
        <Link to="/blogs">
          <p className="text-sm text-gray-500 dark:text-gray-200 font-medium sm:text-base md:text-lg hover:text-blue-600">
              BLOG
          </p>
        </Link>
      </div>
    </nav>
  );
}