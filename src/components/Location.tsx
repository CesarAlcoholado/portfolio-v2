import { LazyLoadImage } from "react-lazy-load-image-component"
import Arg_Sticker from "../assets/locationCard/Arg_Sticker.png"

export const Location = () => {
  return (
    <div className="w-full h-[200px] col-span-2 rounded-md bg-backgroundLight border-borderLight border-4 border-solid md:h-[250px] dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5 md:grid-location lg:h-full lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2 xl:col-start-3 xl:col-end-5 xl:row-start-1 xl:row-end-2 card-animation scroll-reveal">
      <div className="relative h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800 ">
        <div className="absolute flex items-center bottom-1.5 right-1.5">
          {/* <span className=" text-xs font-firaSans text-gray-700 dark:text-gray-200 z-10 md:text-base">
            LOCATION
          </span> */}
          <p className="flex text-xl text-gray-700 font-medium dark:text-gray-200 z-10 md:text-3xl">
            BUENOS AIRES, ARGENTINA
          </p>
        </div>
        <div className="absolute w-full h-full rounded-md opacity-70 bg-[url(/src/assets/locationCard/Location_Map.jpeg)] bg-cover bg-no-repeat top-0 bottom-0 md:bg-center brightness-75"></div>
        <LazyLoadImage
          src={Arg_Sticker}
          className="absolute w-24 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] brightness-75 hover:animate-spin-and-back"
        />
      </div>
    </div>
  );}