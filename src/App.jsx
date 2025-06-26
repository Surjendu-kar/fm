import React from "react";
import { motion } from "motion/react";
import BasicMotion from "./BasicMotion";
import KeyframesMotion from "./KeyframesMotion";
import ScrollMotion from "./ScrollMotion";

function App() {
  return (
    <div className="main-container pt-10">
      {/* basic */}
      <BasicMotion />
      {/* keyframes animation */}
      <KeyframesMotion />
      {/* button */}
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
      {/* drag */}
      <motion.div
        className="drag"
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ left: 0 }}
      >
        Drag
      </motion.div>
      {/* scroll animation */}
      <ScrollMotion />
    </div>
  );
}

export default App;
