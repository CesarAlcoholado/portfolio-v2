
export const Location = () => {
  return (
    <div className="w-full h-[200px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid md:h-[250px] dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5 md:grid-location lg:h-full lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2 xl:col-start-3 xl:col-end-5">
      <div className="relative h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800 ">
        <span className="text-xs font-firaSans text-gray-700 dark:text-gray-200 z-10 md:text-base">
          LOCATION
        </span>
        <p className="flex text-2xl text-gray-700 font-medium dark:text-gray-200 z-10 md:text-3xl">
          BUENOS AIRES
        </p>
        <div className="absolute w-full h-full rounded-md opacity-70 bg-[url(/src/assets/locationCard/BsAsSilohuete.jpg)] bg-cover bg-no-repeat top-0 bottom-0 md:bg-center"></div>
      </div>
    </div>
    )}