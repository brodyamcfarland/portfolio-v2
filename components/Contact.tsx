import React, { useRef } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

type Props = {}

const Contact = (props: Props) => {
    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
        const publicKey =  process.env.NEXT_PUBLIC_PUBLIC_KEY!;
        emailjs.sendForm(serviceID, templateID, form.current!, publicKey)
            .then((result) => {
                toast.success(`Email has been successfully sent.`);
            }, (error) => {
                toast.error(`Error: ${error.text}`)
            });
        e.target.reset();
      };

  return (
    <div className='h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[12px] text-gray-400 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-xl font-semibold text-center'>
                Feel free to reach out using the {""}
                <span className='underline decoration-emerald-500/50'>methods below.</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='text-emerald-600 h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>(805) 551-3036</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='text-emerald-600 h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>brodyamcfarland@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <MapPinIcon className='text-emerald-600 h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>Simi Valley, CA, 93065</p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto' >
                <div className='flex space-x-2'>
                    <input name='name' placeholder='Name' className='contactInput' type="text" />
                    <input name='email' placeholder='Email' className='contactInput' type="email" />
                </div>
                <input name='subject' placeholder='Subject' className='contactInput' type="text" />
                <textarea name='message' placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#0e8882] py-5 px-10 rounded-md font-semibold text-lg opacity-70 hover:opacity-100 duration-500'>Submit</button>
            </form>
        </div>
     </div>
  )
}

export default Contact