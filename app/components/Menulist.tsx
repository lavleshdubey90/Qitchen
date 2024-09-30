import React from 'react';
import Image from 'next/image';
import leaf from "@/public/leaf.png";

interface MenulistProps {
    image: string;
    price: string;
    description: string;
    alt: string;
    name: string;
    leaf: boolean;
}

const Menulist: React.FC<MenulistProps> = (props) => {
    return (
        <div className='flex flex-col sm:flex-row gap-x-6 gap-y-3 w-full'>
            <Image src={props.image} height={100} width={150} alt={props.alt} className='w-full sm:w-[150px] sm:h-[100px] rounded-lg' />
            <div className='w-full text-xl flex flex-col gap-y-1 justify-center'>
                <div className='flex items-baseline gap-x-4'>
                    <h3 className='uppercase tracking-wide'>{props.name}</h3>
                    {props.leaf && <Image src={leaf} unoptimized width={16} height={16} alt='Leaf' className='-ml-1'/>}
                    <div className='flex flex-1 h-0 border border-dashed border-theme/15' />
                    <h5>{props.price}</h5>
                </div>
                <p className='text-sm text-theme/70'>{props.description}</p>
            </div>
        </div>
    )
}

export default Menulist;