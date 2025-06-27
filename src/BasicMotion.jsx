import React from "react";
import { motion } from "motion/react";

const BasicMotion = () => (
  <>
    <motion.div
      className="box-1"
      initial={{
        // initial position
        x: -100,
      }}
      animate={{
        // final position
        x: 1000,
        rotate: 360,
      }}
      transition={{
        duration: 2,
        delay: 1,
        ease: "circInOut",
      }}
    />
    <motion.div
      className="box-2"
      initial={{
        // initial position
        x: -100,
      }}
      animate={{
        // final position
        x: 1000,
        rotate: 360,
      }}
      transition={{
        duration: 2,
        delay: 1,
        ease: "circInOut",
        repeat: Infinity,
      }}
    />
    <motion.div
      className="circle"
      initial={{
        // initial position
        x: -100,
      }}
      animate={{
        // final position
        x: 1000,
        rotate: 360,
      }}
      transition={{
        duration: 2,
        delay: 1,
        ease: "circInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </>
);

export default BasicMotion;
