import '../assets/sass/_cardSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";



// Componente Card
import Card from './card';

function CardSlider() {
  return (
    <section className="section">
      <section className="section">

        <div className="card-wrapper">
          <Swiper className='swiper-wraper'
            modules={[Navigation]}
            spaceBetween={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              420: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1440: { slidesPerView: 6 },
            }}
          >
            {/* Renderizamos múltiples Card con SwiperSlide */}
            {[...Array(10)].map((_, index) => (
              <SwiperSlide className='swiper-slide' key={index}>
                <Card />
              </SwiperSlide>
            ))}
            <BsArrowLeftCircleFill className="swiper-button-prev" size={40} />
            <BsArrowRightCircleFill className="swiper-button-next" size={40} />
          </Swiper>
        </div>  
      </section>
    </section>
  );
}

export default CardSlider;