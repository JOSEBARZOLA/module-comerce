import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "@/assets/sass/_new-swiper.scss";
import { Container } from "react-bootstrap";




function NewSwiper() {
  return (
    <Container>
      <Swiper
        modules={[EffectCube, Autoplay]}
        effect="cube"
        grabCursor={true}
        loop={true}
        speed={1000}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2600,
          pauseOnMouseEnter: true,
        }}
        className="swiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/49db1b5f-09f6-4433-be57-51687585600c" />
            <div className="overlay">
              <h1>Walking Tour in Florence</h1>
              <p>
                Discover the fascinating beauty of this historic city by
                strolling through the rich cultural tapestry that makes Florence
                a timeless destination.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847" />
            <div className="overlay">
              <h1>Edinburgh Guided Tour</h1>
              <p>
                Explore the city's majestic castles and fascinating history by
                joining our guided tour for an unforgettable journey through
                Scotland's capital.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158" />
            <div className="overlay">
              <h1>New York Sightseeing Tour</h1>
              <p>
                Experience the energy and excitement of New York City from Times
                Square's dazzling lights to the serene beauty of Central Park.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245" />
            <div className="overlay">
              <h1>Japan Panoramic Tours</h1>
              <p>
                Embark on a magical journey through Tokyo by discovering the
                beauty of the city as cherry blossom trees paint the streets in
                hues of pink.
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </Container>
  );
}
export default NewSwiper;
