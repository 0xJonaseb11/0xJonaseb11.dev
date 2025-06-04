import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutClientSingle = ({ title, image }) => {
  <h>ABOUT ME</h>;
  return (
    <>
      {/* <img
				src={image}
				className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/> */}
      <LazyLoadImage
        alt={title}
        effect="blur"
        className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
        src={image}
      />
    </>
  );
};

export default AboutClientSingle;
