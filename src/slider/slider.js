import React from 'react'
import "./slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import prop2 from '../img/prop2.jpg'
import prop1 from '../img/prop1.jpg'
import prop3 from '../img/prop3.jpg'
import prop4 from '../img/prop4.jpg'
// import prop5 from '../img/prop5.jpg'


export const Slider = () => {
  return (
    <>

 
  <h1 className='hometitle2'>Browse by property type</h1>
 
    <div className='slider_cnt'>

    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3  }
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div>
      <img alt='prop1' src={prop1} />
      <h3>Hotel</h3>
      <span>1000+ hotel's</span>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
      <img alt='prop2'  src={prop2} />
       <h3>Apartments</h3>
       <span>1000+ apartments</span>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
      <img alt='prop3'  src={prop3} />
       <h3>Resorts</h3>
       <span>1000+ Resorts</span>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
      <img alt='prop4'  src={prop4} />
       <h3>Villas</h3>
       <span>1000+ Villas</span>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
      <img alt='prop2'  src={prop2} />
       <h3>Apartments</h3>
       <span>1000+ apartments</span>
      </div>
      </SwiperSlide>

      
    </Swiper>
    </div>
    </>
  );
}
