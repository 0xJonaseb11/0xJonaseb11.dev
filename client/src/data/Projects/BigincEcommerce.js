import Italos from "../../images/Italos/Italos.png";
import Socialite from "../../images/Socialite/Socialite.jpg";
import Biginc1 from "../../images/biginc-ecommerce/Biginc1.png";
import Biginc2 from "../../images/biginc-ecommerce/Biginc2.png";
import Biginc3 from "../../images/biginc-ecommerce/Biginc3.png";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  MailruIcon,
  MailruShareButton,
} from "react-share";

export const BigincEcommerce = {
  ProjectHeader: {
    title: "Project Management",
    publishDate: "Jul 10, 2023",
    tags: "Fullstack Project",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Shipping Ecommerce",
      img: Biginc1,
    },
    {
      id: 1,
      title: "Shipping Ecommerce",
      img: Biginc2,
    },
    {
      id: 2,
      title: "Shipping Ecommerce",
      img: Biginc3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Biginc Ecommerce",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Fullstack Development",
      },
      {
        id: 3,
        title: "Phone",
        details: "tel:+250 798 223 860",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Join the biginc e-commerce platform today and revolutionize your business! 🌐💼🌍 With our user-friendly interface, sellers can seamlessly import high-quality materials and products from abroad, expanding your product offerings like never before. Simplify your international sourcing process and unlock new opportunities for your business with biginc. Let us be your trusted partner in global commerce! 💻🌟🛍️.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "React js",
          "TailwindCSS",
          "Node.js",
          "Vite",
          "Express js",
          "Figma",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Discover the power of biginc, your gateway to international commerce! 🌐💼🌍 Our cutting-edge e-commerce platform simplifies the process of importing materials and products from abroad. Experience a seamless and intuitive interface that empowers sellers to expand their product offerings and streamline their global sourcing. Whether you're importing materials for manufacturing or sourcing unique products for your store, biginc has you covered. Join us today and reshape the way you do business.",
      },
      {
        id: 2,
        details:
          "At the core of biginc is a commitment to making global commerce accessible and secure. We understand the complexities of international trade, so we prioritize your privacy and security. Customize your sourcing preferences, connect with reliable suppliers, and engage in transparent transactions. With state-of-the-art security measures and buyer protection, biginc ensures a safe and trustworthy environment for all your import needs.",
      },
      {
        id: 3,
        details:
          "In addition to facilitating international sourcing, biginc offers a comprehensive suite of tools for businesses and entrepreneurs. Seamlessly switch between your personal and professional accounts. Whether you're a small business owner, a reseller, or a global importer, our platform equips you with the resources you need to thrive. Grow your business, access real-time analytics, and reach a broader audience with biginc Pages, advertising options, and market insights.",
      },
      {
        id: 4,
        details:
          "biginc is more than just an e-commerce platform; it's a global movement in commerce. We believe in using technology to bridge borders and unlock opportunities for businesses and individuals worldwide. With a diverse international community and a commitment to inclusivity, we celebrate the richness of global perspectives and cultures. Join us in redefining international trade. Get started with biginc today by visiting our website or downloading the biginc app.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/2"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/2",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/2"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/2",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/2"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/2",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/2"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/2",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://Jonas-sebera.vercel.app/projects/single-project/2"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/2",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 0,
        title: "SocialMedia platform",
        img: Socialite,
      },
      {
        id: 1,
        title: "Italos Data Management",
        img: Italos,
      },
    ],
  },
};
