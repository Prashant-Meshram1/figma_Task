import React from 'react';
import mango from "../Images/mango.jpeg";
import coconut_oil from "../Images/coconut_oil.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const Body_Carousal = () => {
    return (
        <div className="relative top-[-145px] py-4 ml-[80px]">
            <Swiper
                modules={[Scrollbar, A11y, Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>CHINNAMON HONEY</h2>
                        <p className='text-black'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={coconut_oil}
                            alt="Slide 1"
                            className='object-cover rounded ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>COCONUT OIL</h2>
                        <p className='text-black'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded1 ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>MANGO HONCY</h2>
                        <p className='text-black'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded1 ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>HONEY HABANERO</h2>
                        <p className='text-black'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded1 ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>CHINNAMON HONEY</h2>
                        <p className='text-black'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded1 ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>CHINNAMON HONEY</h2>
                        <p className='text-balck'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded1 ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>CHINNAMON HONEY</h2>
                        <p className='text-balck'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center ">
                        <img
                            src={mango}
                            alt="Slide 1"
                            className='object-cover rounded1 ' // Ensure you have CSS for rounded
                        />
                        <h2 className='text-yellow-500'>CHINNAMON HONEY</h2>
                        <p className='text-white'>$12.00 $19.00</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Body_Carousal;
