import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Import project gallery images - using main thumbnails as fallback
import TarsierSafaris from "../../images/TarsierSafaris/TarsierSafaris.png";
import Web3Mates from "../../images/Web3Mates/Web3Mates.png";
import StoneProofLabs from "../../images/StoneProofLabs/StoneProofLabs.png";
import Digicert from "../../images/Digicert/Digicert.png";
import Socialite from "../../images/Socialite/Socialite.jpg";
import Italos from "../../images/Italos/Italos.png";
import BigincEcommerce from "../../images/biginc-ecommerce/Biginc.png";
import ClientCoach from "../../images/ClientCoach/ClientCoach1.png";
import HealtHand from "../../images/HealtHand/health.png";

const CreativeBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Creative arrangement of project images with various rotations and positions
  const backgroundImages = [
    {
      src: TarsierSafaris,
      className: "absolute top-10 left-5 w-48 h-32 sm:w-64 sm:h-40",
      rotate: -12,
      zIndex: 1,
      delay: 0,
    },
    {
      src: Web3Mates,
      className: "absolute top-32 right-10 w-56 h-40 sm:w-72 sm:h-48",
      rotate: 15,
      zIndex: 1,
      delay: 0.2,
    },
    {
      src: StoneProofLabs,
      className: "absolute top-64 left-20 w-40 h-28 sm:w-52 sm:h-36",
      rotate: 180,
      zIndex: 1,
      delay: 0.4,
    },
    {
      src: Digicert,
      className: "absolute top-96 right-32 w-52 h-36 sm:w-68 sm:h-44",
      rotate: -8,
      zIndex: 1,
      delay: 0.6,
    },
    {
      src: Socialite,
      className: "absolute top-[28rem] left-10 w-44 h-30 sm:w-60 sm:h-38",
      rotate: 180,
      zIndex: 1,
      delay: 0.8,
    },
    {
      src: Italos,
      className: "absolute top-[32rem] right-16 w-48 h-32 sm:w-64 sm:h-40",
      rotate: 12,
      zIndex: 1,
      delay: 1,
    },
    {
      src: BigincEcommerce,
      className: "absolute top-[36rem] left-40 w-36 h-24 sm:w-48 sm:h-32",
      rotate: -15,
      zIndex: 1,
      delay: 1.2,
    },
    {
      src: ClientCoach,
      className: "absolute top-[40rem] right-24 w-50 h-34 sm:w-64 sm:h-42",
      rotate: 180,
      zIndex: 1,
      delay: 1.4,
    },
    {
      src: HealtHand,
      className: "absolute top-[44rem] left-16 w-42 h-28 sm:w-56 sm:h-36",
      rotate: 8,
      zIndex: 1,
      delay: 1.6,
    },
    {
      src: TarsierSafaris,
      className: "absolute top-[48rem] right-12 w-46 h-32 sm:w-60 sm:h-40",
      rotate: -10,
      zIndex: 1,
      delay: 1.8,
    },
    {
      src: Web3Mates,
      className: "absolute top-[52rem] left-28 w-40 h-28 sm:w-52 sm:h-36",
      rotate: 180,
      zIndex: 1,
      delay: 2,
    },
    {
      src: StoneProofLabs,
      className: "absolute top-[56rem] right-20 w-44 h-30 sm:w-58 sm:h-38",
      rotate: 25,
      zIndex: 1,
      delay: 2.2,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.5, 0.7, 0.6],
            scale: [0.8, 1, 0.9],
            rotate: image.rotate + mousePosition.x * 0.05,
            x: mousePosition.x * (index % 3 === 0 ? 0.3 : -0.3),
            y: mousePosition.y * (index % 2 === 0 ? 0.3 : -0.3),
          }}
          transition={{
            duration: 4,
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
            alt={`Project background ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl blur-[0.5px]"
            style={{
              transform: `rotate(${image.rotate}deg)`,
            }}
            onError={(e) => {
              // Hide broken images gracefully
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
      ))}
      
      {/* Gradient overlays for depth - minimal to show images better */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-light/30 dark:from-primary-dark/30 via-transparent to-secondary-light/20 dark:to-primary-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-light/15 dark:from-primary-dark/15 via-transparent to-secondary-light/15 dark:to-primary-dark/15" />
    </div>
  );
};

export default CreativeBackground;

