import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// estilos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
}
export default Slider;