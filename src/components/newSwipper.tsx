import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "@/assets/sass/_new-swiper.scss";
import { Container } from "react-bootstrap";

import pumaLogo from "@/assets/img/sponsors/pumaLogo.svg";
import converseLogo from "@/assets/img/sponsors/converseLogo.svg";
import diadoraLogo from "@/assets/img/sponsors/diadoraLogo.svg";
import dunlopLogo from "@/assets/img/sponsors/dunlopLogo.svg";
import hushPuppies from "@/assets/img/sponsors/hushPuppies.png";
import jordanAir from "@/assets/img/sponsors/jordanAir.svg";
import nikeLogo from "@/assets/img/sponsors/nikeLogo.svg";
import leCoqLogo from "@/assets/img/sponsors/leCoqLogo.svg";
import vansLogo from "@/assets/img/sponsors/vansLogo.svg";

const sponsors = [
  pumaLogo,
  converseLogo,
  diadoraLogo,
  dunlopLogo,
  hushPuppies,
  jordanAir,
  nikeLogo,
  leCoqLogo,
  vansLogo,
];

function NewSwiper() {
  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-header">
        <div className="sponsors-icon">🏅</div>
        <h2 className="sponsors-title">SPONSORS</h2>
        <p className="sponsors-subtitle">Marcas que definen nuestro estilo.</p>
      </div>
      <Container>
        <Swiper
          modules={[EffectCube, Autoplay]}
          effect="cube"
          grabCursor={true}
          loop={false}
          speed={800}
          cubeEffect={{
            shadow: true,
            slideShadows: false,
            shadowOffset: 95,
            shadowScale: 0.8,
          }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          className="swiper"
        >
          <div className="swiper-wrapper">
            {sponsors.map((logo, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <img src={logo} alt={`sponsor-${index}`} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </section>
  );
}
export default NewSwiper;
