import React from 'react';
import Navbar from '../components/Navbar';
import Image, { StaticImageData } from 'next/image';

interface SidebarProps {
    image: StaticImageData;
    heading: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <div className='xl:w-1/2 rounded-2xl min-h-[96vh] lg:h-full relative'>
            <Image width={1000} height={2000} alt='Background' src={props.image} className='w-full h-full absolute z-10 object-cover object-center rounded-2xl' />
            <div className='h-full w-full absolute z-20 bg-gradient-to-b from-transparent to-70% to-black/30 rounded-2xl'>
            </div>

            <Navbar />
            <h1 className='text-6xl sm:text-8xl 2xl:text-9xl absolute left-3 sm:left-10 bottom-3 sm:bottom-10 !leading-[0.9] uppercase z-20'>
                {props.heading.split(' ').length > 1
                    ? <>
                        {props.heading.split(' ')[0]}<br />
                        {props.heading.split(' ').slice(1).join(' ')}
                    </>
                    : props.heading}
            </h1>
        </div>
    )
}

export default Sidebar;