import React from "react";
import { motion } from "framer-motion";

const CounterItem = ({ title, counter, measurement }) => {
  return (
    <motion.div
      className="mb-8 sm:mb-0 bg-white/50 dark:bg-primary-dark/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30 dark:border-ternary-dark/30 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      >
        {counter} {measurement}
      </motion.h2>
      <span className="font-general-regular block text-sm sm:text-base text-center text-ternary-dark dark:text-ternary-light">
        {title}
      </span>
    </motion.div>
  );
};

export default CounterItem;
