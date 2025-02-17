import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-full h-20 bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link to="/" className="no-underline">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            Home
          </h1>
        </Link>
      </div>
    </nav>
  );
}