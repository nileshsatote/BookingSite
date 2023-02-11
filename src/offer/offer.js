import React from "react";
import "./offer.css";
// import air from "../"
import air from "../img/air.png";
import sky from "../img/sky.jpg";

import adventure from "../img/adventure.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Button from '@mui/material/Button';
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const Offer = () => {
  return (
    <>
      <div className="offer_slide">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="swiper_cnt">
              <div className="offer_slide_div">
                <h2 class="ml-5 ">
                  Fly away to your dream <br></br>vacation
                </h2>
                <span class="ml-5">
                  Get inspired - compare and book flight with flexibility
                </span>

                <div className="ml-5 ">
                <Button variant="contained" disableElevation >
                   Find Your Flight
                </Button>
                </div>
              </div>
              <div className="offer_slide_img">
                <img alt="flightpic" src={air} />

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper_cnt">
              <div className="offer_slide_div">
                <h1 class="ml-5 mt-2">
                  Escap for while
                </h1>
                <span class="ml-5">
                 Enjoy the freedom of a monthly stay on
                 BookNow
                </span>

                <div className="ml-5 mt-4">
                <Button variant="contained" disableElevation >
                   Find Your Stay
                </Button>
                </div>
              </div>
              <div className="offer_slide_img">
              <img alt="sky" src={sky} />
                {/* <img alt="flightpic" src={air} /> */}
               
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper_cnt">
              <div className="offer_slide_div">
                <h1 className="ml-5 ">New Year,New adventures</h1><br></br>
                <span class="ml-5 ">
                 Save 15% or more when you book and  staye before april 

                 
                </span>

                <div className="ml-5 ">
                <Button variant="contained" disableElevation >
                   Adventure
                </Button>
                </div>
              </div>
              <div className="offer_slide_img">
              <img alt="adventure" src={adventure} />
        
               
              </div>
            </div>
          </SwiperSlide>

          

          
        </Swiper>
      </div>
    </>
  );
};
