// Second file: TestimonialSlider.jsx
import React from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Leticia Franzoni',
    position: 'Customer',
    message:
      'Vc nasceu pra iluminar a vida de todos que vc conhece, pq vc é luz na minha vida tb!! Amo vc!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Vanessa Peixoto',
    position: 'Customer',
    message:
      'Parabéns, Mari! Você é luz! O trabalho devolve. O universo devolve.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Vinicius de Andrade',
    position: 'Customer',
    message:
      'Rooi, teachet né? Parabéns! A senhora é uma professora que marca seus alunos. Gratidão por tudo!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px] w-full'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-4 md:px-16 py-6'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 mb-6 md:mb-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  {/* <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt={person.name} />
                  </div> */}
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 px-4'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;