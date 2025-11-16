import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import HireMeModal from "../HireMeModal";
import logoLight from "../../images/Logo.png";
import logoDark from "../../images/Logo.png";
import { motion } from "framer-motion";
import Button from "../reusable/Button";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="nav"
      className="sticky top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-primary-dark/70 border-b border-white/20 dark:border-ternary-dark/30 shadow-lg transition-all duration-300"
    >
      <div className="container mx-auto w-full block sm:flex sm:justify-between sm:items-center py-4 sm:py-5 px-4 sm:px-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center w-full sm:w-auto px-4 sm:px-0">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              {activeTheme === "dark" ? (
                <>
                  <motion.img
                    src={logoDark}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-500/30 group-hover:border-indigo-500 transition-all duration-300"
                    alt="Dark Logo"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <p className="text-[#999] dark:text-[#999] text-base sm:text-lg font-bold ml-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    Jonas Sebera
                  </p>
                </>
              ) : (
                <>
                  <motion.img
                    src={logoLight}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-500/30 group-hover:border-indigo-500 transition-all duration-300"
                    alt="Light Logo"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <p className="text-[#999] dark:text-[#999] text-base sm:text-lg font-bold ml-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    Jonas Sebera
                  </p>
                </>
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center backdrop-blur-sm bg-white/50 dark:bg-primary-dark/50 rounded-xl sm:bg-transparent sm:dark:bg-transparent"
              : "hidden"
          }
        >
          <Link
            to="/projects"
            onClick={() => setShowMenu(false)}
            className="block text-left text-lg text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 sm:mx-4 mb-2 sm:py-2 font-medium transition-colors duration-300"
            aria-label="Projects"
          >
            projects
          </Link>
          <Link
            to="/about"
            onClick={() => setShowMenu(false)}
            className="block text-left text-lg text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark font-medium transition-colors duration-300"
            aria-label="about me"
          >
            about me
          </Link>
          <Link
            to="/resume"
            onClick={() => setShowMenu(false)}
            className="block text-left text-lg text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark font-medium transition-colors duration-300"
            aria-label="resume"
          >
            resume
          </Link>
          <Link
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="block text-left text-[#999] text-lg dark:text-[#999] hover:text-indigo-500 dark:hover:text-indigo-400 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark font-medium transition-colors duration-300"
            aria-label="Contact"
          >
            contact
          </Link>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden sm:flex items-center gap-4 lg:gap-6">
          <Link
            to="/projects"
            className="relative block text-sm lg:text-base text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 py-2 font-medium transition-all duration-300 group whitespace-nowrap"
            aria-label="Projects"
          >
            projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/about"
            className="relative block text-sm lg:text-base text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 py-2 font-medium transition-all duration-300 group whitespace-nowrap"
            aria-label="about me"
          >
            about me
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/resume"
            className="relative block text-sm lg:text-base text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 py-2 font-medium transition-all duration-300 group whitespace-nowrap"
            aria-label="resume"
          >
            resume
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/contact"
            className="relative block text-sm lg:text-base text-[#999] dark:text-[#999] dark:hover:text-indigo-400 hover:text-indigo-500 py-2 font-medium transition-all duration-300 group whitespace-nowrap"
            aria-label="Contact"
          >
            contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Header right section buttons - ALWAYS VISIBLE */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-3 flex-shrink-0">
          <motion.span
            onClick={showHireMeModal}
            className="text-xs sm:text-sm lg:text-base font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg hover:shadow-xl rounded-lg px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 duration-300 cursor-pointer whitespace-nowrap"
            aria-label="Hire Me Button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button title="Delegate a hunt" />
          </motion.span>

          {/* Theme switcher large screen */}
          <motion.div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="bg-primary-light dark:bg-ternary-dark p-2 sm:p-2.5 lg:p-3 shadow-sm rounded-xl cursor-pointer hover:shadow-md transition-shadow duration-300 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-base sm:text-lg lg:text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-base sm:text-lg lg:text-xl" />
            )}
          </motion.div>
        </div>
      </div>

      {/* Hire me modal - Rendered via portal outside navbar */}
      {showModal && (
        <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
      )}
    </motion.nav>
  );
};

export default AppHeader;
