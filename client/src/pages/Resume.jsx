import React from "react";
import { BiBookReader, BiCertification } from "react-icons/bi";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import transition_Web3 from "./certificates/Transition_To_Web3.png";
import metaschool from "./certificates/metaschool.png";
// import hyperledger from "./certificates/hyperledger.png";
// import decentrlized-apps from "./certificates/decentralized-apps.png";
// import blockchain-specialization from "./certificates/blockchain-specialization.png";

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
                  2022 — Present
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
            <BiBookReader />
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
                  Frontend Developer At Italos
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  2021 — 2023
                </span>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  At Italos, I worked as a frontend developer. My role involved
                  creating and implementing user interface components and
                  designing engaging and user-friendly web interfaces. I
                  utilized various frontend technologies such as React and
                  tailwindcss to build interactive and responsive websites. I
                  collaborated with the design and development teams to ensure a
                  seamless user experience. F{" "}
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
                  Mid-Level Smart Contract Engineer
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  2023 — 2023
                </span>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  At blockify, I was employed as a mid-level smart contract
                  developer. In this role, I was responsible for developing and
                  testing intermediary smart contracts to interact with clients
                  and services provided by different Web site. I worked with a
                  range of technologies, frameworks, and programming languages
                  to build robust and scalable decentralized applications. I
                  collaborated with cross-functional teams to design, develop,
                  and deploy innovative software solutions.
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
                  Project Leader
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  2022 — Present
                </span>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  In my role as a project leader, I oversee and manage various
                  software development projects. I coordinate with team members,
                  set project goals and timelines, and ensure successful project
                  execution. I am responsible for resource allocation, task
                  delegation, and ensuring effective communication within the
                  team. I monitor project progress, mitigate risks, and ensure
                  timely delivery of high-quality software solutions.
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
                  Web Designer
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  2018 — Present
                </span>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  As a web designer, I am involved in creating visually
                  appealing and intuitive website designs. I combine my
                  knowledge of design principles, user experience, and frontend
                  technologies to craft engaging web interfaces. I collaborate
                  with clients and stakeholders to understand their requirements
                  and translate them into visually stunning and functional
                  websites. I also work closely with developers to ensure
                  seamless implementation of the designs.
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
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <li className="timeline-item flex flex-col gap-1 mb-2">
                <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">
                  Transition to web3 Bootcamp
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  Rise in
                </span>

                <a
                  href="https://www.risein.com/certificates/3219713e"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={transition_Web3}
                    alt="Rise in Transition To Web3 Bootcamp certificate"
                    width={250}
                    height={200}
                  />
                </a>
                <p className="timeline-text  text-primary-dark dark:text-ternary-light font-medium font-general-medium mt-2">
                  I spent 15 weeks learning and working on a couple of projects
                  in a community-based ecosystem at Rise in Bootcamp.
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
              <li className="timeline-item flex flex-col gap-1 mt-2">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Web3 and Blockchain Leadership For Transformation
                </h4>

                <span className="text-lg font-general-medium text-blue-400 font-semibold">
                  Coursera
                </span>

                <a href="https://">
                  <img
                    src=""
                    alt="Blockchain and web3 leadership for transformation certificate"
                  />
                </a>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  I dedicated 5 weeks of my time studying how leadership and
                  regulation work hand-in-hand to the success of blockchain and
                  web3.
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
              <li className="timeline-item flex flex-col gap-1 mt-2">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Web3 Application Development
                </h4>

                <span className="text-lg font-general-medium text-blue-400 font-semibold">
                  Metaschool
                </span>

                <a
                  href="https://metaschool.so/profile/jonas-sebera"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={metaschool}
                    alt="Metaschool Web3 Application development NFT Certifications"
                    width={250}
                    height={200}
                  />
                </a>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  I dedicated my time to Metaschool learning resources on
                  learning about Web3.0 Application development
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
              <li className="timeline-item flex flex-col gap-1 mt-2">
                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">
                  Hyperledger Fabric Chaincode development using GoLang
                </h4>

                <span className="text-lg font-general-medium text-blue-400 font-semibold">
                  Udemy
                </span>

                <a href="https://" target="_blank" rel="noreferrer">
                  <img
                    src=""
                    alt="Hyperledger chaincode development usind GoLang Certificate on Udemy"
                    width={250}
                    height={200}
                  />
                </a>

                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                  I spent over ten hours on a complete guide on a Hyperledger
                  Chaincode development
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
              <li className="timeline-item flex flex-col gap-1 mt-2">
                <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">
                  Blockchain specialization
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  Coursera
                </span>

                <a href="https://" target="_blank" rel="noreferrer">
                  <img
                    src=""
                    alt="Blockchain specialization"
                    width={250}
                    height={200}
                  />
                </a>

                <p className="timeline-text  text-primary-dark dark:text-ternary-light font-medium font-general-medium">
                  I dedicated my time to Coursera learning resources on learning
                  about Blockchain specialization
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
              <li className="timeline-item flex flex-col gap-1 mt-2">
                <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">
                  Decentralized Apps
                </h4>

                <span className="text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium">
                  Coursera
                </span>

                <a href="https://" target="_blank" rel="noreferrer">
                  <img
                    src=""
                    alt="Decentralized Apps Certificate"
                    width={250}
                    height={200}
                  />
                </a>

                <p className="timeline-text  text-primary-dark dark:text-ternary-light font-medium font-general-medium">
                  I dedicated my time to Coursera learning resources on learning
                  about Descentralized Apps - full dive
                </p>
              </li>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  );
};

export default Resume;
