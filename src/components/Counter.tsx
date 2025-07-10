import React, { useRef } from "react";
import { useMotionValue, motion, animate, useInView } from "motion/react";
import { useEffect, useState } from "react";

function Counter() {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 100, { duration: 5 });

      // Subscribe to count changes and update display
      const unsubscribe = count.on("change", (latest) => {
        setDisplay(Number(latest.toFixed(0)));
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [count, isInView]);

  return (
    <motion.pre
      ref={ref}
      className="font-Inter flex flex-col items-center justify-center font-mono text-white w-[577px] h-[400px] rounded-4xl bg-[#1d2628]"
    >
      <motion.div>{display}</motion.div>
      <motion.div className="bg-[#ffffff0d] rounded-4xl  py-1 px-1.5 flex gap-4">
        <div className="capitalize bg-white text-[#121b1c] rounded-2xl px-3 p-1">
          <p>monthly</p>
        </div>
        <div className="capitalize text-white py-1 px-1.5 opacity-15">
          <p>yearly</p>
        </div>
      </motion.div>
    </motion.pre>
  );
}

export default Counter;
