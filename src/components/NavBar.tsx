import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-auto h-11 rounded-md bg-cardLight border-borderLight border-2 border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5 m-1.5">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
      </div>
      {/* <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row"> */}
      {/* </div> */}
    </nav>
  );
}