import { LazyLoadImage } from "react-lazy-load-image-component";
import pfp from "../assets/profileCard/ProfileIcon.png"
import projects from "../utils/projects.json";

export const Projects = () => {
  return (
    <div className="grid grid-cols-2 w-auto gap-2.5 h-auto place-items-center m-1.5 font-montserrat">
      <div className="w-full h-auto col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <p className="text-3xl font-medium mb-1"> Work experience</p>
        Here you will find some of my recent projects
      </div>
      {/* <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div>
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div>
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div>
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div>
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div>
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div>
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
          Project example
          <LazyLoadImage src={pfp} width={"100%"}/>
        </div>
      </div> */}
      {projects.map((project, index) => (
        <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5" key={index}>
          <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
            {JSON.stringify(project.name)}
            <LazyLoadImage src={(project.image)} width={"100%"} />
          </div>
        </div>
      ))}
    </div>
  );
}