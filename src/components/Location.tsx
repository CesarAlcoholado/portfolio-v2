
export const Location = () => {
  return (
    <div className="w-full h-[200px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:grid-location">
      <div className="relative h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800 ">
        <span className="text-[12px] text-gray-700 dark:text-gray-200 z-10">
          location
        </span>
        <p className="flex text-2xl text-gray-700 font-medium dark:text-gray-200 z-10">
          BUENOS AIRES
        </p>
        <div className="absolute w-full h-full rounded-md opacity-70 bg-[url(/src/assets/locationCard/BsAsSilohuete.jpg)] bg-cover bg-no-repeat top-0 bottom-0"></div>
      </div>
    </div>
    )}