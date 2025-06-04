import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";
import { useEffect, useState } from "react";

const AboutCounter = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  console.log(githubRepos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Jonas-sebera/repos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGithubRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };
    fetchData();
  }, []);

  useCountUp({ ref: "experienceCounter", end: 6, duration: 6 });
  useCountUp({ ref: "githubProjectsCounter", end: 26, duration: 3 });
  useCountUp({ ref: "feedbackCounter", end: 92, duration: 3 });
  useCountUp({ ref: "projectsCounter", end: 81, duration: 3 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Projects on GitHub"
          counter={<span id="githubProjectsCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Projects completed"
          counter={<span id="projectsCounter" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
