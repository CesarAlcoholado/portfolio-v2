import { useMemo} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pfp from "../assets/profileCard/Simon.jpg";

export const Blogs = () => {
  return (
    <>
      <section className="px-6 mx-auto">
        <p className=" mt-12 mb-5 text-3xl text-gray-500 dark:text-gray-200">
          Learning React 👋🏻 &nbsp;
        </p>
        <div className="flex justify-between">
          <div className="flex">
            <LazyLoadImage
              src={pfp}
              alt="profile icon"
              style={{ borderRadius: "100%" }}
              className="w-8"
            />
            <p className="text-lg whitespace-nowrap text-gray-500 dark:text-gray-200">
              Cesar Alcoholado
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-200">
            22/3/2025
          </span>
        </div>
      </section>
    </>
  );
};
