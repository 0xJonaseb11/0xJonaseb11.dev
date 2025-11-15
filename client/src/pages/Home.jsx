import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import CreativeBackground from "../components/shared/CreativeBackground";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";
import Doings from "../components/Doings/Doings";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="container mx-auto w-full relative min-h-screen">
      <CreativeBackground />
      <div className="relative z-10 pt-4">
        <AppBanner></AppBanner>

      <Doings />

      <ProjectsProvider>
        <ProjectsGrid />
      </ProjectsProvider>
      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>

      <Testimonials />
      </div>
    </div>
  );
};

export default Home;
