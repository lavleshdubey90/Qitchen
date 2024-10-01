"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Sidebar from '../components/Sidebar';
import ContactBg from "@/public/contact_page_bg.png";
import Background from "@/public/pages_bg.png";
import Heading from '../components/Heading';
import Instagram1 from "@/public/instagram_card_1.png";
import Instagram2 from "@/public/instagram_card_2.png";
import Instagram3 from "@/public/instagram_card_3.png";
import Instagram4 from "@/public/instagram_card_4.png";
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false }); // Dynamic import

const Contact: React.FC = () => {

    const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const instagramImages: StaticImageData[] = [Instagram1, Instagram2, Instagram3, Instagram4];

    const latitude: number = 50.088277665909956;
    const longitude: number = 14.416662557470637;

    const zoom: number = 15;

    return (
        <section className='w-full xl:h-screen relative text-theme'>
            <div className=''>
                <Image alt='background' src={Background} width={1000} height={1000} className='h-full w-full object-cover absolute z-10' />
            </div>

            <div className='h-full w-full absolute z-10 bg-[#0a0b0a]/90' />

            <div className='flex flex-1 flex-col xl:flex-row gap-4 justify-between p-3 sm:p-5 h-full'>
                <Sidebar image={ContactBg} heading={"Contact"} />

                <div className='xl:w-1/2 grid grid-rows-2 sm:grid-rows-2 gap-4 relative z-20 rounded-2xl p-0'>

                    <div className='topBox flex flex-col sm:flex-row flex-1 gap-4'>
                        <div className='sm:w-1/2 overflow-auto border-theme/15 border rounded-2xl flex flex-col justify-between h-full p-8 2xl:p-12'>
                            <div className=''>
                                <Heading heading='Opening Hours' small />
                            </div>
                            <div className='mt-auto'>
                                {days.map((day: string, index: number) => (
                                    <div key={index} className='flex items-baseline gap-4 space-y-4 font-light text-sm 2xl:text-base'>
                                        {day} <div className='flex flex-1 h-0 border border-dashed border-theme/15' /> <span>16:00 - 22:30</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='sm:w-1/2 rounded-2xl h-full grid grid-cols-2 grid-rows-2 gap-4'>
                            {
                                instagramImages.map((image: StaticImageData, index: number) => (
                                    <div key={index} className='rounded-2xl'>
                                        <Image src={image} width={500} height={500} alt='Instagram' className='w-full h-full object-cover object-center rounded-2xl' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='topBox flex flex-col-reverse sm:flex-row gap-4'>
                        <div className='sm:w-1/2 rounded-2xl w-full h-full relative'>
                            <Map latitude={latitude} longitude={longitude} zoom={zoom} />
                            <Link href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`} target="_blank">
                                <h5
                                    className='bg-black gap-x-2 flex items-center tracking-widest -bottom-2 p-2 px-4 absolute z-50 -right-2 rounded-lg text-theme uppercase'>Show Route
                                    <span className='rounded-full p-2 border border-theme grid place-content-center '>
                                        <GoArrowRight />
                                    </span>
                                </h5>
                            </Link>
                        </div>
                        <div className='sm:w-1/2 sm:overflow-auto border-theme/15 border rounded-2xl flex flex-col justify-between h-full p-8 2xl:p-12'>
                            <div className=''>
                                <Heading heading='Get In Touch' small />
                            </div>
                            <div className='mt-5 flex flex-col gap-6 text-sm 2xl:text-base'>
                                <div className='flex justify-between'>
                                    <span className='opacity-80 tracking-wide text-sm font-medium uppercase'>Address</span>
                                    <span className='font-light'>23 Greenfield Avenue, <br />
                                        Prague 120 00</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='opacity-80 tracking-wide text-sm font-medium uppercase'>Phone</span>
                                    <span className='font-light'>+42 1234 567890</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='opacity-80 tracking-wide text-sm font-medium uppercase'>Email</span>
                                    <span className='font-light'>hello@example.com</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='opacity-80 tracking-wide text-sm font-medium uppercase'>Follow</span>
                                    <span className='font-light'>hello@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;