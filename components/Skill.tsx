import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../types";
import { urlFor } from "../sanity";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                src={urlFor(skill?.image).url()}
                className="rounded-full border border-gray-500 object-cover object-center h-20 w-20 xl:h-32 xl:w-32 filter group-hover:grayscale duration-500 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-90 duration-500 ease-in-out group-hover:bg-black h-20 w-20 xl:h-32 xl:w-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-md font-bold text-white opacity-100">
                        {skill?.hoverName}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
