import React from 'react';
import { motion } from 'framer-motion';

type Props = {}
    
const ExperienceCard = (props: Props) => {

    const image = '/Turnt.PNG';

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#ffffff0c] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            src={image}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.3 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>Auction Operations Admin</h4>
            <p className='font-bold text-lg mt-1'>ServiceLink Auction</p>
            <p className='uppercase py-5 text-gray-300 text-sm'>2019 - Present</p>
            <ul className='list-disc space-y-4 ml-5 text-md'>
                <li>Utilize Dataloader (Open Source Application for Salesforce) to make mass updates to inventory.</li>
                <li>Actively Manage Live Auctions to sell properties as close to the Seller's set reserve price.</li>
                <li>Create custom reporting logic to meet Sellers' requests</li>
                <li>Created Universal Contracts for all Sellers to improve buyer experience.</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard