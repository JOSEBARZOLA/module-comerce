import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "@/assets/sass/_swiper-slides.scss";

function CreativeSlide() {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: { shadow: true, translate: ["-120%", 0, -500] },
        next: { shadow: true, translate: ["120%", 0, -500] },
      }}
      pagination={true}
      modules={[EffectCreative]}
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
    </Swiper>
  );
}

export default CreativeSlide;
