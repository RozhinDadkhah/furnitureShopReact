import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import data
import { newInStore } from '../data';

const NewItemsSlider = () => {
    return (
        <Swiper
            grabCursor={true}
            breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            className='mySwiper'
        >
            {newInStore.products.map((product, index) => {
                return (
                    <SwiperSlide className='newitemSlider px-3 w-100' key={index}>
                        <div className='newitemSliderDiv'>
                            <img src={product.image.type} alt='' />
                            <div className='sliderBox text-dark'>
                                {product.name}
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default NewItemsSlider;
