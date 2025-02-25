import { LazyLoadImage } from "react-lazy-load-image-component";
import Simon from "../assets/Simon.jpg";

export const Profile = () => {
  return (
    <div className="col-span-2 w-full h-auto rounded-md bg-cardLight border-borderLight border-2 border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="h-full w-full flex flex-col border-gray-100 rounded-md border-[1px] gap-2.5 p-3 dark:border-gray-800">
        <div className="flex w-full justify-between">
          <h4 className="text-sm text-gray-500 font-medium dark:text-gray-200">
            ABOUT ME
          </h4>
          <p className="text-sm text-gray-500 font-medium dark:text-gray-200">
            icons
          </p>
        </div>
        <LazyLoadImage
          src={Simon}
          className="w-32 h-28 rounded-md shadow-sm shadow-gray-900/5 mt-2.5 mb-2.5 border-[1px] dark:border-gray-800"
        />
        <p className="text-md text-gray-500 font-medium dark:text-gray-200">
          Hi! I'm{" "}
          <span className="text-md text-blue-400 dark:text-gray-200">
            César
          </span>{" "}
          <br />A front-end dev. from{" "}
          <span className="text-md font-medium text-blue-400">Arg</span>
          <span className="text-md text-gray-500 font-medium dark:text-gray-200">
            ent
          </span>
          <span className="text-md font-medium text-blue-400">ina 🧉</span>
          <br />
          <span className="text-md text-gray-500 font-medium dark:text-gray-200">
            Currently working as a freelancer
          </span>
        </p>

        <p className="text-md text-gray-500 font-medium dark:text-gray-200"></p>
      </div>
    </div>
  );
}