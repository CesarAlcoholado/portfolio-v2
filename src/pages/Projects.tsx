import { LazyLoadImage } from "react-lazy-load-image-component";
import projects from "../utils/projects.json";
import "react-lazy-load-image-component/src/effects/blur.css";
import { svgColor } from "../utils/constants";
import { usePortfolioContext } from "../context/PortfolioContext";
import { Link } from "react-router-dom";

export const Projects = () => {

  const { theme } = usePortfolioContext();

  return (
    <div className="grid grid-cols-1 w-auto gap-2.5 h-auto place-items-center m-1.5 font-montserrat">
      <div className="w-full h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 p-2">
        <h2 className="text-3xl font-medium mb-1 text-gray-500 dark:text-gray-200">
          {" "}
          Work experience
        </h2>
        <p className="text-base font-medium mb-1 text-gray-500 dark:text-gray-200 font-firaSans">
          Here you will find some of my recent projects
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 w-full h-auto">
        {projects.map((project, index) => (
          <div
            className="w-full h-full rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 card-animation"
            key={index}
          >
            <div className="relative h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-between items-center gap-1.5 p-2 dark:border-gray-800">
              <div className="w-full flex justify-between items-start">
                <h2 className="text-xl text-gray-500 dark:text-gray-200 text-left font-montserrat font-bold">
                  {project.name}
                </h2>
                <div className="flex gap-1.5">
                  {project.repo && (
                    <Link
                      to={project.repo}
                      className="w-6 cursor-pointer shrink-0"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <svg viewBox="0 0 128 128">
                        <g fill={`${svgColor[theme]}`}>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                          />
                          <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                        </g>
                      </svg>
                    </Link>
                  )}
                  {project.youtube && (
                    <Link
                      to={project.youtube}
                      className="w-6 cursor-pointer shrink-0"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FF3D00"
                          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                        ></path>
                        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                      </svg>
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      to={project.link}
                      className="w-6 cursor-pointer shrink-0"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke={`${svgColor[theme]}`}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
              <p className="w-full text-sm text-gray-500 dark:text-gray-200 font-firaSans mt-3 mb-1 text-left">
                {project.description}
              </p>
              <LazyLoadImage effect="blur" src={project.image} width={"100%"} />
              <ul className="w-full flex font-firaSans font-sm text-gray-500 dark:text-gray-200 m-1 flex-wrap ">
                {project.stack.map((tech, index) => (
                  <li
                    key={index}
                    className="text-sm font-firaSans text-gray-500 dark:text-gray-200 mr-2 border-2 border-solid rounded-xs border-borderLight dark:border-borderDark p-1 "
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}