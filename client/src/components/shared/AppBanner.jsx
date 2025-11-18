import { FiEye, FiGithub, FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";

import Welcome from "../contract/ConnectWallet";
import PaidResumeDownload from "./PaidResumeDownload";

const quickStats = [
  { label: "Years Shipping Software", value: "5+" },
  { label: "Web3 Deployments", value: "80+" },
  { label: "Happy Clients", value: "36+" },
];

const AppBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col lg:flex-row gap-12 mt-12 md:mt-10 mb-16 px-4 sm:px-0"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
          Web3 Engineer • Software Craftsman
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left text-ternary-dark dark:text-primary-light">
          Hi there, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Jonas Sebera</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center lg:text-left">
          I design and ship reliable software ranging from responsive web platforms to secure Web3
          experiences so teams can move quickly without breaking quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch">
          <div className="w-full sm:w-2/3">
            <PaidResumeDownload />
          </div>
          <div className="relative group w-full sm:w-auto sm:flex sm:items-center">
            <motion.a
              href="https://resume.io/r/Cg5tKp0Qh"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full sm:w-auto min-w-[260px] items-center justify-center gap-3 rounded-xl border border-indigo-200 px-10 py-3 text-base font-semibold text-ternary-dark dark:text-primary-light shadow-md transition hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
              aria-label="View resume online"
            >
              <FiEye className="text-lg" />
              View Full CV
            </motion.a>
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start gap-3 rounded-xl border-2 border-emerald-400 dark:border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/40 dark:to-green-900/30 px-5 py-4 text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-50 shadow-2xl max-w-sm w-64 sm:w-80">
                <div className="w-8 h-8 rounded-full bg-emerald-500 dark:bg-emerald-400 flex items-center justify-center shadow-lg">
                  <FiAlertTriangle className="text-white text-base" />
                </div>
                <p className="leading-relaxed text-left">
                  Caution: this CV is lengthy and unoptimized. For a quick skim, grab the concise resume download instead.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-ternary-dark dark:text-primary-light">
                {item.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <motion.a
          href="https://github.com/0xJonaseb11"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full flex-col sm:flex-row items-center gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 shadow-sm transition hover:border-indigo-300 dark:hover:border-indigo-500/60 text-center sm:text-left"
          aria-label="Visit Jonas on GitHub"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
            <FiGithub className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
              Open Source
            </p>
            <p className="text-lg font-semibold text-ternary-dark dark:text-primary-light break-words">
              github.com/0xJonaseb11
            </p>
          </div>
        </motion.a>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xl rounded-3xl border border-gray-100 dark:border-white/10 bg-white/90 dark:bg-primary-dark/60 p-4 shadow-xl backdrop-blur">
          <div className="rounded-2xl bg-primary-dark/90 dark:bg-black overflow-hidden shadow-inner">
            <video
              className="w-full h-auto"
              src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/blockchain-technology-4423752-3675973.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Focused on dependable blockchain integrations, human-friendly UX, and production-ready
            software.
          </p>
          <Welcome />
        </div>
      </div>
    </motion.section>
  );
};

export default AppBanner;
