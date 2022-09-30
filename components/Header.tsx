import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../types";

type Props = {
    socials: Social[];
};

const Header = ({ socials }: Props) => {
    return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center gap-2"
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                        className="rounded-full h-7 w-7 hover:border-emerald-200/80 hover:text-emerald-200/40 text-xs hover:shadow-[0_0px_50px_-13px_rgba(0,0,0,0.3)] hover:shadow-emerald-500 duration-500"
                    />
                ))}
            </motion.div>
            <Link href="#contact">
                <motion.div
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="flex flex-row items-center text-gray-300 cursor pointer"
                >
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-xs text-gray-400 pr-4">
                        CONTACT
                    </p>
                </motion.div>
            </Link>
        </header>
    );
};

export default Header;
