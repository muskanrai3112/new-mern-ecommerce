import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./homeCatSlider.scss";
import { Navigation, Autoplay } from "swiper/modules";


const HomeCatSlider = () => {
  return (
    <>
      <div className="category">
       <div className="container">
       <Swiper
          slidesPerView={8}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="category__product">
              <img
                className="category__img"
                src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                alt="fashionImg"
              />
              <h4 className="category__title">Fashion</h4>
            </div>
          </SwiperSlide>
        
       
        
          
        </Swiper>
       </div>
      </div>
    </>
  );
};

export default HomeCatSlider;
