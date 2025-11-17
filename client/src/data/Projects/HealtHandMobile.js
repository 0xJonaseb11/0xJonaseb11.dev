import Socialite from "../../images/Socialite/Socialite.jpg";
import BigincEcommerce from "../../images/biginc-ecommerce/Biginc.png";
import health from "../../images/HealtHand/health.png";
import health1 from "../../images/HealtHand/health1.png";
import health2 from "../../images/HealtHand/health2.png";
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

export const HealthHand = {
  ProjectHeader: {
    title: "Nutritional Mobile App",
    publishDate: "Jan 20, 2023",
    tags: "Mobile App / Health",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Nutritional app",
      img: health,
    },
    {
      id: 2,
      title: "Nutritional app",
      img: health1,
    },
    {
      id: 3,
      title: "Nutritional app",
      img: health2,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "HealthHand Nutrition Manager",
      },
      {
        id: 2,
        title: "Services",
        details: "Mobile Development",
      },
      {
        id: 4,
        title: "Phone",
        details: "tel:+250 798 223 860",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Our objective is to create a user-friendly nutritional mobile app that helps users make informed dietary choices, track their daily food intake, and improve their overall health and well-being.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["React Native", "Native Wind", "Node js"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "The nutritional mobile app provides users with a comprehensive database of nutrition information for a wide range of foods. Users can access detailed information on the nutritional content of various food items, including calories, macronutrients, vitamins, and minerals. This extensive database empowers users to make informed decisions about their diet, enabling them to choose foods that align with their health and nutritional goals.",
      },
      {
        id: 2,
        details:
          "Users can log their daily food intake with ease using the app, allowing them to keep a detailed record of the foods they consume. The app not only tracks the number of calories consumed but also provides insights into the nutritional value of each meal. This feature enables users to maintain a healthy lifestyle by monitoring their nutritional goals, making adjustments to their diet as needed, and ensuring that they are meeting their dietary requirements.",
      },
      {
        id: 3,
        details:
          "The app goes beyond basic nutritional tracking. It offers a range of advanced features for users to customize their dietary experience. Users can set dietary preferences based on their dietary restrictions or preferences, such as vegetarian, vegan, gluten-free, or other special diets. Additionally, the app generates personalized meal plans tailored to individual dietary goals, making it easier for users to plan their daily meals while adhering to their dietary choices.",
      },
      {
        id: 4,
        details:
          "The nutritional mobile app is equipped with interactive charts and graphs that provide users with a visual representation of their progress. Users can view their dietary habits, track changes in their nutritional intake, and monitor their health and fitness goals over time. These visual aids empower users to make informed decisions about their diet, identify areas for improvement, and take control of their overall well-being.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/4"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/4",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/4"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/4",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/4"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/4",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/4"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/4",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/4"
            quote={"Jonas Sebera's portfolio"}
            hashtag={"#portfolio..."}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/4",
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
