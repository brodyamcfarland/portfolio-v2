import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            className='rounded-full border border-gray-500 object-cover object-center h-20 w-20 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale duration-500 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-70 duration-500 ease-in-out group-hover:bg-white h-20 w-20 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg font-bold text-black opacity-100'>Typescript</p>
            </div>
        </div>
    </div>
  )
}

export default Skill