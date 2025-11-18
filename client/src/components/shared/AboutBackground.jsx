import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Import project images for creative background
import TarsierSafaris from "../../images/TarsierSafaris/TarsierSafaris.png";
import Web3Mates from "../../images/Web3Mates/Web3Mates.png";
import StoneProofLabs from "../../images/StoneProofLabs/StoneProofLabs.png";
import Digicert from "../../images/Digicert/Digicert.png";
import Socialite from "../../images/Socialite/Socialite.jpg";
import Italos from "../../images/Italos/Italos.png";

const AboutBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Creative arrangement with varied sizes and rotations - MORE VISIBLE
  const backgroundImages = [
    {
      src: StoneProofLabs,
      className:
        "absolute top-16 left-4 w-52 h-36 sm:w-72 sm:h-48 lg:w-96 lg:h-64",
      rotate: -18,
      zIndex: 1,
      delay: 0,
      speed: 0.4,
    },
    {
      src: Web3Mates,
      className:
        "absolute top-32 right-6 w-56 h-38 sm:w-80 sm:h-52 lg:w-[28rem] lg:h-[18rem]",
      rotate: 22,
      zIndex: 1,
      delay: 0.3,
      speed: -0.5,
    },
    {
      src: Digicert,
      className:
        "absolute top-64 left-12 w-48 h-32 sm:w-68 sm:h-44 lg:w-88 lg:h-56",
      rotate: 180,
      zIndex: 1,
      delay: 0.6,
      speed: 0.3,
    },
    {
      src: TarsierSafaris,
      className:
        "absolute top-[28rem] right-10 w-60 h-40 sm:w-88 sm:h-56 lg:w-[32rem] lg:h-[20rem]",
      rotate: -25,
      zIndex: 1,
      delay: 0.9,
      speed: -0.4,
    },
    {
      src: Socialite,
      className:
        "absolute top-[40rem] left-8 w-52 h-36 sm:w-76 sm:h-48 lg:w-[26rem] lg:h-[16rem]",
      rotate: 15,
      zIndex: 1,
      delay: 1.2,
      speed: 0.45,
    },
    {
      src: Italos,
      className:
        "absolute top-[52rem] right-12 w-56 h-38 sm:w-84 sm:h-52 lg:w-[30rem] lg:h-[18rem]",
      rotate: 200,
      zIndex: 1,
      delay: 1.5,
      speed: -0.35,
    },
    {
      src: StoneProofLabs,
      className:
        "absolute top-[64rem] left-16 w-48 h-32 sm:w-72 sm:h-44 lg:w-[24rem] lg:h-[14rem]",
      rotate: -12,
      zIndex: 1,
      delay: 1.8,
      speed: 0.4,
    },
    {
      src: Web3Mates,
      className:
        "absolute top-[76rem] right-8 w-52 h-36 sm:w-80 sm:h-48 lg:w-[28rem] lg:h-[16rem]",
      rotate: 20,
      zIndex: 1,
      delay: 2.1,
      speed: -0.45,
    },
    {
      src: Digicert,
      className:
        "absolute top-[88rem] left-10 w-44 h-30 sm:w-68 sm:h-40 lg:w-[22rem] lg:h-[12rem]",
      rotate: 190,
      zIndex: 1,
      delay: 2.4,
      speed: 0.3,
    },
    {
      src: TarsierSafaris,
      className:
        "absolute top-[100rem] right-14 w-56 h-38 sm:w-84 sm:h-52 lg:w-[26rem] lg:h-[16rem]",
      rotate: -15,
      zIndex: 1,
      delay: 2.7,
      speed: -0.4,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{
            opacity: [0.5, 0.75, 0.65],
            scale: [0.85, 1.05, 0.95],
            rotate: image.rotate + mousePosition.x * 0.1 + scrollY * 0.015,
            x: mousePosition.x * image.speed + scrollY * 0.03,
            y: mousePosition.y * image.speed + scrollY * 0.04,
          }}
          transition={{
            duration: 5,
            delay: image.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={image.className}
          style={{
            zIndex: image.zIndex,
          }}
        >
          <img
            src={image.src}
            alt={`About background ${index + 1}`}
            className="w-full h-full object-cover rounded-3xl blur-[0.5px]"
            style={{
              transform: `rotate(${image.rotate}deg)`,
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </motion.div>
      ))}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-secondary-light/30 dark:from-primary-dark/30 via-transparent to-secondary-light/25 dark:to-primary-dark/25"
        animate={{
          opacity: [0.25, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-secondary-light/15 dark:from-primary-dark/15 via-transparent to-secondary-light/15 dark:to-primary-dark/15"
        animate={{
          opacity: [0.1, 0.25, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-indigo-500/30 dark:bg-indigo-400/20 rounded-full blur-sm"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + i * 10}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + i * 0.6,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/5 dark:to-purple-400/5 rounded-full blur-3xl"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AboutBackground;
