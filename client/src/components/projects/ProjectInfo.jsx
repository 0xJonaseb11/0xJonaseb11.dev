import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import { useParams } from "react-router-dom";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const data = singleProjectData[projectId];

  if (!data || !data.ProjectInfo) {
    return (
      <div className="mt-14">
        <p className="text-primary-dark dark:text-primary-light">
          Project information not found
        </p>
      </div>
    );
  }

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {data.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {data.ProjectInfo.CompanyInfo.map((info) => {
              const isLink =
                info.title === "Website" ||
                info.title === "LinkedIn" ||
                info.title === "Demo Video" ||
                (info.title === "Phone" && info.details.startsWith("tel:"));
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  {isLink ? (
                    <a
                      href={info.details}
                      target={
                        info.details.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.details.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                      aria-label={`${info.title} link`}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <span>{info.details}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {data.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {data.ProjectInfo.ObjectivesDetails}
          </p>
        </div>
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {data.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {data.ProjectInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {data.ProjectInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {data.ProjectInfo.SocialSharing.map((social) => {
              return <div>{social.shareButton}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {data.ProjectInfo.ProjectDetailsHeading}
        </p>
        {data.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
