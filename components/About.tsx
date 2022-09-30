import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../types";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
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
                src={urlFor(pageInfo?.profilePic).url()}
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
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
};

export default About;
