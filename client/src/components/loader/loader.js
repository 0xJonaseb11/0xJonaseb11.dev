import React from "react";
import LoaderSvg from "../../images/Loader/loader.svg";

const Loader = () => {
  return (
    <div className="h-[100vh] bg-secondary-light dark:bg-primary-dark flex items-center justify-center">
      <img src={LoaderSvg} alt="loader" />
    </div>
  );
};

export default Loader;
