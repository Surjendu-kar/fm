import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  spring,
  useCycle,
  useScroll,
  useTransform,
} from "motion/react";

const animateVariants = {
  stacked: (i) => ({
    x: "-50%",
    y: [0, -7, -14][i],
    opacity: [1, 0.8, 0.2][i],
    zIndex: [3, 2, 1][i],
    boxShadow: [
      "0px 4px 20px 0px #00000022",
      "0px 8px 40px 0px #00000033",
      "0px 12px 60px 0px #00000044",
    ][i],
    width: ["250px", "230px", "210px"][i],
    height: "50px",
    borderRadius: "12px",
    position: "absolute",
    left: "50%",
    top: 0,
  }),
  column: (i) => ({
    x: "-50%",
    y: [50, 110, 170][i],
    opacity: 1,
    zIndex: 1,
    boxShadow: [
      "0px 4px 20px 0px #00000022",
      "0px 8px 40px 0px #00000033",
      "0px 12px 60px 0px #00000044",
    ][i],
    width: "250px",
    height: "50px",
    borderRadius: "12px",
    position: "absolute",
    left: "50%",
    top: 0,
  }),
};

const Practice = () => {
  const [show, setShow] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [cycle, cycleLayout] = useCycle("stacked", "column");
  const [animationCycle, setAnimationCycle] = useCycle("hidden", "visible");

  // New list and item variants for the animated list
  const list = {
    visible: {
      opacity: 1,
      transition: {
        type: spring,
        when: "beforeChildren",
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // style={{ opacity }}
      className="flex px-20 h-[200px] justify-center  gap-40"
    >
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 180, 180, 0, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="bg-white w-[100px] h-[100px]"
      />

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="bg-[#0cdcf7] h-[100px] w-[100px] rounded-xl"
            />
          )}
        </AnimatePresence>
        <div
          className="cursor-pointer bg-[#0cdcf7] h-[40px] w-[100px] rounded-xl flex justify-center items-center"
          onClick={() => setShow((s) => !s)}
        >
          {show ? "Hide" : "Show"}
        </div>
      </div>
      <div className={`relative flex items-center justify-center w-[250px]`}>
        {cycle === "column" && (
          <motion.div className="px-2 flex items-center justify-between  text-white absolute top-0 w-full">
            <h1 className="capitalize font-bold ">notifications</h1>
            <button
              onClick={() => cycleLayout()}
              className="bg-[#1f1f1f] px-3 py-2 rounded-lg capitalize text-xs cursor-pointer hover:bg-white hover:text-[#1f1f1f] transition-colors duration-500"
            >
              collapse
            </button>
          </motion.div>
        )}

        {/*
          Render 3 notification cards using dynamic variants.
          The custom={i} prop allows each card to receive its own index,
          so the animateVariants function can return different styles for each card.
        */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={animateVariants}
            initial={cycle === "column" ? "stacked" : cycle}
            animate={cycle}
            transition={{
              duration: 0.4,
              delay: cycle === "column" ? i * 0.15 : (2 - i) * 0.05,
            }}
            onClick={() => cycleLayout()}
            className="bg-white cursor-pointer"
          />
        ))}
      </div>
      {/* New animated list style */}
      <div className="flex flex-col  ml-8 gap-2 w-[200px]">
        <button
          className="mb-2 h-[40px] w-[100px] mx-auto rounded bg-[#0cdcf7] text-white font-semibold hover:bg-[#099eb3] transition-colors duration-300"
          onClick={() => setAnimationCycle()}
        >
          {animationCycle === "visible" ? "Hide List" : "Show List"}
        </button>
        <AnimatePresence>
          {animationCycle === "visible" && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={list}
              className="flex flex-col gap-2"
            >
              <motion.li
                variants={item}
                className="bg-[#0cdcf7] h-[40px] w-[200px] rounded-md flex items-center justify-center text-white font-semibold shadow"
              >
                Item 1
              </motion.li>
              <motion.li
                variants={item}
                className="bg-[#0cdcf7] h-[40px] w-[200px] rounded-md flex items-center justify-center text-white font-semibold shadow"
              >
                Item 2
              </motion.li>
              <motion.li
                variants={item}
                className="bg-[#0cdcf7] h-[40px] w-[200px] rounded-md flex items-center justify-center text-white font-semibold shadow"
              >
                Item 3
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Practice;
