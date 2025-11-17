import Web3MatesImg from "../../images/Web3Mates/Web3Mates.png";
import StoneProofLabsImg from "../../images/StoneProofLabs/StoneProofLabs.png";
import auctionHero from "../../images/AuctionPlatform/auction-hero.png";
import auctionGallery1 from "../../images/AuctionPlatform/auction-gallery-1.png";
import auctionGallery2 from "../../images/AuctionPlatform/auction-gallery-2.png";
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
export const AuctionPlatform = {
  ProjectHeader: {
    title: "Auction Platform – On-chain Fair Auctions for Digital & Physical Assets",
    publishDate: "Nov 18, 2024",
    tags: "Blockchain DApp • Payments • Layer-2 Optimized",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Auction Platform – Multi-chain bidding desk",
      img: auctionHero,
    },
    {
      id: 1,
      title: "Seller cockpit with reserve-price controls",
      img: auctionGallery1,
    },
    {
      id: 2,
      title: "Bidder experience with live settlement proofs",
      img: auctionGallery2,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Platform",
    CompanyInfo: [
      { id: 1, title: "Name", details: "Auction Platform" },
      {
        id: 2,
        title: "Services",
        details:
          "Blockchain DApp • Smart Contracts • Treasury Automation • Wallet UX",
      },
      {
        id: 3,
        title: "Live Access",
        details: "Secure demo URL provided upon request",
      },
      {
        id: 4,
        title: "Blockchain",
        details: "Ethereum Mainnet • Polygon • Base • Optimism",
      },
      { id: 5, title: "Project Type", details: "Consumer + Enterprise SaaS" },
      {
        id: 6,
        title: "Demo Video",
        details: "Available upon request",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Design and engineer a low-fee auction marketplace that settles bids in real time on Ethereum mainnet while routing most activity through Layer-2s like Polygon, Base, and Optimism. The goal was to give collectors, DAOs, and creators a fair, transparent, and gas-efficient environment with on-chain escrow, zk-powered verification, and automated payouts.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Solidity",
          "Hardhat",
          "RainbowKit",
          "wagmi",
          "Ethers.js",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis Streams",
          "The Graph",
          "IPFS",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
    ],
    ProjectDetailsHeading: "Project Highlights",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Implemented a sealed-bid + English auction hybrid that lets sellers choose the settlement mechanism per collection. Smart contracts manage reserve prices, bid increments, escrowed collateral, and automatic refunds for losing bidders. Each auction emits detailed settlement events consumed by a subgraph for analytics dashboards.",
      },
      {
        id: 2,
        details:
          "Optimized payments by natively supporting Polygon, Base, Optimism, and Ethereum mainnet. The DApp surfaces gas estimates per chain, routes orders to the lowest-fee network, and still finalizes settlement proofs on mainnet for maximum trust. Treasury tools enable instant conversion and bridging for creators who prefer a single payout chain.",
      },
      {
        id: 3,
        details:
          "Delivered a premium UX with wallet-based onboarding, portfolio-level inventory management, dispute workflows, and live notifications powered by Socket + Wagmi hooks. Added compliance guardrails (KYC tiers, AML triggers) plus activity feeds that highlight hot collections, verified sellers, and DAO-curated drops.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/9"
            quote={
              "Auction Platform – Fair, multi-chain auctions for high-value drops"
            }
            hashtag={"#web3 #auction #polygon #optimism"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/9",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/9"
            quote={
              "Auction Platform – Fair, multi-chain auctions for high-value drops"
            }
            hashtag={"#web3 #auction"}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/9",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/9"
            quote={
              "Auction Platform – Fair, multi-chain auctions for high-value drops"
            }
            hashtag={"#web3 #auction"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/9",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/9"
            quote={
              "Auction Platform – Fair, multi-chain auctions for high-value drops"
            }
            hashtag={"#web3 #auction"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/9",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/9"
            quote={
              "Auction Platform – Fair, multi-chain auctions for high-value drops"
            }
            hashtag={"#web3"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/9",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 6,
        title: "Web3Mates - Blockchain Catalyst",
        img: Web3MatesImg,
      },
      {
        id: 7,
        title: "StoneProofLabs - Mineral Supply Chain",
        img: StoneProofLabsImg,
      },
    ],
  },
};

