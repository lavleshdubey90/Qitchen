import React from "react";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import menuCardBg from "@/public/menu_card_bg.png";
import reservationCardBg from "@/public/reservation_card_bg.png";
import restaurentCardBg from "@/public/restaurent_card_bg.png";

const Homepage: React.FC = () => {

  return (
    <section className='bg-black w-full h-screen text-theme overflow-x-hidden'>
      <div className='flex flex-1 flex-col lg:flex-row gap-5 justify-between p-3 sm:p-5 h-full'>
        <div className='lg:w-[77%] rounded-2xl min-h-[96vh] lg:h-full relative'>
          <div className='h-full w-full absolute z-20 bg-gradient-to-b from-transparent to-70% to-black/50'>
          </div>
          <video className='w-full h-full lg:absolute z-10 object-cover object-center rounded-2xl' autoPlay loop muted>
            <source src="/bg_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Navbar />
          <h1 className='text-6xl sm:text-8xl 2xl:text-9xl absolute left-3 sm:left-10 bottom-3 sm:bottom-10 !leading-[0.8] tracking-wider z-20'>SUSHI <br /> SENSATION</h1>
        </div>

        <div className='lg:w-[23%] lg:min-w-80 h-full rounded-lg grid grid-rows-3 gap-5'>
          <Card link="/menu" title="Menu" image={menuCardBg} />
          <Card link="/reservation" title="Reservation" image={reservationCardBg} />
          <Card link="/about" title="Our Restaurent" image={restaurentCardBg} />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
