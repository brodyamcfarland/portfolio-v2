import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const image = "/Turnt.PNG";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.img
        src={image}
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="mr-0 md:mr-5 mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] md:rounded-lg"
      />
      <div>
        <h4 className="tracking-[6px] font-semibold uppercase text-gray-300 text-lg mb-3">
          Background
        </h4>
        <p className="text-sm text-gray-400">
          I'm Brody McFarland. I have been coding for a few years now as a
          full-stack developer. I have a B.S. Degree in Business Management and
          have been working in the Real Estate Auction and Loan Industry for
          several years. I came across software development after graduating and
          have been putting all of my focus into coding. I've also dove into
          Smart Contract Development and am interested in the development side
          of digital assets. I am comfortable building web and mobile
          applications from the ground up and adding in features such as
          authentication, smart contract integration, database configuration,
          and much more.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
