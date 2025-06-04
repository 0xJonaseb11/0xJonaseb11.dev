import React from "react";
import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleTestimonial = ({
  image,
  reviewAlt,
  details,
  name,
  position,
  rating,
}) => {
  const stars = Array.from({ length: rating }, (_, i) => (
    <FaStar key={i} className="text-yellow-500" />
  ));

  return (
    <div className="md:max-w-sm w-full lg:max-w-full rounded-lg overflow-hidden lg:flex dark:bg-ternary-dark bg-white shadow-lg hover:shadow-xl">
      <div className="border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex items-center">
          {/* <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} /> */}
          <LazyLoadImage
            alt={name}
            effect="blur"
            className="w-12 h-12 rounded-full mr-4"
            src={image}
          />
          <div className="text-sm">
            <p className="text-gray-900 dark:text-gray-200 leading-none text-base font-semibold">
              {name}
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {position}
            </p>
          </div>
        </div>
        <div className="my-4">
          <div className="text-gray-900 dark:text-gray-200 font-bold text-xl mb-2">
            {reviewAlt}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {details}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-yellow-500 flex">{stars}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
