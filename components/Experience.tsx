import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col text-left relative overflow-hidden h-screen md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[12px] text-gray-400 text-2xl'>Experience</h3>

        <div>
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default Experience;