import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import Loader from "./components/loader/loader";
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
  return (
    <AnimatePresence>
      <Suspense fallback={<Loader />}>
        <div className=" bg-secondary-light dark:bg-primary-dark z-[-2] transition duration-300">
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
        </div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
