import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className='front py-[50px] md:py-[100px] px-4 bg-zinc-200'>
            <Swiper 
         slidesPerView={3.5}
         spaceBetween={5}  
         
           
         keyboard={{
          enabled: true,
         }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper h-[25vh] md:h-[50vh] "
      >
        <SwiperSlide className='  border border-l-black p-2 '>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2  '>
          <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
          <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2'> 
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2'>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2'>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2'>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2'>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black p-2'>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
        <SwiperSlide className='  border border-l-black border-r-black p-2'>
        <h1 className='font-bold underline text-[15px] md:text-[20px]'>Veronica</h1>
        <br/><p className='text-[10px] md:text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed iste sit amet consectetur adipisicing elit. Quasi sed iste assumenda.</p>
        </SwiperSlide>
      </Swiper>

       

    </div>
  )
}

export default Slider