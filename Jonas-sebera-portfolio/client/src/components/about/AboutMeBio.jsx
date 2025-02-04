/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from "react";
import Skeleton from "@mui/material/Skeleton";
import AboutMeContext from "../../context/AboutMeContext";
//import profileImage from '../../images/ProfileMe/Profile7.jpg';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src =
      /*profileImage;*/
      image.onload = () => {
        setImageLoaded(true);
      };
  }, []);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        {imageLoaded ? (
          <img src={profileImage} className="rounded-lg w-96" alt="Profile" />
        ) : (
          <Skeleton
            variant="rect"
            className="w-96 h-full rounded-lg"
            animation="wave"
          />
        )}
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
