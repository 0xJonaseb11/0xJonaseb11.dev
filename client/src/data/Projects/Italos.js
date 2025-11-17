import Socialite from "../../images/Socialite/Socialite.jpg";
import BigincEcommerce from "../../images/biginc-ecommerce/Biginc.png";
import italos1 from "../../images/Italos/italos1.png";
import italos2 from "../../images/Italos/italos2.png";
import italos3 from "../../images/Italos/italos3.png";
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

export const Italos = {
  ProjectHeader: {
    title: "Project Management UI",
    publishDate: "Jul 26, 2021",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Italos data management",
      img: italos1,
    },
    {
      id: 2,
      title: "Italos data management",
      img: italos2,
    },
    {
      id: 3,
      title: "Italos data management",
      img: italos3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Italos data management",
      },
      {
        id: 2,
        title: "Services",
        details: "Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://t-tas.italos.cloud/",
      },
      {
        id: 4,
        title: "Phone",
        details: "tel:+250 798 223 860",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Efficient data management is essential for a seamless user experience. In this context, we focus on optimizing data handling and manipulation, ensuring that information is readily available and up-to-date for various application functionalities.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["React js", "Bootstrap Framework", "Material UI"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Effective data management is crucial for modern applications. It involves organizing, storing, and retrieving data efficiently. Additionally, data visualization through charts is key to gaining insights from data. Our project aims to implement robust data management practices and incorporate interactive charts for data analysis.",
      },
      {
        id: 2,
        details:
          "In the era of big data, managing information effectively is a challenge. Our project addresses this by providing tools for data storage and retrieval. Moreover, we focus on presenting data in an understandable manner with the help of dynamic charts that offer visual representations of complex datasets.",
      },
      {
        id: 3,
        details:
          "Data is the lifeblood of modern applications. Our project centers on managing data efficiently and making it accessible when needed. We understand the importance of data visualization, and that's why we're integrating charts to provide users with meaningful insights and help them make informed decisions.",
      },
      {
        id: 4,
        details:
          "Streamlining data management is a priority in our project. We're dedicated to organizing data systematically and ensuring its accuracy. Furthermore, we're incorporating interactive charts to empower users with the ability to explore and interpret data effortlessly, making data management a breeze.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/1"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/1",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/1"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/1",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/1"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/1",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/1"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/1",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/1"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/1",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 0,
        title: "Web Application",
        img: Socialite,
      },
      {
        id: 2,
        title: "Online shipping ecommerce system",
        category: "Web Application",
        img: BigincEcommerce,
      },
    ],
  },
};
