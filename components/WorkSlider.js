// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Projeto 1',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


import { useState } from "react"
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog"
import { Button } from "../components/ui/button"
// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const openModal = (item) => {
    console.log('ITEM' , item)
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                    onClick={() => openModal(image)}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#f3dcaf] to-[#bd6905] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
      <Dialog open={isModalOpen} onOpenChange={closeModal} className="z-index-1000">
      <DialogContent className="sm:max-w-[425px] z-index-1000">
        <DialogHeader>
          <DialogTitle>{selectedItem?.title }</DialogTitle>
          <DialogDescription className="text-justify text-[#e0e0e0]"><Image src={selectedItem?.path} width={500} height={300} alt='' /></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {/* <Button onClick={closeModal}>
            <RxCross2 className="mr-2 h-4 w-4" /> Close
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>

);
};

export default WorkSlider;
