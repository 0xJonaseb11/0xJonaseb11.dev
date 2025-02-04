import React, { useRef } from "react";
import Discord from "../../images/discord.jpeg";
import Dev from "../../images/Dev.png";
import Medium from "../../images/Medium.png";
import Quora from "../../images/quora.jpeg";
import Pinterest from "../../images/Pinterest.jpeg";
import Vimeo from "../../images/Vimeo.png";
import Behance from "../../images/Behance.png";
import hashnode from "../../images/hashnode.png";
import X from "../../images/X.png"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";


import AppFooterCopyright from "./AppFooterCopyright";

const CopyAddressButton = ({ walletAddress }) => {
  const addressRef = useRef(null);

  const handleCopyClick = () => {
    if (addressRef.current) {
      const textArea = document.createElement("textarea");
      textArea.value = walletAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      window.alert("Address copied to clipboard");
    }
  };

  return (
    <div className="flex items-center 2xsm:p-0 3xsm:p-3 4xsm:p-1.5">
      <span ref={addressRef} className="break-all mr-2">
        {walletAddress}
      </span>
      <button
        onClick={handleCopyClick}
        className="p-2 rounded-xl bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
      >
        Copy
      </button>
    </div>
  );
};

const EthereumWalletAddress = `0xef2fC3CdeBaE8c60F07da3c15A486bdA4769c4f0`;
const SolanaWalletAddress  = `99fyA7UHjipBCyXKGBdSYTB8B6Jv9iTeL9MAeT1Uokq8`;
const BitcoinWalletAddress = `bc1pr2ep3kke5hzfmv229tacf8d2w9g828zagu26j5rd0uduagzaa2rqnt9l4r`;
const TronWalletAddress = `TC9b2eTy4DDPyDypevcorv7hTqANZ7451T`
const socialLinks = [
  {
    id: 1,
    icon: <FiGithub className="w-7 rounded-full" />,
    url: "https://github.com/0xJonaseb11",
  },
  {
    id: 2,
    icon: (
      <img
        src={Discord}
        alt="Discord Logo"
        width={45}
        className="w-7 rounded-full"
      />
    ),
    url: "https://discord.com/users/1065213095431131218",
  },
  {
    id: 3,
    icon: <FiLinkedin className="w-7 rounded-full" />,
    url: "https://www.linkedin.com/in/0xJonaseb11",
  },
  {
    id: 4,
    icon: (
    <img src={X} 
    alt="X account" 
    width={50}
    className="w-7 rounded-full" />
    ),
    url: "https://twitter.com/0xJonaseb11",
  },
  {
    id: 5,
    icon: <FiInstagram className="w-7 rounded-full" />,
    url: "https://www.instagram.com/sebe_j_az99",
  },
  {
    id: 6,
    icon: (
      <img
        src={Medium}
        alt="Medium Logo"
        width={50}
        className="w-7 rounded-full"
      />
    ),
    url: "https://medium.com/@sebejaz99",
  },
  {
    id: 7,
    icon: (
      <img
        src={Quora}
        alt="Quora logo"
        width={60}
        className="w-7 rounded-full"
      />
    ),
    url: "https://www.quora.com/profile/Jaz-1378",
  },
  {
    id: 8,
    icon: (
      <img
        src={Pinterest}
        alt="Pinterest logo"
        width={60}
        className="w-7 rounded-full"
      />
    ),
    url: "https://www.pinterest.com/jonassebera/",
  },
  {
    id: 9,
    icon: (
      <img
        src={Vimeo}
        alt="Vimeo logo"
        width={60}
        className="w-7 rounded-full"
      />
    ),
    url: "https://vimeo.com/user214096081",
  },
  {
    id: 10,
    icon: (
      <img
        src={Behance}
        alt="Behance logo"
        width={60}
        className="w-7 rounded-full"
      />
    ),
    url: "https://www.behance.net/jazjaz5",
  },
  {
    id: 11,
    icon: (
      <img
        src={Dev}
        alt="Dev Community logo"
        width={50}
        className="w-7 rounded-full"
      />
    ),
    url: "https://dev.to/jonassebera",
  },
  {
    id: 12,
    icon: (
      <img
      src={hashnode}
      alt="hashnode dev community"
      width={50}
      className="w-7 rounded-full"
      />
    ),
    url: "https://jonas-sebera.hashnode.dev/"
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto mt-32">
      {/* Footer social links */}
      <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
        <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-10">
          Let's go social
        </p>
        <ul className="grid grid-cols-3 gap-3 sm:gap-4 sm:md:xmd:lg:xl:2xl:3xl:grid-cols-11 2xsm:3xsm:4xsm:grid-cols-6 ">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-200 cursor-pointer rounded-full text-center  dark:hover:bg-gray-800 hover:bg-gray-200 shadow-sm p-2 duration-300"
            >
              <i className="w-full text-2xl sm:text-xl md:text-xl xsm:text-xl 2xsm:text-xl 3xsm:text-xl 4xsm:text-base">
                {link.icon}
              </i>
            </a>
          ))}
        </ul>

        <div className="w-full mt-10 flex flex-col dark:bg-gray-800 opacity-90 bg-gray-100 hover:shadow-2xl border-none items-center p-4 md:p-6 lg:p-12 xl:p-8 md:w-9/12 rounded-xl font-general-medium text-ternary-dark dark:text-ternary-light">
          <p className="font-semibold font-sans text-indigo-400 mb-2 md:text-xl lg:text-xl shadow-sm sm:text-base xsm:text-base 2xsm:text-base 3xsm:text-base">
            A quick reminder, we are not alergic to coffee please!! But real{" "}
            <code className="dark:text-white text-xl text-indigo-600 ">
              Eth
            </code>{" "}
            not{" "}
            <code className=" text-indigo-600 text-xl dark:text-white ">
              Faucets.
            </code>
          </p>
          <div className="w-full md:w-9/12 xl:w-2/3 mx-auto mt-6">
            <p className="mb-2 md:mb-4 text-center text-[#999] font-semibold font-sans text-base xsm:text-base 2xsm:text-base 3xsm:base">
              Ethereum
            </p>
            <div className="w-full dark:bg-gray-500 rounded-full bg-gray-200 p-4 md:p-3 2sm:p-4 xsm:p-4 text-center items-center text-gray-800">
              <CopyAddressButton
                walletAddress={EthereumWalletAddress}
                //className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all max-w-full"
              />
              </div>
               <p className="mb-2 md:mb-4 text-center text-[#999] font-semibold font-sans text-base xsm:text-base 2xsm:text-base 3xsm:base">
              Solana
            </p>
            <div className="w-full dark:bg-gray-500 rounded-full bg-gray-200 p-4 md:p-3 2sm:p-4 xsm:p-4 text-center items-center text-gray-800">
              <CopyAddressButton
                walletAddress={SolanaWalletAddress}
                //className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all max-w-full"
              />
              </div>
               <p className="mb-2 md:mb-4 text-center text-[#999] font-semibold font-sans text-base xsm:text-base 2xsm:text-base 3xsm:base">
              Tron
            </p>
            <div className="w-full dark:bg-gray-500 rounded-full bg-gray-200 p-4 md:p-3 2sm:p-4 xsm:p-4 text-center items-center text-gray-800">
              <CopyAddressButton
                walletAddress={TronWalletAddress}
                //className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all max-w-full"
              />
              
            </div>
            <p className="mb-2 md:mb-4 text-center text-[#999] font-semibold font-sans text-base xsm:text-base 2xsm:text-base 3xsm:base">
              BTC
            </p>
            <div className="w-full dark:bg-gray-500 rounded-full bg-gray-200 p-4 md:p-3 2sm:p-4 xsm:p-4 text-center items-center text-gray-800">
              <CopyAddressButton
                walletAddress={BitcoinWalletAddress}
                //className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all max-w-full"
              />
              </div>
          </div>
        </div>
      </div>

      <AppFooterCopyright />
    </div>
  );
};

export default AppFooter;
