import React from "react";
import { motion } from "motion/react";
import BasicMotion from "./components/BasicMotion";
import KeyframesMotion from "./components/KeyframesMotion";
import ScrollMotion from "./components/ScrollMotion";
import Practice from "./components/Practice";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="h-screen pt-10 ">
      {/* basic */}
      <BasicMotion />
      {/* keyframes animation */}
      <KeyframesMotion />

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

      <div className="flex justify-center items-center [perspective:1000px] [transform-style:preserve-3d]">
        {/* button */}
        <motion.button
          whileHover={{
            rotateX: 10,
            rotateY: 20,
            boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
            y: -5,
          }}
          whileTap={{
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]"
        >
          <span className="group-hover:text-cyan-500 transition-colors duration-300">
            Button
          </span>
          <span className="absolute h-px w-3/4 mx-auto inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm absolute h-[4px] w-full mx-auto inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        </motion.button>
      </div>

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

      <Counter />
    </div>
  );
}

export default App;
