import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";
// import { FiArrowRight } from 'react-icons/fi';
import { FiEye } from "react-icons/fi";

import Welcome from "../contract/ConnectWallet";

const AppBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col items-center lg:flex-row mt-12 md:mt-2 ml-2"
    >
      <div className="flex flex-col w-full md:w-1/3 text-left 2xsm:p-0 3xsm:p-0 4xsm:p-0">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="3xsm:4xsm:flex-col font-monospace text-base lg:text-3xl xl:text-3xl text-center lg:text-left text-ternary-dark dark:text-primary-light"
        >
          Hi there👋, I'm <strong>Jonas Sebera</strong>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="flex flex-col font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left leading-normal text-gray-500 dark:text-gray-500"
        >
          {/* Typing svg */}
          <a
            href="https://git.io/typing-svg"
            onClick={(e) => {
              e.preventDefault();
              // alert("Left click is disabled for this link")
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              // window.alert("Right click context menu is disabled for this link")
            }}
            onMouseDown={(e) => {
              if (e.button === 1) {
                e.preventDefault();
                window.alert("403 - Forbidden");
              }
            }}
          >
            <img
              src="https://readme-typing-svg.demolab.com?font=&size=24&pause=1000&random=false&width=435&lines=Blockchain+Developer;Web3.0+Application+Developer;Smart+Contract+Developer;Smart+Contract+Auditor;Relational+Databases+Developer"
              alt="Typing svg"
            />
          </a>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center lg:block 3xsm:block 3xsm:mx-6"
        >
          <a
            href="../files/Jonas-Sebera-Resume.pdf"
            download="Jonas-Sebera-Resume.pdf"
            // href="https://www.jobseeker.com/d/19npe1LZ61VC8CiiZd5elF/view"
            className=" flex flex-col font-general-medium justify-center items-center text-center w-full 2sm:p-4 2sm:text-2xl mt-12 mb-6 sm:mb-3 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 hover:bg-indigo-600 text-gray-100 hover:text-white duration-500 p-2 4xsm:-ml-2 -ml-1.5"
            aria-label="Download quick resume"
            target="_blank"
            rel="noreferrer"
            // onclick={(e) => {
            //   e.preventDefault(); // prevent default anchor behavior
            //   window.alert("Resume is currently unavailable!!🙏 Mind viewing full resume instead!!🫡");
            // }}
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100 items-center text-center"/>
            <span className="text-sm sm:text-lg font-general-medium duration-100 mb-0">
              Download Quick Resume
            </span>
          </a>

          <span className="p-1"></span>

          <a
            view="Jonas-Sebera-Resume"
            href="https://resume.io/r/Cg5tKp0Qh"
            target="_blank"
            className="flex flex-col font-general-medium justify-center items-center text-center w-full 2sm:p-4 2sm:text-2xl mt-12 mb-6 sm:mb-3 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 hover:bg-indigo-600 text-gray-100 hover:text-white duration-500 p-2 -ml-0.5"
            aria-label="View Resume here"
            rel="noreferrer"
          >
            <FiEye className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100 items-center text-center" />
            <span className="text-sm sm:text-lg font-general-medium duration-100 mb-0">
              View Full Resume
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <video
          title="App-Home-Banner-Image-Web3.0-Illustration"
          className="w-11/12  m-2 dark:rounded-full rounded-full border-0"
          src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/blockchain-technology-4423752-3675973.mp4"
          autoPlay
          loop
          muted
        ></video>
        <Welcome />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
