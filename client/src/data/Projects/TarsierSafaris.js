import Socialite from "../../images/Socialite/Socialite.jpg";
import Italos from "../../images/Italos/Italos.png";
import tarsierMain from "../../images/TarsierSafaris/TarsierSafaris.png";
import tarsier1 from "../../images/TarsierSafaris/tarsier1.png";
import tarsier2 from "../../images/TarsierSafaris/tarsier2.png";
import tarsier3 from "../../images/TarsierSafaris/tarsier3.png";
import tarsier4 from "../../images/TarsierSafaris/tarsier4.png";
import tarsier5 from "../../images/TarsierSafaris/tarsier5.png";
import tarsier6 from "../../images/TarsierSafaris/tarsier6.png";
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

export const TarsierSafaris = {
  ProjectHeader: {
    title: "Tarsier Safaris Limited - Premium Travel & Tourism Platform",
    publishDate: "Oct 10, 2025",
    tags: "Featured Project • Fullstack • Business Website",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Tarsier Safaris - Hero Section & Homepage",
      img: tarsier1,
    },
    {
      id: 1,
      title: "Tarsier Safaris - Top Attractions Destinations",
      img: tarsier2,
    },
    {
      id: 2,
      title: "Tarsier Safaris - Featured Packages & Booking",
      img: tarsier3,
    },
    {
      id: 3,
      title: "Tarsier Safaris - Destination Details & Services",
      img: tarsier4,
    },
    {
      id: 4,
      title: "Tarsier Safaris - Photography Safaris Landing",
      img: tarsier5,
    },
    {
      id: 5,
      title: "Tarsier Safaris - Photography Safaris Landing",
      img: tarsier6,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Tarsier Safaris Limited",
      },
      {
        id: 2,
        title: "Services",
        details: "Full-Stack Web Development • UI/UX Design • Business Website",
      },
      {
        id: 3,
        title: "Website",
        details: "https://tarsier-safaris-ltd.vercel.app/",
      },
      {
        id: 4,
        title: "LinkedIn",
        details: "https://www.linkedin.com/company/tarsier-safaris-limited/",
      },
      {
        id: 5,
        title: "Project Type",
        details: "Contract Work • Travel & Tourism Business",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Developed a comprehensive, modern business website for Tarsier Safaris Limited, a premier East African tour operator specializing in gorilla tracking, wildlife safaris, and cultural experiences across Uganda, Kenya, Tanzania, and Rwanda. The platform showcases their curated travel experiences, destination information, safari packages, and booking capabilities with an immersive, user-friendly interface that captures the essence of adventure and natural beauty.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Modern Web APIs",
          "Responsive Design",
          "SEO Optimization",
          "Performance Optimization",
        ],
      },
    ],
    ProjectDetailsHeading: "Project Highlights",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Built a fully responsive, modern travel and tourism website using Next.js and React, featuring dynamic hero sections, interactive destination cards, and comprehensive safari package listings. The platform showcases Tarsier Safaris' extensive offerings across East Africa, including gorilla tracking adventures, wildlife safaris, cultural tours, and photography expeditions. Implemented smooth animations and transitions using Framer Motion to create an engaging user experience that reflects the adventure and beauty of East African travel.",
      },
      {
        id: 2,
        details:
          "Developed a sophisticated destination showcase system featuring top attractions across Uganda, Kenya, Tanzania, and Rwanda. Each destination card includes detailed information about highlights, best travel seasons, difficulty levels, and booking options. Created an intuitive navigation system with category filters (Luxury, Wellness, Adventure) and search functionality, allowing users to easily discover and explore safari packages tailored to their preferences and travel needs.",
      },
      {
        id: 3,
        details:
          "Implemented a comprehensive package management system displaying featured tours, last-minute deals, and categorized safari experiences. The platform includes detailed package information with pricing, duration, difficulty levels, and customer reviews. Integrated social sharing capabilities and optimized the site for search engines to maximize visibility and reach for the travel business. The design emphasizes visual storytelling with stunning landscape photography and clear call-to-action elements.",
      },
      {
        id: 4,
        details:
          "Created multiple specialized landing pages for different safari types including Gorilla Trekking, Photography Safaris, and Wildlife Experiences. Each page features immersive hero sections, detailed service descriptions, and compelling visuals that capture the essence of East African adventure. The website includes comprehensive FAQ sections, team member profiles, customer testimonials, and contact information, providing a complete digital presence for the tour operator. Built with modern web development best practices, ensuring fast load times, accessibility, and cross-browser compatibility.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/5"
            quote={
              "Tarsier Safaris Limited - Premium Travel & Tourism Platform"
            }
            hashtag={"#webdevelopment #nextjs #traveltech"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/5",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/5"
            quote={
              "Tarsier Safaris Limited - Premium Travel & Tourism Platform"
            }
            hashtag={"#webdevelopment #nextjs"}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/5",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/5"
            quote={
              "Tarsier Safaris Limited - Premium Travel & Tourism Platform"
            }
            hashtag={"#webdevelopment #nextjs #traveltech"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/5",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/5"
            quote={
              "Tarsier Safaris Limited - Premium Travel & Tourism Platform"
            }
            hashtag={"#webdevelopment #nextjs"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/5",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/5"
            quote={
              "Tarsier Safaris Limited - Premium Travel & Tourism Platform"
            }
            hashtag={"#webdevelopment"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/5",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 0,
        title: "SocialMedia Platform",
        img: Socialite,
      },
      {
        id: 1,
        title: "Data Management Platform",
        category: "Web Application",
        img: Italos,
      },
    ],
  },
};
