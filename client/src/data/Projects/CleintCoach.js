import Italos from "../../images/Italos/Italos.png";
import Socialite from "../../images/Socialite/Socialite.jpg";
import Biginc from "../../images/biginc-ecommerce/Biginc.png";
import ClientCoach1 from "../../images/ClientCoach/ClientCoach1.png";
import ClientCoach2 from "../../images/ClientCoach/ClientCoach2.png";
import ClientCoach3 from "../../images/ClientCoach/ClientCoach3.png";
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

export const ClientCoach = {
  ProjectHeader: {
    title: "UX & UI Design",
    publishDate: "march 4, 2021",
    tags: "User Interface Design",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Shipping Ecommerce",
      img: ClientCoach1,
    },
    {
      id: 1,
      title: "Shipping Ecommerce",
      img: ClientCoach2,
    },
    {
      id: 2,
      title: "Shipping Ecommerce",
      img: ClientCoach3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Client Coach",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design",
      },
      {
        id: 3,
        title: "Phone",
        details: "tel:+250 798 223 860",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Welcome to the Client Coach Learning Platform! 📚👩‍🏫👨‍🎓🌍 Join us today and transform your teaching and learning experience. With our intuitive platform, educators can effortlessly upload their courses, enabling students to access a wide range of knowledge. Simplify your online teaching and learning journey with Client Coach. Let us be your trusted partner in education! 💻🌟🎓",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["Figma", "Adobe Photoshop"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Discover the potential of Client Coach, your gateway to online learning! 📚👩‍🏫👨‍🎓🌍 Our innovative learning platform simplifies the process of sharing knowledge. Experience an intuitive interface that empowers educators to upload their courses, enabling students to access a wide range of learning materials. Whether you're a teacher looking to share your expertise or a student eager to expand your knowledge, Client Coach has you covered. Join us today and reshape the way you teach and learn.",
      },
      {
        id: 2,
        details:
          "At the core of Client Coach is a commitment to making education accessible and secure. We understand the importance of privacy and security in the online learning environment. Customize your teaching preferences, connect with eager learners, and engage in transparent interactions. With state-of-the-art security measures and learner privacy protection, Client Coach ensures a safe and trustworthy platform for all your educational needs.",
      },
      {
        id: 3,
        details:
          "In addition to facilitating online learning, Client Coach offers a comprehensive suite of tools for educators and learners. Seamlessly switch between your teaching and learning accounts. Whether you're a seasoned educator, a student, or a lifelong learner, our platform equips you with the resources you need to excel. Enhance your teaching, access real-time progress analytics, and connect with a diverse community of learners through Client Coach's collaboration features and insights.",
      },
      {
        id: 4,
        details:
          "Client Coach is more than just an online learning platform; it's a global movement in education. We believe in using technology to connect teachers and students worldwide and unlock opportunities for knowledge sharing. With a diverse international community and a commitment to inclusivity, we celebrate the richness of global perspectives and cultures. Join us in redefining education. Get started with Client Coach today by visiting our website or downloading the Client Coach app.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/3"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/3",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/3"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/3",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/3"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/3",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/3"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/3",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/3"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/3",
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
      {
        id: 2,
        title: "Online shipping ecommerce",
        img: Biginc,
      },
    ],
  },
};
