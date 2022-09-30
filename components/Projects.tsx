import React from "react";
import { motion } from "framer-motion";
import { Project } from "../types";
import { urlFor } from "../sanity";

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 px-8">
            <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-400 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-600/80">
                {projects.map((project, i) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ opacity: 0, y: -300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            alt="project-image"
                            className="max-h-[20rem] rounded-lg shadow-lg"
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-lg font-semibold text-center">
                                <span className="underline decoration-emerald-500/50 font-thin text-md">
                                    Project {i + 1} of {projects.length}:
                                </span>{" "}
                                {project?.title}
                            </h4>
                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map((technology) => (
                                    <img
                                        src={urlFor(technology.image).url()}
                                        key={technology._id}
                                        className="h-7 w-7 rounded-full"
                                    />
                                ))}
                            </div>
                            <p className="text-md text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full absolute top-[18%] bg-emerald-400/5 left-0 h-[500px] -skew-y-12" />
        </div>
    );
};

export default Projects;
