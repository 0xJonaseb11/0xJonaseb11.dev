import React from "react";
import { BiBookReader, BiCertification, BiBriefcase } from "react-icons/bi";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import transition_Web3 from "./certificates/Transition_To_Web3.png";
import metaschool from "./certificates/metaschool.png";
import blockchain_transformation from "./certificates/web3-transformation.png";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const calculateMonthsBetween = (start, end = new Date()) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const diffInDays = Math.max(0, (endDate - startDate) / MS_PER_DAY);
  const months = Math.floor(diffInDays / 30.4375);
  return Math.max(1, months);
};

const renderDuration = (start, end) => {
  const months = calculateMonthsBetween(start, end);
  return `${months} mo${months > 1 ? "s" : ""}`;
};

const certifications = [
  {
    title: "Transition to Web3 Bootcamp",
    issuer: "Rise In",
    link: "https://www.risein.com/certificates/3219713e",
    image: transition_Web3,
    description:
      "15-week bootcamp working on community-driven projects covering Solidity, audits, and dApp deployments.",
  },
  {
    title: "Web3 & Blockchain Leadership for Transformation",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/records/27ZST6Q2N25A",
    image: blockchain_transformation,
    description:
      "Five-week program on how leadership, regulation, and policy accelerate blockchain adoption.",
  },
  {
    title: "Web3 Application Development",
    issuer: "Metaschool",
    link: "https://metaschool.so/profile/jonas-sebera",
    image: metaschool,
    description:
      "End-to-end Web3 track building NFTs, on-chain auth, and production-ready user experiences.",
  },
  {
    title: "Hyperledger Fabric Chaincode Development",
    issuer: "Udemy",
    link: "https://www.udemy.com/course/hyperledger-fabric-chaincode/",
    image: null,
    description:
      "Ten-hour intensive guide on implementing Fabric chaincode in Go, with testing and deployment pipelines.",
  },
  {
    title: "Blockchain Specialization",
    issuer: "Coursera",
    link: "https://www.coursera.org/specializations/blockchain",
    image: null,
    description:
      "Multi-course specialization covering consensus, smart contracts, and enterprise blockchain design.",
  },
  {
    title: "Decentralized Applications",
    issuer: "Coursera",
    link: "https://www.coursera.org/learn/decentralized-apps",
    image: null,
    description:
      "Deep dive into decentralized app architecture, Web3 storage, and end-to-end deployment workflows.",
  },
];

const Resume = () => {
  return (
    <div className="main-container container mx-auto font-general-medium">
      <header className="ml-3 md:mx-auto dark:text-blue-400  font-semibold text-3xl w-[3rem] border-b-[4px] rounded pb-4 border-blue-500 dark:border-blue-400 text-blue-500 mb-5">
        Resume
      </header>
      <section>
        <div className="flex items-center gap-[1rem] pl-3">
          <div className="p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg">
            <BiBookReader />
          </div>
          <h3 className="text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium">
            Education
          </h3>
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="mt-5"
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">
                  Rwanda Coding Academy
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  2022 — 2026
                </span>

                <p className="timeline-text  text-primary-dark dark:text-ternary-light font-medium font-general-medium">
                  At Rwanda Coding Academy, I am currently studying Software
                  Engineering and Embedded systems. The academy provides a
                  comprehensive curriculum and hands-on training to develop my
                  skills in coding and programming. I am learning various
                  programming languages, software development methodologies, and
                  techniques to build robust and efficient software solutions.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  New Life Christian Academy
                </h4>

                <span className="text-lg font-general-medium text-blue-400 font-semibold">
                  2019 — 2022
                </span>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  During my time at New Life Christian Academy, I completed my
                  ordinary level education with a focus on sciences and Great
                  attachment to God. The school offered a well-rounded
                  curriculum that included subjects such as mathematics,
                  physics, chemistry, and biology. I gained a solid foundation
                  in scientific principles and problem-solving skills during
                  this period.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Kibenga Primary School
                </h4>

                <span className="text-lg font-general-medium text-blue-400 font-semibold">
                  2013 — 2018
                </span>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  At Kibenga Primary School, I gained an outstanding Foundation
                  of my Whole life carrier since it is where I got all morals
                  and values that I apply during my Working Environment.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
      <section className="mt-10">
        <div className="flex items-center gap-[1rem] pl-3">
          <div className="p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg">
            <BiBriefcase />
          </div>
          <h3 className="text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium">
            Experience
          </h3>
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="mt-5"
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Software Engineer at Tarsier Safaris Ltd
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  October 2025 — Present · {renderDuration("2025-10-01")}
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  As a Software Engineer at Tarsier Safaris Ltd, I develop and
                  maintain software solutions for the travel and tourism
                  industry. I work on building scalable web applications,
                  implementing modern development practices, and ensuring
                  high-quality code delivery. My responsibilities include
                  collaborating with cross-functional teams, designing system
                  architectures, and developing features that enhance the user
                  experience for travel services.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Senior Technical Support Engineer at Web3 Mates
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  May 2025 — Present · {renderDuration("2025-05-01")} · Hybrid
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  I currently lead technical support for developers, guiding
                  blockchain integrations, smart contract deployment, and
                  troubleshooting. I streamline onboarding processes, resolve
                  complex technical issues, and ensure seamless developer
                  experiences. My role involves providing expert guidance on
                  Web3 technologies, debugging smart contracts, and facilitating
                  smooth blockchain integrations for our developer community.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Lead Blockchain Developer at Web3 Mates
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  May 2025 — Present · {renderDuration("2025-05-01")}
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  As Lead Blockchain Developer, I architect and develop
                  decentralized applications and smart contract solutions. I
                  lead a team of blockchain developers, set technical standards,
                  and drive innovation in Web3 development. My responsibilities
                  include designing scalable blockchain architectures,
                  conducting code reviews, mentoring team members, and ensuring
                  best practices in smart contract security and deployment.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  CEO & Co-Founder at Stone Proof Labs
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  February 2025 — Present · {renderDuration("2025-02-01")} · Kigali, Rwanda · Hybrid
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  As CEO and Co-Founder of Stone.proof Labs, I lead strategic
                  direction and operations for a blockchain-based mineral supply
                  chain platform. I oversee business development, manage
                  stakeholder relationships, and drive product innovation. My
                  role involves setting company vision, building strategic
                  partnerships, managing resources, and ensuring the company's
                  mission of bringing transparency to mineral supply chains
                  through blockchain technology.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Lead Blockchain Developer at Stone.proof Labs
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  February 2025 — Present · {renderDuration("2025-02-01")}
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  I lead the technical development of blockchain solutions for
                  mineral supply chain traceability. I design and implement
                  smart contracts, develop decentralized applications, and
                  architect secure blockchain systems. My work focuses on
                  creating immutable records for mineral tracking, ensuring data
                  integrity, and building scalable solutions that bring
                  transparency to supply chain operations.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Blockchain Developer at Blockify Technologies
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  August 2023 — December 2023 · {renderDuration(
                    "2023-08-01",
                    "2023-12-01"
                  )} · Remote · Internship
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  During my internship at Blockify Technologies, I developed and
                  tested smart contracts, working with various blockchain
                  technologies and frameworks. I gained hands-on experience in
                  building decentralized applications, writing secure smart
                  contracts, and integrating blockchain solutions with web
                  applications. This role provided me with foundational
                  knowledge in Web3 development and smart contract best
                  practices.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Frontend Developer at Italos
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  May 2023 — October 2023 · {renderDuration(
                    "2023-05-01",
                    "2023-10-01"
                  )} · Remote · Freelance
                </span>

                <p className="timeline-text font-general-medium text-primary-dark dark:text-ternary-light font-medium">
                  As a Frontend Developer at Italos, I created and implemented
                  user interface components, designing engaging and
                  user-friendly web interfaces. I utilized modern frontend
                  technologies such as React.js and UI/UX principles to build
                  interactive and responsive websites. I collaborated with
                  design and development teams to ensure seamless user
                  experiences and delivered high-quality frontend solutions.
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>

      <section>
        <div className="flex items-center gap-[1rem] pl-3 mt-2">
          <div className="p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg mt-4">
            <BiCertification />
          </div>
          <h3 className="text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium mt-2">
            Certification
          </h3>
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="mt-5"
        >
          {certifications.map((cert, index) => (
            <TimelineItem key={cert.title}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== certifications.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <li className="timeline-item flex flex-col gap-1 mt-2">
                  <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">
                    {cert.title}
                  </h4>

                  <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                    {cert.issuer}
                  </span>

                  {cert.image ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 rounded-xl overflow-hidden border border-indigo-500/20 shadow-sm hover:shadow-lg transition"
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        width={280}
                        height={200}
                      />
                    </a>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex h-40 w-64 items-center justify-center rounded-xl border-2 border-dashed border-indigo-500/40 bg-indigo-500/5 text-center text-sm font-semibold text-indigo-500"
                    >
                      Certificate image coming soon
                    </a>
                  )}

                  <p className="timeline-text text-primary-dark dark:text-ternary-light font-medium font-general-medium mt-2">
                    {cert.description}
                  </p>
                </li>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </section>
    </div>
  );
};

export default Resume;
