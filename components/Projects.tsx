import React from "react";
import { motion } from "framer-motion";
import { Project } from "../types";
import { urlFor } from "../sanity";

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 px-2 pr-6 md:px-8">
            <h3 className="absolute top-[75px] pl-7 md:pl-0 md:top-20 uppercase tracking-[12px] text-gray-400 text-2xl">
                Projects
            </h3>
            <div className="relative w-full  flex overflow-x-scroll snap-x snap-mandatory z-20 scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-600/80 overflow-y-scroll">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 lg:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ opacity: 0, y: -300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            alt="project-image"
                            className="h-40 w-64 md:h-80 md:w-[35rem] rounded-lg shadow-lg object-fill"
                        />
                        <div className="flex flex-col space-y-3 md:space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-lg font-semibold text-center">
                                {project?.title}
                            </h4>
                            <a
                                href={project?.demoLink}
                                className="m-auto border border-emerald-500 rounded-lg px-5 py-1 bg-[#0e8882]/20 opacity-50 hover:opacity-100 duration-500"
                            >
                                Demo
                            </a>
                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map((technology) => (
                                    <img
                                        src={urlFor(technology.image).url()}
                                        key={technology._id}
                                        className="h-7 w-7 rounded-full"
                                    />
                                ))}
                            </div>
                            <p className="text-sm md:text-md text-left text-gray-300">
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
