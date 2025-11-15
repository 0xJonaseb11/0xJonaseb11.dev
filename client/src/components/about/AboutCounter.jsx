import { useCountUp } from "react-countup";
import { motion } from "framer-motion";
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
    <div className="mt-16 sm:mt-24 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
      <div className="relative backdrop-blur-sm bg-white/40 dark:bg-primary-dark/40 border-y border-white/20 dark:border-ternary-dark/20">
        <div className="font-general-medium container mx-auto py-16 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CounterItem
                title="Years of experience"
                counter={<span id="experienceCounter" />}
                measurement=""
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CounterItem
                title="Projects on GitHub"
                counter={<span id="githubProjectsCounter" />}
                measurement="+"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CounterItem
                title="Positive feedback"
                counter={<span id="feedbackCounter" />}
                measurement="%"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CounterItem
                title="Projects completed"
                counter={<span id="projectsCounter" />}
                measurement="%"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
