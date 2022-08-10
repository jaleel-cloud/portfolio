import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import Bmi from "../../img/BmiCalci.png"
import chatApp from "../../img/chatApp.png"
import gym from "../../img/gymApp.png"
import hyderabad from "../../img/Hyderabadport.png"
import Music from "../../img/musicApp.png"
import paint from "../../img/simpPaint.png"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import Pulse from 'react-reveal/Pulse';
import "swiper/css"

export const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (

    <div className="portfolio" id='Projects'>
      {/* heading */}
      <Pulse>
      <span style={{ color: darkmode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio  </span>
      </Pulse>

      {/* swiper */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>

        <SwiperSlide>
          <img src={chatApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gym} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hyderabad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bmi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={paint} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
