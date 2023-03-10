import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import './swiper-overrides.css';
import Card from '../Card/Card';

function Carousel({ deck }) {
  return (
    <Swiper
      className="swiper"
      spaceBetween={40}
      centeredSlides
      slideToClickedSlide
      slidesPerView={1.5}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 4.5,
        },
      }}
    >
      {deck.map((letter) => (
        <SwiperSlide key={letter.id}>
          <div className="swiper-slide-transform">
            <Card letter={letter} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
