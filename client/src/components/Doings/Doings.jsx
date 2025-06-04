import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import icons
import IconWeb from "../../images/Doings/icon-dev.svg";
import IconDesign from "../../images/Doings/icon-design.svg";
import Web3Icon from "../../images/Doings/web3Icon.png";
import Solidity from "../../images/Doings/solidity.png";
// import solidity from "../../images/Doings/solidity.png";
import blockchain from "../../images/Doings/blockchain.png";
import database from "../../images/Doings/database.jpeg";

// Define an array of services
const services = [
  {
    icon: IconWeb,
    title: "Web2.0 Application Development",
    description:
      "High-quality development of web2.0 based applications at professional level.",
  },
  {
    icon: Web3Icon,
    title: "Web3.0 Application Development",
    description:
      "Professional development of blockchain and smart contract-based applications.",
  },
  {
    icon: IconDesign,
    title: "Web design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: database,
    title: "Relational Database Development",
    description:
      "Unlock endless tech opportunities by getting access to Super Optimized Databases.",
  },
  {
    icon: Solidity,
    title: "Solidity Smart Contract Development.",
    description:
      "Unlock endless tech opportunities With super developed and tested smart contracts for advanced blockchain solutions.",
  },
  {
    icon: blockchain,
    title: "Blockchain and Dapps Development.",
    description:
      "Unlock endless tech opportunities With super developed and tested dapps and blockchain solutions.",
  },
];

const Doings = () => {
  return (
    <section className="service text-primary-dark dark:text-ternary-light 2xsm:p-0 3xsm:4xsm:p-1 3xsm:4xsm:-ml-0 3xsm:4xsm:-mr-0 5xsm:py-1 5xsm:-mr:-0.5 5xsm:-ml-0.5">
      <h3 className="h3 service-title font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center">
        My delivery
      </h3>
      <ul className="service-list mt-[2rem] -ml-1.5 -mr-1.5  .5xsm:-mr-0.5  ">
        {services.map((service, index) => (
          <li
            key={index}
            className="service-item bg-secondary-light dark:bg-ternary-dark !shadow-lg hover:!shadow-xl flex 3xsm:gap-[1rem] 3xsm:p-0 4xsm:gap-2"
          >
            <div className="service-icon-box py-1">
              {/* <img
                src={service.icon}
                alt={`${service.title} icon`}
                width="40"
                className="min-w-[40px]"
              /> */}
              <LazyLoadImage
                src={service.icon}
                effect="blur"
                width="40"
                className="min-w-[40px] m-0 p-1.5"
                alt={`${service.title} icon`}
              />
            </div>
            <div className="service-content-box !text-start py-2">
              <h4 className="h4 service-item-title font-semibold text-xl text-ternary-dark dark:text-ternary-light">
                {service.title}
              </h4>
              <p className="service-item-text text-lg font-medium ">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Doings;
