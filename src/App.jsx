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

      <motion.div
        className="button"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          backgroundColor: "black",
          color: "white",
        }}
        initial={{
          x: 700,
        }}
      >
        Button
      </motion.div>

      <motion.div
        className="drag"
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ left: 0 }}
      >
        Drag
      </motion.div>
    </div>
  );
}

export default App;
