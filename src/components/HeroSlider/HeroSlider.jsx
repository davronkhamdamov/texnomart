import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper';
import c from './HeroSlider.module.css';
const HeroSlider = () => {
  return (
    <>
      <Swiper
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={c.Swiper}
      >
        <SwiperSlide>
          <img
            className={c.img}
            src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/1829711920uz.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={c.img}
            src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2423251920uz.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={c.img}
            src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/1483331920uz.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
