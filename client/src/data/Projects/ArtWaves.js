import Web3MatesImg from "../../images/Web3Mates/Web3Mates.png";
import TokenVotingImg from "../../images/TokenVotingDapp/token-voting-hero.png";
import artWavesHero from "../../images/artwaves/artwaves-hero.png";
import artWaves1 from "../../images/artwaves/artwaves1.png";
import artWaves2 from "../../images/artwaves/artwaves2.png";
import artWaves3 from "../../images/artwaves/artwaves3.png";
import artWaves4 from "../../images/artwaves/artwaves4.png";
import artWaves5 from "../../images/artwaves/artwaves5.png";
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

export const ArtWaves = {
  ProjectHeader: {
    title: "Art Waves – NFT-Based Digital Art Marketplace",
    publishDate: "June 2024",
    tags: "E-Commerce • NFT Marketplace • Digital Art • Payment Integration",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Art Waves – Marketplace homepage with featured collections",
      img: artWavesHero,
    },
    {
      id: 1,
      title: "Product listing with category filters and search",
      img: artWaves1,
    },
    {
      id: 2,
      title: "Shopping cart and wishlist management interface",
      img: artWaves2,
    },
    {
      id: 3,
      title: "Single product page with artwork details",
      img: artWaves3,
    },
    {
      id: 4,
      title: "Checkout flow with address management",
      img: artWaves4,
    },
    {
      id: 5,
      title: "User profile and order history dashboard",
      img: artWaves5,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Platform",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Art Waves",
      },
      {
        id: 2,
        title: "Services",
        details:
          "E-Commerce Platform • NFT Marketplace • Digital Art Sales • Payment Processing",
      },
      {
        id: 3,
        title: "Live Access",
        details: "Demo environment and repository access available upon request",
      },
      {
        id: 4,
        title: "Payment Integration",
        details: "Razorpay",
      },
      {
        id: 5,
        title: "Project Type",
        details: "Full-Stack E-Commerce • NFT Marketplace",
      },
      {
        id: 6,
        title: "Deployment",
        details: "Netlify",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Developed Art Waves, a responsive e-commerce platform designed as a digital art marketplace where artists can showcase and sell their NFT-based artwork, paintings, and related creative products. The platform enables customers to browse, filter, purchase, and securely checkout digital art pieces with integrated payment processing. Built with React.js and modern web technologies, Art Waves provides a seamless shopping experience with features including authentication, cart management, wishlist functionality, order tracking, and coupon system.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "React.js",
          "HTML5",
          "CSS3",
          "JavaScript",
          "React Router",
          "Axios",
          "JWT Authentication",
          "Razorpay Payment Gateway",
          "MockBee (Backend)",
          "Netlify",
          "Responsive Design",
        ],
      },
    ],
    ProjectDetailsHeading: "Project Highlights",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Implemented a comprehensive authentication system with secure login, signup, and logout functionality using JWT tokens. Users can create accounts, manage their profiles, and access personalized features including wishlist, cart, and order history. The authentication flow ensures secure access to user-specific data and protected routes throughout the application.",
      },
      {
        id: 2,
        details:
          "Built an advanced product listing system with multiple filtering options including category, discount percentage, price range, and ratings. Integrated a powerful search functionality that allows users to find products by name or category. The product catalog displays digital artwork with high-quality images, detailed descriptions, and pricing information, making it easy for customers to discover and explore available pieces.",
      },
      {
        id: 3,
        details:
          "Developed a complete shopping experience with cart management, wishlist functionality, and address management. Users can add items to cart, apply discount coupons, manage multiple shipping addresses, and proceed through a streamlined checkout process. The platform integrates Razorpay for secure payment processing, ensuring safe and reliable transactions for digital art purchases.",
      },
      {
        id: 4,
        details:
          "Created a comprehensive order management system with order summary, order history tracking, and user profile pages. Customers can view their purchase history, track order status, and manage their account settings. The platform includes loading states, alert notifications, and responsive design that works seamlessly across desktop, tablet, and mobile devices. Art Waves represents a complete, production-ready e-commerce solution specifically tailored for the digital art and NFT marketplace industry.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/12"
            quote={
              "Art Waves – NFT-Based Digital Art Marketplace with Razorpay Integration"
            }
            hashtag={"#ecommerce #nft #reactjs #digitalart #webdev"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/12",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/12"
            quote={
              "Art Waves – NFT-Based Digital Art Marketplace with Razorpay Integration"
            }
            hashtag={"#ecommerce #nft"}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/12",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/12"
            quote={
              "Art Waves – NFT-Based Digital Art Marketplace with Razorpay Integration"
            }
            hashtag={"#ecommerce #nft #reactjs"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/12",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/12"
            quote={
              "Art Waves – NFT-Based Digital Art Marketplace with Razorpay Integration"
            }
            hashtag={"#ecommerce #nft"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/12",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/12"
            quote={
              "Art Waves – NFT-Based Digital Art Marketplace with Razorpay Integration"
            }
            hashtag={"#ecommerce"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/12",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 10,
        title: "Token Voting Dapp",
        img: TokenVotingImg,
      },
      {
        id: 6,
        title: "Web3Mates - Blockchain Catalyst",
        img: Web3MatesImg,
      },
    ],
  },
};


