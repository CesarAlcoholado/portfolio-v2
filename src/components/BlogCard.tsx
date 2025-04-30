import { useEffect } from "react";
import { TypingEffect } from "./Typing-effect";
import {motion, useAnimate, useInView} from 'framer-motion'

export const BlogCard = () => {

      const [scope, animate] = useAnimate();
      const isInView = useInView(scope);

      useEffect(() => {
        if (isInView) {
          animate(scope.current, { opacity: 1 });
        }
      }, [isInView]);

  return (
    <div
      ref={scope}
      className="w-full h-[130px] col-span-2 rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5 sm:grid-blog"
    >
      <div className="relative h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-4 pb-0 dark:border-gray-800 box-border overflow-hidden">
        <motion.div
          className="absolute flex flex-col items-center w-[330px] h-full pt-2.5 pl-10 pr-10 border-solid border-blue-400 border-[1px] border-b-0 bottom-[-100%] shadow-[5px_5px_0px_0px_rgba(81,_162,_255,_1)]"
          animate={isInView ? { y: -100 } : ""}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="absolute w-[100%] h-full top-[-10px]">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#51A2FF"
              width={"30px"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </div>
          <span className="flex text-[12px] text-gray-500 dark:text-gray-200 gap-1 m-2">
            Blog
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#51A2FF"
              width={"12px"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </span>
          <TypingEffect text="GIVE IT A READ »»" />
        </motion.div>
      </div>
    </div>
  );
}