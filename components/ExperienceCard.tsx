import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../types";
import { urlFor } from "../sanity";

type Props = {
    experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#ffffff0c] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                src={urlFor(experience?.companyImage).url()}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.3 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-lg mt-1">{experience.company}</p>
                <div className="flex space-x-2 my-2">
                    {experience.technologies?.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full object-cover"
                            src={urlFor(technology?.image).url()}
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300 text-sm">
                    {new Date(experience.dateStarted).toDateString()} - {""}
                    {experience.isCurrentlyWorkingHere
                        ? " Present"
                        : new Date(experience.datedEnded).toDateString()}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-md max-h-70 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-emerald-500/80">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
