import { motion, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
 
export function TypingEffect({ text = 'Typing Effect' }: { text: string }) {



    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
      if (isInView) {
        animate(scope.current, { opacity: 1 });
      }
    }, [isInView]);

  return (
    <h2
      ref={scope}
      className="text-xl text-center sm:text-3xl tracking-tighter md:text-4xl md:leading-[4rem] text-gray-500 font-medium dark:text-gray-200"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}