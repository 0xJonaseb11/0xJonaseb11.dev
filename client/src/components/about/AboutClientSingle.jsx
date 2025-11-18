import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutClientSingle = ({ title, image }) => {
  return (
    <motion.div
      className="group"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white/70 dark:bg-primary-dark/70 backdrop-blur-sm border border-white/40 dark:border-ternary-dark/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
        <LazyLoadImage
          alt={title}
          effect="blur"
          className="w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
          src={image}
        />
      </div>
    </motion.div>
  );
};

export default AboutClientSingle;
