import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      whileInView={{ y: 0 }}
      className="relative flex justify-center items-center select-none"
    >
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-[#0e8882a4] rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#3333338c] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#3333335b] rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#3333332f] rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
