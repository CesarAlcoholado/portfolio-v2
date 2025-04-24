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
      {/* <main>
        Ad et mollit ipsum pariatur occaecat et. Consequat incididunt consequat
        adipisicing tempor commodo qui nostrud veniam ipsum elit nisi duis est.
        Ut magna labore eiusmod velit officia ut aute cillum anim est consequat
        ullamco sunt. Minim Lorem exercitation ad aute nisi magna ex laboris
        mollit. Veniam id Lorem enim excepteur irure. Cupidatat amet est nostrud
        in voluptate ut officia laborum duis enim cupidatat.
      </main> */}
      <div className="relative w-[414px] h-[504px] flex flex-col gap-2 rounded-2xl bg-cardLight dark:bg-backgroundDark p-1">
        <div className="w-[414px] h-[250px] rounded-md bg-cardLight dark:bg-red-400 border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5"></div>
        <div className="absolute flex justify-center items-center rounded-full w-[260px] h-[260px] bg-cardLight dark:bg-backgroundDark transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LazyLoadImage
            src={pfp}
            className="rounded-full w-[240px] h-[240px]"
          />
        </div>
        <div className="w-[414px] h-[250px] rounded-md bg-cardLight dark:bg-red-400 border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5"></div>
      </div>
    </>
  );
};
