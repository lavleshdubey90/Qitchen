"use client";

import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import LeftPin from "@/public/left_pin.png";
import RightPin from "@/public/right_pin.png";
import Link from 'next/link';
import Image from 'next/image';

const Hamburger: React.FC = () => {
    const links: string[] = ["Home", "Menu", "Reservation", "About", "Contact", "Blogs"];
    const [menu, setMenu] = useState<boolean>(false);

    return (
        <div onClick={() => setMenu(true)} className='w-8 sm:w-10 cursor-pointer h-8 sm:h-10 grid place-content-center rounded-md bg-muted border border-theme/15 hover:border-theme/30 duration-300'>
            <div>
                <span className='w-4 sm:w-5 h-[1px] block bg-theme'></span>
                <span className='w-4 sm:w-5 h-[1px] block bg-theme my-1 sm:my-[5px]'></span>
                <span className='w-4 sm:w-5 h-[1px] block bg-theme'></span>
            </div>

            {
                menu && <div className='w-full h-screen bg-pageBackground !z-[80] fixed left-0 top-0 p-5'>
                    <div className='bg-[#111111] h-full w-full relative rounded-2xl grid place-content-center border border-theme/15'>
                        <IoCloseOutline
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent event propagation
                                setMenu(false);
                            }}
                            className='absolute bg-transparent hover:bg-theme/10 cursor-pointer duration-300 top-5 right-5 md:top-10 md:left-10 text-4xl text-theme/50 p-1 rounded-md border border-theme/15 z-50'
                        />
                        <div className="pins flex items-center mb-5 justify-center">
                            <Image alt='pin' unoptimized src={LeftPin} width={50} height={50} className='w-7 md:w-9' />
                            <Image alt='pin' unoptimized src={RightPin} width={50} height={50} className='w-7 md:w-9' />
                        </div>
                        <ul className='space-y-4 text-center'>
                            {
                                links.map((link: string, index: number) => (
                                    <li key={index}>
                                        <h2 className='uppercase text-4xl md:text-6xl 2xl:text-7xl text-theme hover:text-[#cfbe91] duration-500 ease-in-out transition-all'>
                                            {
                                                link === "Home" ?
                                                    <Link href={`/`}>
                                                        {link}
                                                    </Link> :
                                                    <Link href={`/${link.toLowerCase()}`}>
                                                        {link}
                                                    </Link>
                                            }

                                        </h2>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="pins flex items-center mt-5 justify-center">
                            <Image alt='pin' unoptimized src={LeftPin} width={50} height={50} className='w-7 md:w-9' />
                            <Image alt='pin' unoptimized src={RightPin} width={50} height={50} className='w-7 md:w-9' />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Hamburger;
