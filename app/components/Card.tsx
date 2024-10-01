import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';

interface CardProps {
    image: StaticImageData,
    title: string;
    link: string;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className='rounded-2xl relative opacity-60 hover:opacity-100 duration-300 cursor-pointer'>
            <Link href={props.link}>
            <Image src={props.image} width={1000} height={1000} unoptimized alt='Menu' className='rounded-2xl w-full h-full object-cover' />
            <h5
                className='bg-black gap-x-2 flex items-center tracking-widest -bottom-2 p-2 px-4 absolute -right-2 rounded-lg text-theme uppercase'>{props.title}
                <span className='rounded-full p-2 border border-theme grid place-content-center '>
                    <GoArrowRight />
                </span>
            </h5>
                </Link>
        </div>
    )
}

export default Card;