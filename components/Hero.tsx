import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['Brody McFarland', 'Software Developer', ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Image
            className='relative rounded-full mx-auto object-cover'
            src="/Turnt.PNG"
            alt='brody-mcfarland'
            width={100}
            height={100}
        />
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='' />
        </h1>
    </div>
  )
}

export default Hero;