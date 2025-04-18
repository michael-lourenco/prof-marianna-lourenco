import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 lg:h-full relative'>
      {/* text */}
      <div className='w-full h-full'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mx-auto md:mx-0 w-[200px] h-[112px] md:w-[341px] md:h-[157px]'
          >
            <Image
              src={'/marianna_titulo.png'}
              width={341} 
              height={157}
              alt='Marianna Lourenço'
              className='w-full h-full'
              priority
            />
          </motion.div>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            PROFESSORA E PALESTRANTE
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full lg:w-[1200px] h-full absolute right-0 bottom-0'>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[250px] max-h-[230px] lg:max-w-[737px] lg:max-h-[678px] absolute -bottom-10 right-1/2 transform translate-x-1/2 lg:-bottom-32 lg:right-[8%] lg:transform-none'
        >
          <Avatar width={737} height={678} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;