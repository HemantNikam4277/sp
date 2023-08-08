import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Carousel = ({ slides, settings, palydelay, ...rest }) => {
  return (
    <Swiper
      spaceBetween={80}
      style={{
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-width": "10px",
      }}
      autoplay={true}
      // centeredSlides={true}
      // centeredSlidesBounds={true}

      className="mySwiper"
      pagination={{ dynamicBullets: true, clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          pagination: {
            enabled: true,
          },
          spaceBetween: 10,
          autoplay: { delay: palydelay ?? 3000 },
          modules: [Pagination, Autoplay],
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoplay: { delay: palydelay ?? 3000 },
          pagination: {
            enabled: true,
          },
          modules: [Pagination, Autoplay],
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
          pagination: {
            enabled: true,
          },
          modules: [Pagination, Autoplay],
        },
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
