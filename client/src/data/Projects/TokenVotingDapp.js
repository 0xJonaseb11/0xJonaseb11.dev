import StoneProofLabsImg from "../../images/StoneProofLabs/StoneProofLabs.png";
import Web3MatesImg from "../../images/Web3Mates/Web3Mates.png";
import tokenVotingHero from "../../images/TokenVotingDapp/token-voting-hero.png";
import tokenVoting1 from "../../images/TokenVotingDapp/token-voting1.png";
import tokenVoting2 from "../../images/TokenVotingDapp/token-voting2.png";
import tokenVoting3 from "../../images/TokenVotingDapp/token-voting3.png";
import tokenVoting4 from "../../images/TokenVotingDapp/token-voting4.png";
import tokenVoting5 from "../../images/TokenVotingDapp/token-voting5.png";
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

export const TokenVotingDapp = {
  ProjectHeader: {
    title: "Token Voting Dapp – Multi-chain Governance Suite",
    publishDate: "August 2024",
    tags: "DAO Toolkit • Token Governance • EVM",
  },
  ProjectImages: [
    {
      id: 0,
      title: "Proposal index with live quorum tracking",
      img: tokenVotingHero,
    },
    {
      id: 1,
      title: "Delegate dashboard across Polygon & BSC",
      img: tokenVoting1,
    },
    {
      id: 2,
      title: "Analytics on voter engagement + staking pools",
      img: tokenVoting2,
    },
    {
      id: 3,
      title: "Proposal breakdown with DAO sentiment gauges",
      img: tokenVoting3,
    },
    {
      id: 4,
      title: "Treasury and staking insights in one panel",
      img: tokenVoting4,
    },
    {
      id: 5,
      title: "Delegate leaderboard & voting streaks",
      img: tokenVoting5,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Project",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Token Voting Dapp",
      },
      {
        id: 2,
        title: "Services",
        details:
          "Token-Governed Voting • Staking Incentives • Treasury Reporting",
      },
      {
        id: 3,
        title: "Live Access",
        details: "GitHub repo or production URL shared upon request",
      },
      {
        id: 4,
        title: "Blockchain",
        details: "Ethereum • Polygon • Binance Smart Chain (testnets & mainnets)",
      },
      {
        id: 5,
        title: "Project Type",
        details: "Open-source DAO infrastructure",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Deliver a production-ready governance stack that makes on-chain voting practical for fast-growing crypto communities. The platform blends ERC-20 based voting power, gas-optimized proposal execution, and reward hooks so DAOs can run elections, budget approvals, and policy experiments without leaving a single dashboard.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Solidity",
          "Hardhat",
          "React 18",
          "RainbowKit",
          "wagmi",
          "Ethers.js",
          "Express API",
          "MongoDB",
          "Socket.io",
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
          "Supports quadratic, weighted, and token-lock voting modes while using Merkle proofs to keep gas costs low. Proposal life cycle is enforced entirely on-chain with guard rails for quorum, execution delays, and emergency vetoes.",
      },
      {
        id: 2,
        details:
          "Governance delegates can batch-sign votes across Polygon, Ethereum, and BSC using wallet relayers. Real-time sockets push vote receipts and quorum countdowns so community members always see the state of play.",
      },
      {
        id: 3,
        details:
          "Bundled staking incentives with reward curves configurable per proposal category. Contributors can lock governance tokens for higher voting weight while receiving claimable rewards once proposals finalize.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/10"
            quote={
              "Token Voting Dapp – Multi-chain governance suite with staking incentives"
            }
            hashtag={"#web3 #dao #governance"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/10",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/10"
            quote={
              "Token Voting Dapp – Multi-chain governance suite with staking incentives"
            }
            hashtag={"#web3 #dao"}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/10",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/10"
            quote={
              "Token Voting Dapp – Multi-chain governance suite with staking incentives"
            }
            hashtag={"#web3 #dao"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/10",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/10"
            quote={
              "Token Voting Dapp – Multi-chain governance suite with staking incentives"
            }
            hashtag={"#web3 #dao"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/10",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/10"
            quote={
              "Token Voting Dapp – Multi-chain governance suite with staking incentives"
            }
            hashtag={"#web3"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/10",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 7,
        title: "StoneProofLabs - Mineral Supply Chain",
        img: StoneProofLabsImg,
      },
      {
        id: 6,
        title: "Web3Mates - Blockchain Catalyst",
        img: Web3MatesImg,
      },
    ],
  },
};

