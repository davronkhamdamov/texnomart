import c from './HeroSlider.module.css';
import sliderImages from '../../json/slider.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const HeroSlider = () => {
  const [imgPosition, setImgPosition] = useState(0);
  const incriment = () => {
    imgPosition > 0
      ? setImgPosition(imgPosition - 1)
      : setImgPosition(sliderImages.length - 1);
  };
  const decriment = () => {
    imgPosition < sliderImages.length - 1
      ? setImgPosition(imgPosition + 1)
      : setImgPosition(0);
  };
  return (
    <div className={c.sliderWapper}>
      <button onClick={incriment} className={c.leftBtn}>
        <AiOutlineLeft />
      </button>
      <img
        className={`${c.sliderImg}`}
        src={sliderImages[imgPosition].img}
        alt=""
      />
      <button onClick={decriment} className={c.rigthBtn}>
        <AiOutlineRight />
      </button>
      <div className={c.dots}>
        {Array(6)
          .fill('#')
          .map((e, i) => {
            return (
              <div
                key={uuidv4()}
                onClick={() => {
                  setImgPosition(i);
                }}
                style={{
                  background: imgPosition === i ? 'transparent' : '#000',
                }}
                className={c.imgDots}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default HeroSlider;
