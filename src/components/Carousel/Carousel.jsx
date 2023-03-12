import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import './swiper-overrides.css';
import Card from '../Card/Card';

function Carousel({ deck, currentSlide, results }) {
  const slideDelay = 800;

  useEffect(() => {
    setTimeout(() => {
      const { swiper } = document.querySelector('.swiper');
      swiper.slideTo(currentSlide);
    }, slideDelay);
  }, [currentSlide]);

  return (
    <Swiper
      className="swiper"
      spaceBetween={40}
      centeredSlides
      slideToClickedSlide
      speed={600}
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
      {deck.map((letter, index) => (
        <SwiperSlide key={letter.id}>
          <div className="swiper-slide-transform">
            <Card letter={letter} isCorrect={results[index].isAnswerCorrect} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
