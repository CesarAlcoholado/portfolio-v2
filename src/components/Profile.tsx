import { LazyLoadImage } from "react-lazy-load-image-component";
import Simon from "../assets/profileCard/Simon.jpg";
import { svgColor } from "../utils/constants";
import { usePortfolioContext } from "../context/PortfolioContext";

export const Profile = () => {

  const { theme } = usePortfolioContext()

  return (
    <div className="col-span-2 w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="h-full w-full flex flex-col border-gray-100 rounded-md border-[1px] gap-2.5 p-4 dark:border-gray-800">
        <div className="flex w-full justify-between">
          <h4 className="text-sm text-gray-500 font-medium dark:text-gray-200 font-montserrat">
            ABOUT ME
          </h4>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[15px]"
              fill={`${svgColor[theme]}`}
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              className="w-[15px]"
              stroke={`${svgColor[theme]}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>
        </div>
        <LazyLoadImage
          src={Simon}
          className="w-32 h-28 rounded-md shadow-sm shadow-gray-900/5 mt-2.5 mb-2.5 border-[1px] dark:border-gray-800"
        />
        <p className="text-md text-gray-500 font-medium dark:text-gray-200">
          Hi! I'm{" "}
          <span className="text-md text-blue-400 dark:text-gray-50 font-bold">
            César
          </span>{" "}
          <br />A front-end dev. from{" "}
          <span className="text-md font-medium text-blue-400">Arg</span>
          <span className="text-md text-gray-500 font-medium dark:text-gray-200">
            ent
          </span>
          <span className="text-md font-medium text-blue-400">ina 🧉</span>
          <br />
          <span className="flex text-md font-light text-gray-700 dark:text-gray-200 gap-2">
            Currently working as a freelancer{" "}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#51A2FF"
              width={"20px"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
              />
            </svg>
          </span>
        </p>
        <h4 className="flex text-sm text-gray-400 font-medium dark:text-gray-300 gap-2 mt-5">
          CURIOUS FACTS
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={`${svgColor[theme]}`}
            width={"16px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
            />
          </svg>
        </h4>
        <ul className="flex flex-col">
          <li className="text-md text-blue-500 font-bold">
            •
            <span className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">
              {" "}
              31 years old
            </span>
          </li>
          <li className="text-md text-blue-500 font-bold">
            •
            <span className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">
              Cat dad
            </span>
          </li>
          <li className="text-md text-blue-500 font-bold">
            •
            <span className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">
              C2 english level
            </span>
          </li>
          <li className="text-md text-blue-500 font-bold">
            •
            <span className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">
              Always learning
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}