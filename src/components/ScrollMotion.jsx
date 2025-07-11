import React from "react";
import { motion, useScroll } from "motion/react";
import { useTransform } from "framer-motion";

const ScrollMotion = () => {
  const { scrollYProgress } = useScroll();
  // scrollYProgress.current tells us how far we have scrolled vertically, as a percentage of the total scrollable area.
  // We don't need to manually read or pass .current to useTransform—Framer Motion does this for us.

  // When scrollYProgress is 0 (top), opacity will be 0 (invisible).
  // When scrollYProgress is 1 (bottom), opacity will be 1 (fully visible).
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className=" text-white text-center font-mono space-y-6">
      <motion.div
        className="bg-red-500 origin-left w-full h-3 fixed top-0 left-0"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default ScrollMotion;
