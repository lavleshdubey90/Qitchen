import React from 'react';
import Image from 'next/image';
import LeftPin from "@/public/left_pin.png";
import RightPin from "@/public/right_pin.png";

interface HeadingProps {
    heading: string;
    small?: boolean;
}

const Heading: React.FC<HeadingProps> = (props) => {
    return (
        <div className="heading text-center flex gap-x-2 justify-center items-center mx-auto">
            <Image alt='pin' unoptimized src={LeftPin} width={50} height={50} className='w-10 h-full sm:w-12' />
            <h3 className={`uppercase ${props.small?"text-2xl":"text-3xl"} tracking-wider`}>{props.heading}</h3>
            <Image alt='pin' unoptimized src={RightPin} width={50} height={50} className='w-10 h-full sm:w-12' />
        </div>
    )
}

export default Heading;