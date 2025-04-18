import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderImg from "../../assets/images/sliderImg1.jpg";
import "swiper/css";
import "./homeSlider.scss";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
const HomeSlider = () => {
  return (
    <>
      <div className="swipperSlider">
        <div className="container">
          <Swiper
            navigation={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="sliderSwiper">
              <img className="sliderImg" src={SliderImg} alt="SliderImg" />
            </SwiperSlide>
            <SwiperSlide className="sliderSwiper">
              <img
                className="sliderImg"
                src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg"
                alt="SliderImg"
              />
            </SwiperSlide>
            <SwiperSlide className="sliderSwiper">
              <img
                className="sliderImg"
                src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg"
                alt="SliderImg"
              />
            </SwiperSlide>
            <SwiperSlide className="sliderSwiper">
              <img
                className="sliderImg"
                src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg"
                alt="SliderImg"
              />
            </SwiperSlide>
            <SwiperSlide className="sliderSwiper">
              <img
                className="sliderImg"
                src="https://serviceapi.spicezgold.com/download/1741660777364_NewProject(12).jpg"
                alt="SliderImg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default HomeSlider;
