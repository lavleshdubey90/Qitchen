import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogsBg from "@/public/blogs_page_bg.png";
import Background from "@/public/pages_bg.png";
import Sidebar from '../components/Sidebar';
import Heading from '../components/Heading';

import Leftpin from "@/public/left_pin.png";
import { blogPosts } from './data';

const Blogs = () => {
    return (
        <section className='w-full xl:h-screen relative text-theme'>
            <div className=''>
                <Image alt='background' unoptimized src={Background} width={1000} height={1000} className='h-full w-full object-cover absolute z-10' />
            </div>

            <div className='h-full w-full absolute z-10 bg-[#0a0b0a]/90' />

            <div className='flex flex-1 flex-col xl:flex-row gap-4 justify-between p-3 sm:p-5 h-full'>
                <Sidebar image={BlogsBg} heading={"Blogs"} />

                <div className='xl:w-1/2 xl:overflow-y-scroll'>
                    <div className='pb-20 rounded-2xl border border-theme/15 z-20 relative'>

                        <div className='menu-wrapper mt-16 max-w-screen-lg mx-auto'>

                            <div className="heading text-center flex gap-x-2 justify-center items-center w-full">
                                <Heading heading='Latest News' />
                            </div>
                            <div className='mt-12 px-5 sm:px-8 2xl:px-12'>
                                <div className='space-y-12'>

                                    {blogPosts.map((blog) => (
                                        <div key={blog.id}>
                                            <Link href={`/blogs/${blog.id}`} >
                                                <div className='flex flex-col sm:flex-row gap-8 2xl:gap-12 items-center cursor-pointer group'>
                                                    <div className='sm:w-2/5 h-full overflow-hidden rounded-2xl'>
                                                        <Image src={blog.cardImage} width={500} height={500} unoptimized alt='Image' className='rounded-2xl h-full w-full object-center group-hover:scale-110 ease-in-out duration-500' />
                                                    </div>
                                                    <div className='sm:w-3/5 space-y-2'>
                                                        <span className="uppercase flex items-center text-xs gap-x-2">
                                                            <Image src={Leftpin} width={150} height={20} unoptimized alt='pin' className='w-8' />
                                                            {blog.date}
                                                        </span>
                                                        <h3 className='text-2xl uppercase'>{blog.title}</h3>
                                                        <p className='font-light text-theme/50'>{blog.description}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blogs;