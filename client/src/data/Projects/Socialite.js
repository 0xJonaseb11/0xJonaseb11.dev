import Italos from "../../images/Italos/Italos.png";
import BigincEcommerce from "../../images/biginc-ecommerce/Biginc.png";
import socialite1 from "../../images/Socialite/socialite1.png";
import socialite2 from "../../images/Socialite/socialite2.png";
import socialite3 from "../../images/Socialite/socialite3.png";
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

export const Socialite = {
  ProjectHeader: {
    title: "Project Management",
    publishDate: "Jul 26, 2022",
    tags: "Fullstack Project",
  },
  ProjectImages: [
    {
      id: 0,
      title: "PROJECT MANAGEMENT SOCIALITE",
      img: socialite2,
    },
    {
      id: 1,
      title: "PROJECT MANAGEMENT SOCIALITE",
      img: socialite1,
    },
    {
      id: 2,
      title: "PROJECT MANAGEMENT SOCIALITE",
      img: socialite3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Socialite Ltd",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://socialiteinc.vercel.app/",
      },
      {
        id: 4,
        title: "Phone",
        details: "tel:+250 798 223 860",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Join the Socialite community today and unleash your social side! 🎉🌟👥 With our user-friendly interface, connecting with friends and family has never been easier. Share your world through stunning photos and captivating stories. Let Socialite be your go-to for endless entertainment and inspiration! 💻📱📷.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "React js",
          "TailwindCSS",
          "Node.js",
          "Express js",
          "Cloudinary",
          "Figma",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Socialite is a cutting-edge social media platform that brings people together like never before. With a sleek and intuitive interface, it empowers users to share their life experiences, connect with friends and family, and discover new horizons. Whether you want to post captivating photos, engaging videos, or thought-provoking status updates, Socialite has you covered. Stay in the loop with real-time notifications and explore trending topics in a vibrant community of users. Join us today and experience the future of social networking.",
      },
      {
        id: 2,
        details:
          "At the heart of Socialite is a mission to foster meaningful connections. We understand that social media can sometimes be overwhelming, so we prioritize user privacy and safety. Our platform allows you to tailor your feed to your interests, follow influencers you admire, and engage in meaningful conversations. With end-to-end encryption for messages and robust content moderation, Socialite is committed to providing a secure environment for everyone.",
      },
      {
        id: 3,
        details:
          "In addition to personal profiles, Socialite offers a powerful set of tools for businesses and creators. Seamlessly switch between your personal and professional personas. Whether you run a small business, host webinars, or showcase your art, our platform provides the tools you need to succeed. Expand your reach and build a loyal audience with Socialite Pages, analytics, and advertising options.",
      },
      {
        id: 4,
        details:
          "Socialite isn't just a platform; it's a movement. We believe in using technology to bring people closer together and enrich lives. With a global user base and a commitment to diversity and inclusion, we celebrate the unique perspectives and cultures of our community members. Join us on a journey of discovery, expression, and connection. Download the Socialite app or visit our website today to start your social media adventure.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/0"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/0",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/0"
            quote={"'s portfolio"}
            hashtag={"#portfolio..."}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/0",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/0"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/0",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/0"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/0",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/0"
            quote={"Jonas sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/0",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Italos Data Management",
        img: Italos,
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
