// First file: Testimonials.jsx
import React from 'react';
import TestimonialSlider from '../../components/TestimonialSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='bg-primary/30 text-center lg:h-full'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        <div className="flex flex-col items-center">
          {/* title */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-8 xl:mb-0'
          >
            A <span className='text-accent'>VOZ</span> DOS PARTICIPANTES.
          </motion.h2>
          {/* slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;