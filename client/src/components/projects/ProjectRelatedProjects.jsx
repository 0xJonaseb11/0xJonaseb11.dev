import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useParams } from 'react-router-dom';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { id } = useParams();
	const data = singleProjectData[id];

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{data.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{data.RelatedProject.Projects.map((project) => {
					return (
						<Link to={`/projects/single-project/${project.id}`} className='flex flex-col gap-[1rem]'>
							{/* <img
								src={project.img}
								className="rounded-xl cursor-pointer"
								alt={project.title}
								key={project.id}
							/> */}
							<LazyLoadImage
								effect="blur"
								src={project.img}
								className="rounded-xl cursor-pointer"
								alt={project.title}
								key={project.id}
							/>
							<p className='text-primary-dark dark:text-primary-light font-medium text-lg'>{project.title}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
