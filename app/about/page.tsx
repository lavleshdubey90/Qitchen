import React from 'react';
import Image, { StaticImageData } from 'next/image';
import AboutBg from "@/public/about_page_bg.png";
import Background from "@/public/pages_bg.png";
import Sidebar from '../components/Sidebar';
import Carousal from '../components/Carousal';
import Stars from "@/public/stars.png";

import CarousalF1 from "@/public/carousal_1_img_1.png";
import CarousalF2 from "@/public/carousal_1_img_2.png";
import CarousalF3 from "@/public/carousal_1_img_3.png";

import CarousalS1 from "@/public/carousal_2_img_1.png";
import CarousalS2 from "@/public/carousal_2_img_2.png";
import CarousalS3 from "@/public/carousal_2_img_3.png";
import Heading from '../components/Heading';


const About: React.FC = () => {

  const firstCarousalImages: Array<StaticImageData> = [CarousalF1, CarousalF2, CarousalF3];
  const secondCarousalImages: Array<StaticImageData> = [CarousalS1, CarousalS2, CarousalS3];

  return (
    <section className='w-full xl:h-screen relative text-theme'>
      <div className=''>
        <Image alt='background' src={Background} width={1000} height={1000} unoptimized className='h-full w-full object-cover absolute z-10' />
      </div>

      <div className='h-full w-full absolute z-10 bg-[#0a0b0a]/90'></div>

      <div className='flex flex-1 flex-col xl:flex-row gap-4 justify-between p-3 sm:p-5 h-full'>
        <Sidebar image={AboutBg} heading={"About"} />

        <div className='xl:w-1/2 flex flex-col justify-between gap-4 relative z-20 rounded-2xl p-0'>

          <div className='sm:max-h-[330px] xl:max-h-full 2xl:h-2/5 overflow-hidden w-full flex flex-col sm:flex-row gap-4'>
            <div className='border border-theme/15 rounded-2xl 2xl:h-full sm:w-1/2 sm:relative' >
              <h3 className='text-3xl uppercase tracking-wide p-8 sm:p-0 sm:absolute top-8 left-8 2xl:top-12 2xl:left-12 leading-10'>Sushi Artistry <br /> Redefined </h3>
              <p className='xl:text-sm 2xl:text-base font-light p-8 sm:p-0 sm:absolute bottom-8 sm:mx-8 2xl:bottom-12 2xl:mx-12'>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
            </div>
            <div className='sm:w-1/2 xl:h-full overflow-hidden rounded-2xl'>
              <Carousal images={firstCarousalImages} />
            </div>
          </div>

          <div className='h-1/5 w-full'>
            <div className='w-full flex flex-col sm:flex-row h-full gap-4'>
              <div className='text-center grid place-content-center w-full p-3 sm:p-8 border-theme/15 border rounded-2xl'>
                <div>
                  <Image src={Stars} width={100} height={100} unoptimized className='w-24 mx-auto' alt='Stars' />
                  <h4 className='text-2xl uppercase tracking-wide mt-2'>Trip Advisor</h4>
                  <p className='uppercase text-xs text-theme/70 mt-2 !tracking-wide'>Best Sushi</p>
                </div>
              </div>
              <div className='text-center grid place-content-center w-full p-3 sm:p-8 border-theme/15 border rounded-2xl'>
                <div>
                  <Image src={Stars} width={100} height={100} unoptimized className='w-24 mx-auto' alt='Stars' />
                  <h4 className='text-2xl uppercase tracking-wide mt-2'>Michelin Guide</h4>
                  <p className='uppercase text-xs text-theme/70 mt-2 !tracking-wide'>Quality Food</p>
                </div>
              </div>
              <div className='text-center grid place-content-center w-full p-3 sm:p-8 border-theme/15 border rounded-2xl'>
                <div>
                  <Image src={Stars} width={100} height={100} unoptimized className='w-24 mx-auto' alt='Stars' />
                  <h4 className='text-2xl uppercase tracking-wide mt-2'>Start Dining</h4>
                  <p className='uppercase text-xs text-theme/70 mt-2 !tracking-wide'>Cool vibe</p>
                </div>
              </div>
            </div>
          </div>

          <div className='sm:max-h-[330px] xl:max-h-full 2xl:h-2/5 overflow-hidden w-full flex flex-col-reverse sm:flex-row gap-4'>
            <div className='sm:w-1/2 xl:h-full overflow-hidden rounded-2xl'>
              <Carousal images={secondCarousalImages} />
            </div>
            <div className='border border-theme/15 rounded-2xl 2xl:h-full sm:w-1/2 sm:relative' >
              <h3 className='text-3xl p-8 sm:p-0 sm:absolute uppercase tracking-wide mx-auto leading-10 w-full top-8 2xl:top-12'>
                <Heading heading='Our Story'/>
              </h3>
              <p className='xl:text-sm 2xl:text-base font-light p-8 sm:p-0 sm:absolute bottom-5 md:bottom-8 2xl:bottom-12 sm:mx-5 md:mx-8 2xl:mx-12'>Founded with a passion for culinary excellence, Qitchen&apos;s journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for it&apos;s artful mastery and devotion to redefining gastronomy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;