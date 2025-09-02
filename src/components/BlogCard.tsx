import { useEffect, useRef } from "react";
import { TypingEffect } from "./Typing-effect";
import {
  motion,
  useAnimate,
  useInView,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

export const BlogCard = () => {

  const { i18n } = useTranslation();
  const text = i18n.t("take_a_look");
  const [scope, animate] = useAnimate();
  // const isInView = useInView(scope);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 1. Define tus breakpoints con useMediaQuery
  // Ajusta estos valores según tus breakpoints de Tailwind o tus necesidades
  const isMobile = useMediaQuery({query: "(max-width: 767px)"}); // Ejemplo: hasta 767px es mobile
  const isTablet = useMediaQuery({query: "(min-width: 768px) and (max-width: 1023px)"}); 
  // Ejemplo: de 768px a 1023px es tablet
  const isDesktop = useMediaQuery({query: "(min-width: 1024px)"}); // Ejemplo: de 1024px en adelante es desktop

  // 2. Define la lógica condicional para el valor 'y' de la animación
  let yValue = 0; // Valor por defecto (ej. para desktop o si no hay match)

  if (isMobile) {
    yValue = -100; // Desplazamiento para mobile
  } else if (isTablet) {
    yValue = -150; // Desplazamiento para tablet
  } else if (isDesktop) {
    yValue = -210; // Desplazamiento para desktop (o cualquier otro valor)
  }

  // 3. Construye el objeto de animación
  const animationProps = isInView ? { y: yValue } : { y: 0 }; // Puedes ajustar el 'initial' si prefieres

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <div
      ref={scope}
      className="w-full h-[130px] col-span-2 rounded-md  border-blue-600/10 border-4 border-solid  shadow-sm shadow-gray-900/5 sm:grid-blog sm:h-[220px] lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-7 lg:h-full xl:col-start-1 xl:col-end-2 xl:row-start-4 xl:row-end-5 card-animation scroll-reveal  dark:bg-[linear-gradient(to_right,_rgba(79,70,229,0.1)_0%,_rgba(8,145,178,0.1)_100%)] hover:border-blue-600/40 cursor-pointer"
    >
      <div
        ref={ref}
        className="relative h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-4 pb-0 dark:border-gray-800 box-border overflow-hidden"
      >
        <motion.div
          className="absolute flex flex-col items-center w-[330px] h-full pt-2.5 px-10 sm:h-[250px] md:h-[230px] md:w-[80%] border-solid border-blue-400 border-[1px] border-b-0 bottom-[-100%] shadow-[5px_5px_0px_0px_rgba(81,_162,_255,_1)] md:shadow-[10px_10px_0px_0px_rgba(81,_162,_255,_1)] lg:h-[230px] "
          // animate={isInView ? { y: -100 } : ""}
          animate={animationProps}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="absolute w-[100%] h-full top-[-10px]">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#51A2FF"
              className="w-8 md:w-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </div>
          <span className="flex text-xs font-firaSans text-gray-500 dark:text-gray-200 gap-1 mt-5 md:mt-10 md:text-base">
            BLOG
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#51A2FF"
              className="w-3 md:w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </span>
          <TypingEffect text={text} />
        </motion.div>
      </div>
    </div>
  );
}