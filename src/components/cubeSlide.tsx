// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";

// Import Swiper styles
import "@/assets/sass/_swiper-slides.scss";

// import required modules

function CubeSlide() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 55,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default CubeSlide;
