import { motion, useAnimate, useInView } from 'framer-motion';
import React, { useEffect } from 'react';
 
export function TypingEffect({ text = 'Typing Effect' }: { text: string }) {
  const ref = React.useRef(null);
  // const isInView = useInView(ref, { once: true });



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
      className="text-2xl text-center sm:text-4xl tracking-tighter md:text-3xl md:leading-[4rem] text-gray-500 font-medium dark:text-gray-200"
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