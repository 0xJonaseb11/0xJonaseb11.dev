import StoneProofLabs from "../../images/StoneProofLabs/StoneProofLabs.png";
import Web3Mates from "../../images/Web3Mates/Web3Mates.png";
import digicert1 from "../../images/Digicert/digicert1.png";
import digicert2 from "../../images/Digicert/digicert2.png";
import digicert3 from "../../images/Digicert/digicert3.png";
import digicert4 from "../../images/Digicert/digicert4.png";
import digicert5 from "../../images/Digicert/digicert5.png";
import digicert6 from "../../images/Digicert/digicert6.png";
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

export const Digicert = {
  ProjectHeader: {
    title: "DIGICERT - Blockchain-Powered Digital Certification Platform",
    publishDate: "Nov 20, 2025",
    tags: "Featured Project • Fullstack • Blockchain Platform • Full-Stack Web3 Development",
  },
  ProjectImages: [
    {
      id: 0,
      title: "DIGICERT - Platform Overview & Dashboard",
      img: digicert1,
    },
    {
      id: 1,
      title: "DIGICERT - Certificate Issuance Interface",
      img: digicert2,
    },
    {
      id: 2,
      title: "DIGICERT - Blockchain Verification System",
      img: digicert3,
    },
    {
      id: 3,
      title: "DIGICERT - Certificate Management & Validation",
      img: digicert4,
    },
    {
      id: 4,
      title: "DIGICERT - User Portal & Certificate Viewing",
      img: digicert5,
    },
    {
      id: 5,
      title: "DIGICERT - Analytics & Reporting Dashboard",
      img: digicert6,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "DIGICERT",
      },
      {
        id: 2,
        title: "Services",
        details:
          "Full-Stack Development • Blockchain Integration • Smart Contracts • DApp Development",
      },
      {
        id: 3,
        title: "Live Access",
        details: "Demo environment available upon request",
      },
      {
        id: 4,
        title: "Project Type",
        details: "Contract Work • Solo Development • Blockchain Platform",
      },
      {
        id: 5,
        title: "Development",
        details: "Solo-Handed Development",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Developed DIGICERT, a comprehensive blockchain-powered digital certification platform that revolutionizes how certificates are issued, verified, and managed. Built entirely solo, this platform leverages blockchain technology to ensure the authenticity, immutability, and verifiability of digital certificates. DIGICERT provides institutions, organizations, and individuals with a secure, transparent, and tamper-proof solution for issuing and validating certificates, diplomas, credentials, and other important documents. The platform eliminates fraud, reduces verification costs, and provides instant verification capabilities through blockchain technology.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Blockchain Technology",
          "Smart Contracts",
          "Solidity",
          "Next.js",
          "React",
          "TypeScript",
          "Web3 Integration",
          "Wagmi",
          "Rainbowkit",
          "IPFS",
          "Decentralized Storage",
          "Tailwind CSS",
          "Modern Web Development",
        ],
      },
    ],
    ProjectDetailsHeading: "Project Highlights",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Built a complete blockchain-powered digital certification platform from the ground up as a solo developer, handling all aspects of development including frontend, backend, smart contract development, and blockchain integration. The platform enables institutions to issue tamper-proof digital certificates that are permanently recorded on the blockchain, ensuring authenticity and preventing forgery. Implemented a user-friendly interface that allows certificate issuers to create, customize, and issue certificates with ease, while recipients can securely store and share their verified credentials.",
      },
      {
        id: 2,
        details:
          "Developed a robust blockchain verification system that allows anyone to verify the authenticity of a certificate by simply entering a certificate ID or scanning a QR code. Each certificate is minted as a unique token on the blockchain, creating an immutable record that cannot be altered or deleted. The verification process is instant, transparent, and requires no intermediaries, making it cost-effective and accessible. Implemented smart contracts that handle certificate issuance, ownership transfers, and verification logic automatically.",
      },
      {
        id: 3,
        details:
          "Created a comprehensive certificate management system with role-based access control for issuers, administrators, and recipients. Issuers can manage their certificate templates, track issued certificates, and view analytics. Recipients receive secure access to their certificates with the ability to share verified links or download PDF versions. The platform includes advanced features such as batch issuance, certificate revocation, expiration management, and detailed audit trails of all certificate-related activities.",
      },
      {
        id: 4,
        details:
          "Integrated IPFS (InterPlanetary File System) for decentralized storage of certificate documents and metadata, ensuring data permanence and redundancy. The platform provides a seamless experience where certificate data is stored on-chain for verification while supporting documents are stored on IPFS. Built with modern web technologies including Next.js for optimal performance, React for interactive user interfaces, and TypeScript for type safety. The entire platform was developed solo, demonstrating expertise in full-stack development, blockchain technology, smart contract development, and modern web development practices. DIGICERT represents a complete, production-ready solution for digital certification in the blockchain era.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        shareButton: (
          <TwitterShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/8"
            quote={
              "DIGICERT - Blockchain-Powered Digital Certification Platform"
            }
            hashtag={"#blockchain #web3 #certification #nextjs"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/8",
      },
      {
        id: 2,
        name: "Mail",
        shareButton: (
          <MailruShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/8"
            quote={
              "DIGICERT - Blockchain-Powered Digital Certification Platform"
            }
            hashtag={"#blockchain #web3"}
          >
            <MailruIcon size={40} round={true} />
          </MailruShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/8",
      },
      {
        id: 3,
        name: "Facebook",
        shareButton: (
          <FacebookShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/8"
            quote={
              "DIGICERT - Blockchain-Powered Digital Certification Platform"
            }
            hashtag={"#blockchain #web3 #certification"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/8",
      },
      {
        id: 4,
        name: "LinkedIn",
        shareButton: (
          <LinkedinShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/8"
            quote={
              "DIGICERT - Blockchain-Powered Digital Certification Platform"
            }
            hashtag={"#blockchain #web3"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/8",
      },
      {
        id: 5,
        name: "Whatsapp",
        shareButton: (
          <WhatsappShareButton
            url="https://jonas-sebera.vercel.app/projects/single-project/8"
            quote={
              "DIGICERT - Blockchain-Powered Digital Certification Platform"
            }
            hashtag={"#blockchain"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        ),
        url: "https://jonas-sebera.vercel.app/projects/single-project/8",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 7,
        title: "StoneProofLabs - Mineral Supply Chain",
        img: StoneProofLabs,
      },
      {
        id: 6,
        title: "Web3Mates - Blockchain Catalyst",
        img: Web3Mates,
      },
    ],
  },
};
