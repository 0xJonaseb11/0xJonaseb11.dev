/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import AboutMeContext from "../../context/AboutMeContext";
//import profileImage from '../../images/ProfileMe/Profile7.jpg';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src =
      /*profileImage;*/
      image.onload = () => {
        setImageLoaded(true);
      };
  }, []);

  return (
    <div className="block lg:flex lg:gap-12 mt-10 sm:mt-16 mb-16">
      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start"
      >
        <div className="relative">
          {imageLoaded ? (
            <motion.img
              src={profileImage}
              className="rounded-2xl w-full max-w-sm shadow-2xl border-4 border-indigo-500/20 dark:border-indigo-400/20"
              alt="Profile"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ) : (
            <Skeleton
              variant="rect"
              className="w-full max-w-sm h-96 rounded-2xl"
              animation="wave"
            />
          )}
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Bio Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-general-regular w-full lg:w-2/3"
      >
        <div className="space-y-6">
          {aboutMe.map((bio, index) => (
            <motion.div
              key={bio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white/60 dark:bg-primary-dark/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/30 dark:border-ternary-dark/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-500 dark:text-indigo-400 mb-3">
                {bio.title}
              </h3>
              <p className="text-ternary-dark dark:text-ternary-light text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {bio.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeBio;
