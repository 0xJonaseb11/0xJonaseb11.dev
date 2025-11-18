import { useContext } from "react";
import { motion } from "framer-motion";
import AboutMeContext from "../../context/AboutMeContext";
import AboutClientSingle from "./AboutClientSingle";

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-16 sm:mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-general-medium text-3xl sm:text-4xl lg:text-5xl text-center text-primary-dark dark:text-primary-light mb-4"
      >
        {clientsHeading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-ternary-dark dark:text-ternary-light mb-12 text-lg"
      >
        Trusted by innovative companies and startups
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
        {clientsData.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AboutClientSingle title={client.title} image={client.img} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutClients;
