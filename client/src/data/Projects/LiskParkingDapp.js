import StoneProofLabsImg from "../../images/StoneProofLabs/StoneProofLabs.png";
import AuctionPlatformImg from "../../images/AuctionPlatform/auction-hero.png";
import liskHero from "../../images/LiskParkingDapp/liskparking-hero.png";
import lisk1 from "../../images/LiskParkingDapp/liskparking1.png";
import lisk2 from "../../images/LiskParkingDapp/liskparking2.png";
import lisk3 from "../../images/LiskParkingDapp/liskparking3.png";
import lisk4 from "../../images/LiskParkingDapp/liskparking4.png";
import lisk5 from "../../images/LiskParkingDapp/liskparking5.png";
import lisk6 from "../../images/LiskParkingDapp/liskparking6.png";
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

export const LiskParkingDapp = {
  ProjectHeader: {
    title: "Lisk ParkNetwork – Web3 Parking OS",
    publishDate: "July 2024",
    tags: "Smart Mobility • Web3 Payments • IoT Integrations",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Fleet dashboard matching drivers to free slots",
      img: liskHero,
    },
    {
      id: 1,
      title: "Permit marketplace for city-issued NFTs",
      img: lisk1,
    },
    {
      id: 2,
      title: "Operator controls with live occupancy heatmap",
      img: lisk2,
    },
    {
      id: 3,
      title: "Driver mobile view with crypto top-ups",
      img: lisk3,
    },
    {
      id: 4,
      title: "Treasury stats across Lisk + EVM bridges",
      img: lisk4,
    },
    {
      id: 5,
      title: "NFT pass lifecycle management",
      img: lisk5,
    },
    {
      id: 6,
      title: "Payment receipts and enforcement audit log",
      img: lisk6,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Platform",
    CompanyInfo: [
      { id: 1, title: "Name", details: "Lisk ParkNetwork" },
      {
        id: 2,
        title: "Services",
        details:
          "Smart City Parking • NFT Permit System • Crypto Payments • Analytics",
      },
      {
        id: 3,
        title: "Live Access",
        details: "Private repo & production URL provided upon request",
      },
      {
        id: 4,
        title: "Blockchain",
        details:
          "Lisk SDK • Ethereum Layer-2 rollups • Cross-chain bridges for stablecoins",
      },
      {
        id: 5,
        title: "Project Type",
        details: "Enterprise SaaS • Municipal Pilot",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Create a decentralized parking operating system that lets city partners tokenize permits, automate enforcement, and accept low-fee crypto payments. The platform focuses on verifiable access, transparent revenue sharing, and data-driven occupancy planning while keeping UX simple for both drivers and fleet operators.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Lisk SDK",
          "TypeScript",
          "React 18",
          "Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "Solidity",
          "Hardhat",
          "wagmi",
          "RainbowKit",
          "PostgreSQL",
          "Redis",
          "The Graph",
          "IPFS",
        ],
      },
    ],
    ProjectDetailsHeading: "Project Highlights",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Designed NFT-based permits with enforced validity windows, geo-fencing, and configurable rate cards so municipalities can monetize curb space without manual reviews. Each permit’s lifecycle is tracked on-chain, enabling real-time revocation and tamper-proof auditing.",
      },
      {
        id: 2,
        details:
          "Implemented dual wallets—one for operators and one for drivers—with automatic bridging between Lisk native tokens and mainstream stablecoins. Payments settle in sub-5 seconds using Layer-2 rails while syncing finality to Lisk for compliance reporting.",
      },
      {
        id: 3,
        details:
          "Pairs IoT sensors and camera feeds with a web dashboard that visualizes occupancy heatmaps, enforcement alerts, and demand forecasting. The analytics layer feeds staking incentives for community validators who verify parking data.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/11"
            quote={
              "Lisk ParkNetwork – Web3 parking OS for municipal pilots and smart mobility"
            }
            hashtag={"#web3 #lisk #mobility"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/11",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/11"
            quote={
              "Lisk ParkNetwork – Web3 parking OS for municipal pilots and smart mobility"
            }
            hashtag={"#web3 #mobility"}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/11",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/11"
            quote={
              "Lisk ParkNetwork – Web3 parking OS for municipal pilots and smart mobility"
            }
            hashtag={"#web3 #lisk #mobility"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/11",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/11"
            quote={
              "Lisk ParkNetwork – Web3 parking OS for municipal pilots and smart mobility"
            }
            hashtag={"#web3 #mobility"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/11",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/11"
            quote={
              "Lisk ParkNetwork – Web3 parking OS for municipal pilots and smart mobility"
            }
            hashtag={"#web3"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/11",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 9,
        title: "Auction Platform",
        img: AuctionPlatformImg,
      },
      {
        id: 7,
        title: "StoneProofLabs - Mineral Supply Chain",
        img: StoneProofLabsImg,
      },
    ],
  },
};

