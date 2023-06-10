import React from 'react';

import { testimonial } from '../data';
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className='section container'>
      <div className='container mx-auto'>
        <div className='d-flex flex-coloumn flex-lg-row gap-y-2'>
          <div className='w-50 Testimonial'>
            <h2 className='title mb-5 px-5'>{title}</h2>
            <TestimonialSlider />
          </div>
          <div className='d-none d-lg-block'>
            <img src={image.type} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
