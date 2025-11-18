import React from "react";
import { motion } from "framer-motion";
import { FiCoffee, FiHeart, FiZap } from "react-icons/fi";
import Discord from "../../images/discord.jpeg";
import X from "../../images/X.png";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import SendEther from "../footer/SendEther";

import AppFooterCopyright from "./AppFooterCopyright";

const socialLinks = [
  {
    id: 1,
    icon: <FiLinkedin className="w-7 h-7" />,
    url: "https://www.linkedin.com/in/jonassebera",
    name: "LinkedIn",
  },
  {
    id: 2,
    icon: (
      <img
        src={X}
        alt="X (Twitter)"
        width={28}
        height={28}
        className="w-7 h-7 rounded-full"
      />
    ),
    url: "https://twitter.com/0xJonaseb11",
    name: "X (Twitter)",
  },
  {
    id: 3,
    icon: <FiGithub className="w-7 h-7" />,
    url: "https://github.com/0xJonaseb11",
    name: "GitHub",
  },
  {
    id: 4,
    icon: (
      <img
        src={Discord}
        alt="Discord"
        width={28}
        height={28}
        className="w-7 h-7 rounded-full"
      />
    ),
    url: "https://discord.com/users/1065213095431131218",
    name: "Discord",
  },
  {
    id: 5,
    icon: <FiInstagram className="w-7 h-7" />,
    url: "https://www.instagram.com/sebe_j_az99",
    name: "Instagram",
  },
  {
    id: 6,
    icon: <FaTelegram className="w-7 h-7" />,
    url: "https://t.me/0xJonaseb11",
    name: "Telegram",
  },
  {
    id: 7,
    icon: <FaWhatsapp className="w-7 h-7" />,
    url: "https://wa.me/250795107436",
    name: "WhatsApp",
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto mt-32">
      <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
        <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-10">
          Let's go social
        </p>
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
              className="group flex flex-col items-center justify-center text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-xl text-center dark:hover:bg-indigo-500/10 hover:bg-indigo-500/10 shadow-sm hover:shadow-lg p-4 duration-300 transition-all"
              title={link.name}
            >
              <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mt-16 flex flex-col items-center"
        >
          <div
            id="support-my-work"
            className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 relative"
          >
            <div className="relative bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-indigo-500/20 dark:border-indigo-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-40 sm:h-40 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-2xl -z-10" />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center mb-6"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <FiCoffee className="text-3xl md:text-4xl text-indigo-500 dark:text-indigo-400" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      <FiHeart className="text-2xl md:text-3xl text-red-500 dark:text-red-400" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -15, 15, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                      }}
                    >
                      <FiZap className="text-3xl md:text-4xl text-yellow-500 dark:text-yellow-400" />
                    </motion.div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 dark:text-primary-light mb-4 leading-tight">
                    Support My Work
                  </h2>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-ternary-dark dark:text-ternary-light mb-2 font-medium">
                    Love what I do? Show your appreciation!
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-ternary-dark/80 dark:text-ternary-light/80 max-w-2xl mx-auto leading-relaxed">
                    While I appreciate coffee, I'm powered by real{" "}
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg md:text-xl">
                      ETH
                    </span>{" "}
                    — not testnet faucets. Your support helps me continue
                    building amazing blockchain solutions.
                  </p>
                </motion.div>
                <div className="flex items-center justify-center gap-4 my-8">
                  <div className="h-px bg-indigo-500/20 dark:bg-indigo-400/20 flex-1 max-w-20" />
                  <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <div className="h-px bg-indigo-500/20 dark:bg-indigo-400/20 flex-1 max-w-20" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full"
                >
                  <SendEther />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <AppFooterCopyright />
    </div>
  );
};

export default AppFooter;
