import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import Web3WelcomeModal from "./components/shared/Web3WelcomeModal";
import Loader from "./components/loader/loader";
import Web3Provider from "./providers/Web3Provider";
import "./css/App.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import UseScrollToTop from "./hooks/useScrollToTop";
import "react-toastify/dist/ReactToastify.css";
const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));
const Resume = lazy(() => import("./pages/Resume.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome modal in this session
    const hasSeenWelcome = sessionStorage.getItem('web3WelcomeSeen');
    
    // Show modal if not seen in this session (you can change to localStorage for "once ever")
    if (!hasSeenWelcome) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowWelcomeModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcomeModal(false);
    // Mark as seen in this session
    sessionStorage.setItem('web3WelcomeSeen', 'true');
    // If you want it to show only once ever (not per session), use localStorage instead:
    // localStorage.setItem('web3WelcomeSeen', 'true');
  };

  return (
    <Web3Provider>
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <div className="bg-secondary-light dark:bg-primary-dark z-[-2] transition duration-300">
            <Router>
              <ScrollToTop />
              <AppHeader />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                  path="/projects/single-project/:id"
                  element={<ProjectSingle />}
                />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              <AppFooter />
            </Router>
            <UseScrollToTop />
            {showWelcomeModal && (
              <Web3WelcomeModal onClose={handleCloseWelcome} />
            )}
          </div>
        </Suspense>
      </AnimatePresence>
    </Web3Provider>
  );
}

export default App;
