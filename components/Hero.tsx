import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../types";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Brody McFarland",
            "Full-Stack",
            "Smart Contracts",
            "Databases",
            "React",
        ],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <div className="h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden select-none">
            <BackgroundCircles />
            <Image
                className="relative rounded-full mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt="brody-mcfarland"
                width={100}
                height={100}
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[5px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-xl lg:text-2xl font-semibold px-10 pt-5">
                    <span className="text-emerald-400">{text}</span>
                    <Cursor cursorColor="#0e8882" />
                </h1>
                <div className="pt-16">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
