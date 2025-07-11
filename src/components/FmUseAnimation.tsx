import React, { useEffect, useRef } from "react";
import { motion, useAnimate, useInView } from "motion/react";
import { stagger } from "motion";

function FmUseAnimation() {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView]);

  const startAnimation = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nonest ut sem efficitur ultrices. Nulla dictum pellentesque tellus et
  vulputate. Cras scelerisque consequat mauris eu bibendum. Sed sollicitudin
  sapien ac justo porta, eu sodales nulla dignissim. Curabitur accumsan nisl
  sit amet sem eleifend, in posuere diam sodales.`;

  return (
    <motion.div
      className="max-w-4xl mx-auto justify-center items-center pb-20 text-xl text-white"
      ref={scope}
    >
      {text.split(" ").map((word, idx) => (
        <motion.span
          ref={ref}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          key={word + idx}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}

export default FmUseAnimation;
