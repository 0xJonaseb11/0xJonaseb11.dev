import { useState, createContext, useMemo } from "react";
import { projectsData } from "../data/projects";

// Create projects context
export const ProjectsContext = createContext();

// Category mapping: filter option -> project categories that match
const categoryMapping = {
  "Web2.0 Applications": [
    "Web Application",
    "E-Commerce",
    "Mobile Application",
  ],
  "Web3.0 Applications": [
    "Blockchain Protocol",
    "Blockchain Platform",
    "Blockchain DApp Platform",
    "Web3 Parking System",
    "E-Commerce • NFT Marketplace",
  ],
  "UI/UX Design": ["UI/UX Design"],
  "Web design": ["Web Application", "Web design"],
  "Smart contracts": [
    "Blockchain Protocol",
    "Blockchain Platform",
    "Blockchain DApp Platform",
  ],
  Databases: ["Web Application", "Data Management"],
  Blockchain: [
    "Blockchain Protocol",
    "Blockchain Platform",
    "Blockchain DApp Platform",
    "Web3 Parking System",
  ],
  "Digital Marketing": ["E-Commerce", "Web Application"],
  "Crypto Trading": ["Blockchain DApp Platform", "E-Commerce • NFT Marketplace"],
};

// Create projects context provider
export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState(projectsData);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");

  // Combined filter: search + category
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply category filter
    if (selectProject && selectProject !== "All Projects") {
      const matchingCategories = categoryMapping[selectProject] || [];
      filtered = filtered.filter((item) =>
        matchingCategories.some((cat) =>
          item.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Apply search filter
    if (searchProject.trim()) {
      const searchLower = searchProject.toLowerCase().trim();
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [projects, searchProject, selectProject]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        selectProject,
        setSelectProject,
        filteredProjects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
