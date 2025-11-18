import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import AboutBackground from "../components/shared/AboutBackground";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutMeProvider>
      <div className="relative min-h-screen">
        <AboutBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto relative z-10 pt-16 sm:pt-24 pb-12"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4"
          >
            About <span className="text-indigo-500 dark:text-indigo-400">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-ternary-dark dark:text-ternary-light mb-12 max-w-2xl"
          >
            Crafting innovative web3.0 solutions with passion and precision
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto relative z-10"
        >
          <AboutMeBio />
        </motion.div>

        {/** Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10"
        >
          <AboutCounter />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto relative z-10 pb-20"
        >
          <AboutClients />
        </motion.div>
      </div>
    </AboutMeProvider>
  );
};

export default About;
