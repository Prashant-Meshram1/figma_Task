
import React from 'react';
import frontImage from "../Images/frontImage.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Child_body = () => {
    return (
        <div className="bg-slate-800">
            <div className="h-screen relative overflow-hidden">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={frontImage} className="w-full h-full object-cover" alt="Slide 7" />
                    </SwiperSlide>
                </Swiper>

                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-10">
                    <span className='border border-white text-white px-4 py-2 m-2'>Meet Chef Matt</span>
                </div>


            </div>

        </div >
    );
};
