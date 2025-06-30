import React from "react";
import { motion } from "motion/react";
import BasicMotion from "./BasicMotion";
import KeyframesMotion from "./KeyframesMotion";
import ScrollMotion from "./ScrollMotion";
import Practice from "./Practice";

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, type: "spring", bounce: 0.3 }}
        className="flex flex-col items-center my-8"
      >
        <hr className="w-32 border-t-2 border-gray-300 mb-2" />
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Practices
        </h2>
      </motion.div>

      <Practice />
    </div>
  );
}

export default App;
