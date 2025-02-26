
export const Location = () => {
  return (
    <div className="relative w-full h-[200px] col-span-2 rounded-md bg-cardLight border-borderLight border-2 border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800 ">
        <span className="text-[12px] text-gray-500 dark:text-gray-50 z-10">
          location
        </span>
        <p className="flex text-2xl text-gray-500 font-medium dark:text-gray-50 z-10">
          BUENOS AIRES
        </p>
        <div className="absolute w-full h-full opacity-40 bg-[url(/src/assets/BsAs.gif)] bg-cover bg-no-repeat z-0"></div>
      </div>
    </div>
  );
}