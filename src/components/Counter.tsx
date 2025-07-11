import React, { useRef } from "react";
import { useMotionValue, motion, animate, useInView } from "motion/react";
import { useEffect, useState } from "react";

function Counter() {
  // Define price points
  const MONTHLY_PRICE = 29;
  const YEARLY_PRICE = 249;

  const count = useMotionValue(MONTHLY_PRICE);
  const [currentPrice, setCurrentPrice] = useState(MONTHLY_PRICE);
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const targetPrice = period === "monthly" ? MONTHLY_PRICE : YEARLY_PRICE;
    const startPrice = period === "monthly" ? YEARLY_PRICE : MONTHLY_PRICE;

    // Set initial value instantly
    count.set(startPrice);
    setCurrentPrice(startPrice);

    // Then animate to target
    const controls = animate(count, targetPrice, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCurrentPrice(Math.round(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [period]);

  const handlePeriodToggle = () => {
    setPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  // Calculate savings
  const monthlySavings = Math.round(YEARLY_PRICE / 12);
  const yearlySavings = MONTHLY_PRICE * 12 - YEARLY_PRICE;

  return (
    <motion.div
      ref={ref}
      className="font-Inter flex flex-col items-center justify-center w-[400px] p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
    >
      {/* Price Display */}
      <div className="flex items-start gap-1 mb-2">
        <span className="text-2xl mt-2">$</span>
        <motion.div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {currentPrice}
        </motion.div>
        <span className="text-gray-400 mt-2">
          /{period === "monthly" ? "mo" : "yr"}
        </span>
      </div>

      {/* Savings Display */}
      {period === "yearly" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-sm text-green-400 mb-6"
        >
          Save ${yearlySavings}/year
        </motion.div>
      )}

      {/* Toggle Switch */}
      <motion.div
        className="bg-gray-800 rounded-full p-1 flex gap-2 cursor-pointer select-none"
        onClick={handlePeriodToggle}
      >
        <motion.div
          className={`relative px-4 py-2 rounded-full ${
            period === "monthly" ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {period === "monthly" && (
            <motion.div
              layoutId="pill"
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">Monthly</span>
        </motion.div>

        <motion.div
          className={`relative px-4 py-2 rounded-full ${
            period === "yearly" ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {period === "yearly" && (
            <motion.div
              layoutId="pill"
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">Yearly</span>
        </motion.div>
      </motion.div>

      {/* Features List */}
      <motion.div className="mt-8 space-y-3 w-full">
        {[
          "Unlimited access",
          "24/7 support",
          "Premium features",
          period === "yearly" && `Only $${monthlySavings}/mo when paid yearly`,
          period === "yearly" && "Priority updates",
        ]
          .filter((feature): feature is string => Boolean(feature))
          .map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <svg
                className="w-4 h-4 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </motion.div>
          ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
      >
        Get Started {period === "yearly" && "- Save $99"}
      </motion.button>
    </motion.div>
  );
}

export default Counter;
