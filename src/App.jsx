import React from "react";
import { motion } from "motion/react";

function App() {
  return (
    <div className="main-container">
      <motion.div
        className="box-1"
        initial={{
          // initial position
          x: 100,
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
          x: 100,
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
          x: 100,
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
      {/* keyframes animation */}
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
    </div>
  );
}

export default App;
