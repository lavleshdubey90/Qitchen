"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper as SwiperType } from 'swiper'; // Import Swiper type

interface CarousalProps {
    images: StaticImageData[];
}

const Carousal: React.FC<CarousalProps> = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper:SwiperType) => {
        setCurrentSlide(swiper.activeIndex);
    };

    return (
        <div className='w-full h-full'>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                loop={false}
                className="h-full w-full"
            >

                {props.images.map((image, index) => (
                    <SwiperSlide key={index} className='rounded-2xl'>
                        <Image
                            src={image}
                            width={456}
                            height={377}
                            alt={`Carousal Image ${index}`}
                            className='h-full w-full object-cover object-center rounded-2xl'
                        />
                    </SwiperSlide>
                ))}

                <div 
                    className={`swiper-button-prev left-2 sliderButtons absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                >
                    <IoIosArrowBack className='text-xl' />
                </div>
                <div 
                    className={`swiper-button-next right-2 sliderButtons absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${currentSlide === props.images.length - 1 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                >
                    <IoIosArrowForward className='text-xl' />
                </div>
            </Swiper>
        </div>
    );
}

export default Carousal;
