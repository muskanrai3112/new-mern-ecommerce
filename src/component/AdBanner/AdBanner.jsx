import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./homeCatSlider.scss";
import { Navigation, Autoplay } from "swiper/modules";
import "./AdBanner.scss"

const AdBanner = () => {
  return (
    <>
      <div className="adBanner">
        <div className="container">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="adBanner__imgBox">
                <img
                  className="adBanner__img"

                  src="https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"
                  alt="fashionImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div  className="adBanner__imgBox">
                <img
                  className="adBanner__img"
                  src="https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"
                  alt="fashionImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="adBanner__imgBox">
                <img
                  className="adBanner__img"
                  src="https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp"
                  alt="fashionImg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="adBanner__imgBox">
                <img
                  className="adBanner__img"
                  src="https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp"
                  alt="fashionImg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AdBanner;
