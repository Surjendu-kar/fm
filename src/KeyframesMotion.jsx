import React from "react";
import { motion } from "motion/react";

const KeyframesMotion = () => (
  <motion.div
    className="box-3"
    animate={{
      // path animation
      x: [0, 1200, 1200, 0, 0],
      y: [0, 0, 300, 300, 0],
      rotate: [0, 10, 0, -10, 0],
    }}
    transition={{
      duration: 3,
      delay: 1,
    }}
    
  />
);

export default KeyframesMotion;
