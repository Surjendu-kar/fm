import React from "react";
import { motion } from "motion/react";
import BasicMotion from "./components/BasicMotion";
import KeyframesMotion from "./components/KeyframesMotion";
import ScrollMotion from "./components/ScrollMotion";
import Practice from "./components/Practice";
import Counter from "./components/Counter";
import FmLayout from "./components/FmLayout";
import FmUseAnimation from "./components/FmUseAnimation";
import AnimationSequences from "./components/AnimationSequences";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header with scroll progress */}
      <ScrollMotion />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-24"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Framer Motion Showcase
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center text-gray-400 mt-6 max-w-2xl mx-auto"
        >
          Explore the power of animations with React and Framer Motion
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-32 pb-32">
        {/* Music Player Section */}
        <section>
          <SectionHeader title="Interactive Music Player" />
          <FmLayout />
        </section>

        {/* Animation Sequences */}
        <section>
          <SectionHeader title="Animation Sequences" />
          <AnimationSequences />
        </section>

        {/* Counter Section */}
        <section>
          <SectionHeader title="Animated Counter" />
          <div className="flex justify-center">
            <Counter />
          </div>
        </section>

        {/* Text Animation Section */}
        <section>
          <SectionHeader title="Text Animations" />
          <FmUseAnimation />
        </section>

        {/* Practice Section */}
        <section>
          <SectionHeader title="Practice Animations" />
          <Practice />
        </section>
      </div>
    </div>
  );
}

// Reusable Section Header Component
const SectionHeader = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, type: "spring" }}
    className="flex flex-col items-center mb-16"
  >
    <motion.div
      initial={{ width: "0px" }}
      animate={{ width: "96px" }}
      transition={{ duration: 0.5, }}
      className=" h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
    />
    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
      {title}
    </h2>
  </motion.div>
);

export default App;
