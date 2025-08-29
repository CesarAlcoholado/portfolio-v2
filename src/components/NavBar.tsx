

export const NavBar = () => {

  return (
    <nav className="w-auto h-11 max-w-[2000px] mx-auto font-montserrat rounded-md bg-backgroundLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 m-1.5 md:h-14 card-animation">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex justify-end items-center gap-5 dark:border-gray-800 p-2">
        <p className="text-sm text-gray-500 dark:text-gray-200 font-medium md:text-lg">
          Home
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-200 font-medium md:text-lg">
          Projects
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-200 font-medium md:text-lg">
          Blog
        </p>
      </div>
    </nav>
  );
}