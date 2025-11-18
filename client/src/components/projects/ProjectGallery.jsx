import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const data = singleProjectData[projectId];

  if (!data || !data.ProjectImages) {
    return (
      <div className="mt-12">
        <p className="text-primary-dark dark:text-primary-light">
          Project images not found
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {data.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <LazyLoadImage
              alt={project.title}
              effect="blur"
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              src={project.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
