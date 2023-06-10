import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { testimonial } from '../data';

const TestimonialSlider = () => {
  return (
    <Swiper
      className='testimonialSlider'
      navigation={true}
      autoplay={true}
      modules={[Navigation, Autoplay]}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className='d-flex flex-column text-center'>
              <div className='d-flex align-items-center px-5 mb-5'>
                <img src={avatar.type} alt='' />
                <div className='px-2'>
                  <div className='fw-bolder'>{name}</div>
                  <div className='text-secondary'>{occupation}</div>
                </div>
              </div>
              <div className='fw-bold'>{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
