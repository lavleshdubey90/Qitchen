"use client";
import React from 'react';
import Image from 'next/image';
import Background from "@/public/pages_bg.png";
import Sidebar from '../components/Sidebar';
import MenuBg from "@/public/menu_page_bg.png";
import Menulist from '../components/Menulist';

import { maki, uramaki, specialRolls } from '../data/data';
import Heading from '../components/Heading';

const Menupage: React.FC = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='w-full xl:h-screen relative text-theme'>

      <div className=''>
        <Image alt='background' src={Background} width={500} height={500} className='h-full w-full object-cover absolute z-10' />
      </div>

      <div className='h-full w-full absolute z-10 bg-[#0a0b0a]/90'></div>

      <div className='flex flex-1 flex-col xl:flex-row gap-5 justify-between p-3 sm:p-5 h-full'>

        <Sidebar image={MenuBg} heading={"Menu"} />

        {/* I want to make this scrollable */}
        <div className='xl:w-1/2 xl:overflow-y-scroll'>
          <div className='pb-20 rounded-2xl border border-theme/15 z-20 relative'>

            <div className='mt-12 flex gap-x-[10px] justify-center'>
              <span className='label' onClick={() => scrollToSection('maki')}>Maki</span>
              <span className='label' onClick={() => scrollToSection('uramaki')}>Uramaki</span>
              <span className='label' onClick={() => scrollToSection('specialRolls')}>special Rolls</span>
            </div>

            <div className='menu-wrapper mt-16 max-w-screen-lg mx-auto'>

              <div id='maki'>
                <div className="heading text-center flex gap-x-2 justify-center items-center w-full">
                  <Heading heading='Maki'/>
                </div>
                <div className='mt-12 px-5 sm:px-12 2xl:px-24'>
                  <div className='space-y-8'>
                    {
                      maki.map((item, index) => (

                        <Menulist key={index} price={item.price} description={item.description} leaf={item.leaf} image={item.image} alt={item.alt} name={item.name} />
                      ))
                    }
                  </div>
                </div>
              </div>


              <div id='uramaki' className='mt-24'>
                <div className="heading text-center flex gap-x-2 justify-center items-center w-full">
                <Heading heading='Uramaki'/>
                </div>
                <div className='mt-12 px-5 sm:px-12 2xl:px-24'>
                  <div className='space-y-8'>
                    {
                      uramaki.map((item, index) => (

                        <Menulist key={index} price={item.price} description={item.description} leaf={item.leaf} image={item.image} alt={item.alt} name={item.name} />
                      ))
                    }
                  </div>
                </div>
              </div>


              <div id='specialRolls' className='mt-24'>
                <div className="heading text-center flex gap-x-2 justify-center items-center w-full">
                <Heading heading='Special Rolls'/>
                </div>
                <div className='mt-12 px-5 sm:px-12 2xl:px-24'>
                  <div className='space-y-8'>
                    {
                      specialRolls.map((item, index) => (

                        <Menulist key={index} price={item.price} description={item.description} leaf={item.leaf} image={item.image} alt={item.alt} name={item.name} />
                      ))
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Menupage;