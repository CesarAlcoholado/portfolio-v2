import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-auto h-11 rounded-md bg-cardLight border-borderLight border-2 border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5 m-1.5">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link to="/" className="no-underline">
          <h1 className="text-base font-bold text-white grid place-content-center mb-2 md:mb-0">
            Home
          </h1>
        </Link>
      </div>
    </nav>
  );
}