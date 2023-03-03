import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/index.css";

import { FreeMode, Thumbs } from "swiper";

export default function ImageSwiper({ item }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt={name} src={`http://localhost:1337${url}`} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
