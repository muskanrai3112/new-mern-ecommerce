import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./homeCatSlider.scss";
import { Navigation, Autoplay } from "swiper/modules";
import "./productSlider.scss";
import ProductItems from "../productItems/ProductItems";

const ProductSlider = () => {
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
              <ProductItems/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
