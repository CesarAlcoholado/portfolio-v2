import { Link } from "react-router-dom";
import { svgColor } from "../utils/constants";
import { usePortfolioContext } from "../context/PortfolioContext";

export const NavBar = () => {

  const { theme } = usePortfolioContext()

  return (
    <nav className="w-auto h-11 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 m-1.5">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex justify-end items-center gap-1.5 dark:border-gray-800 p-2">
        <p className="text-sm text-gray-500 dark:text-gray-200 font-medium">Home</p>
        <p className="text-sm text-gray-500 dark:text-gray-200 font-medium">Projects</p>
        <p className="text-sm text-gray-500 dark:text-gray-200 font-medium">Blog</p>
      </div>
    </nav>
  );
}