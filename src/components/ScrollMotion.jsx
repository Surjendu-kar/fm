import React from "react";
import { motion, useScroll } from "motion/react";
import { useTransform } from "framer-motion";

const ScrollMotion = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into different visual properties
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center"
    >
      {/* Progress bar container */}
      <div className="w-full h-1 bg-gray-800">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          style={{ width }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ scale }}
        className="flex items-center gap-2 py-2 px-4 bg-gray-900/50 backdrop-blur-sm rounded-full mt-4 border border-gray-800"
      >
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sm text-gray-400"
        >
          Scroll to explore
        </motion.div>
        <motion.svg
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="w-4 h-4 text-gray-400"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollMotion;
