import React from 'react';
import Image from 'next/image';
import Sidebar from '@/app/components/Sidebar';
import Background from "@/public/pages_bg.png";
import LeftPin from "@/public/left_pin.png";
import RightPin from "@/public/right_pin.png";
import { blogPosts, BlogPost } from '../data';
import Heading from '@/app/components/Heading';
import Template from '@/app/template';

interface BlogProps {
  params: {
    id: string;
  };
}

const Blog: React.FC<BlogProps> = ({ params }) => {

  const blog: BlogPost | undefined = blogPosts.find((post) => post.id === params.id);

  if (blog === undefined) {
    return <div>Blog post not found</div>;
  }

  return (
    <Template>


      <section className='w-full xl:h-screen relative text-theme'>
        <div className=''>
          <Image alt='background' src={Background} width={1000} height={1000} className='h-full w-full object-cover absolute z-10' />
        </div>

        <div className='h-full w-full absolute z-10 bg-[#0a0b0a]/90' />

        <div className='flex flex-1 flex-col xl:flex-row gap-4 justify-between p-3 sm:p-5 h-full'>
          <Sidebar image={blog.pageImage} heading='' />

          <div className='xl:w-1/2 xl:overflow-y-scroll'>
            <div className='pb-20 rounded-2xl border border-theme/15 z-20 relative px-5 sm:px-16 2xl:px-24 py-8 sm:py-12 2xl:py-20'>

              <div className="heading text-center flex gap-x-2 justify-center items-center mx-auto">
                <Image alt='pin' unoptimized src={LeftPin} width={50} height={50} className='w-10 h-full sm:w-12' />
                <span className={`uppercase text-xs tracking-wider`}>{blog.date}</span>
                <Image alt='pin' unoptimized src={RightPin} width={50} height={50} className='w-10 h-full sm:w-12' />
              </div>

              <h1 className='text-3xl md:text-[64px] uppercase py-4 leading-[1.2] text-center'>{blog.title}</h1>

              <div className="pins flex items-center justify-center">
                <Image alt='pin' unoptimized src={LeftPin} width={50} height={50} className='w-10 h-full sm:w-12' />
                <Image alt='pin' unoptimized src={RightPin} width={50} height={50} className='w-10 h-full sm:w-12' />
              </div>

              <div className='mt-10 md:mt-20 max-w-screen-md mx-auto xl:w-full space-y-12 text-para/70 font-light leading-7'>

                <div className='space-y-4'>
                  <h2 className='text-2xl md:text-3xl uppercase text-theme'>Unveiling Culinary Artistry: A Journey into Qitchen's Soul</h2>
                  <p>In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.</p>
                </div>

                <div className='space-y-4'>
                  <h2 className='text-2xl md:text-3xl uppercase text-theme'>Crafting a Feast for the Senses</h2>
                  <p>The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.</p>
                  <p>The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.</p>
                </div>

                <div className='space-y-4'>
                  <h2 className='text-2xl md:text-3xl uppercase text-theme'>Beyond Sushi: Nurturing Connections</h2>
                  <p>While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.</p>
                  <p>The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Template>
  )
}

export default Blog;