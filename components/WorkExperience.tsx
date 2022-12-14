import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../types";

type Props = {
    experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col text-center relative overflow-hidden h-screen md:flex-row max-w-full px-5 pr-8 md:px-10 justify-evenly mx-auto items-center text-sm md:text-lg"
        >
            <h3 className="absolute top-20 md:top-16 uppercase tracking-[12px] text-gray-400 text-2xl">
                Experience
            </h3>

            <div className="w-full flex space-x-5 overflow-x-scroll h-[75%] p-10 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-600/80">
                {experiences?.map((experience) => (
                    <ExperienceCard
                        key={experience._id}
                        experience={experience}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default WorkExperience;
