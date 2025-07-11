import React from "react";
import { motion, useAnimate } from "motion/react";

function AnimationSequences() {
  const [scope, animate] = useAnimate();

  const startAnimation = async () => {
    // Execute the sequence step by step
    await animate(
      ".loader",
      {
        opacity: 1,
        width: "1.25rem", // 5 in Tailwind = 1.25rem
      },
      {
        duration: 0.1,
      }
    );

    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      }
    );

    // Hide loader and text simultaneously
    const hideAnimations = [
      animate(
        ".loader",
        {
          opacity: 0,
          scale: 0,
        },
        {
          duration: 0.1,
        }
      ),
      animate(
        ".text",
        {
          opacity: 0,
        },
        {
          duration: 0.1,
          ease: "easeInOut",
        }
      ),
    ];

    await Promise.all(hideAnimations);

    await animate(
      "button",
      {
        width: "5rem",
        borderRadius: "100%",
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      }
    );

    animate(
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        background: "rgb(34 197 94)", // green-500
      },
      {
        duration: 0.8,
        ease: "easeInOut",
      }
    );

    animate(
      ".check-icon",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
      }
    );

    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      }
    );
  };

  return (
    <div
      className="relative w-60 h-20 mx-auto flex justify-center items-center"
      ref={scope}
    >
      <motion.button
        onClick={startAnimation}
        className="h-20 w-[30rem] flex justify-center items-center gap-3 rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium cursor-pointer"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{ width: "0rem", opacity: 0 }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>

        <motion.span className="text-lg text">Purchase Now ($169)</motion.span>

        <motion.svg
          initial={{ opacity: 0 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          strokeWidth={3}
          className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          ></motion.path>
        </motion.svg>
      </motion.button>
    </div>
  );
}

export default AnimationSequences;
