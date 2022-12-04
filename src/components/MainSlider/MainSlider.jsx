import c from './MainSlider.module.css';
import iphone from '../../assets/images/iphonewebp.webp';
import bosch from '../../assets/images/bosch.webp';
import hp from '../../assets/images/hp.webp';
import tefal from '../../assets/images/tefal.webp';
import philips from '../../assets/images/philps.webp';
import samsung from '../../assets/images/samung.webp';
import lg from '../../assets/images/lg.webp';
import oppo from '../../assets/images/oppo.webp';
import vivo from '../../assets/images/vivo.webp';
import mi from '../../assets/images/mi.webp';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const MainSlider = () => {
  const [sliderPosition, setSliderposition] = useState(0);
  const leftSlider = () => {
    if (sliderPosition < 0) setSliderposition(sliderPosition + 1);
  };
  const rightSlider = () => {
    if (sliderPosition > -2) setSliderposition(sliderPosition - 1);
  };
  return (
    <div className={c.mainSlider}>
      <button onClick={leftSlider} className={c.leftBtn}>
        <AiOutlineLeft />
      </button>
      <div
        style={{ left: `${sliderPosition * 250}px` }}
        className={c.mainSliderWrap}
      >
        <div className={c.mainSliderItem}>
          <img src={iphone} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={bosch} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={hp} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={tefal} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={philips} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={samsung} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={lg} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={oppo} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={vivo} alt="" />
        </div>
        <div className={c.mainSliderItem}>
          <img src={mi} alt="" />
        </div>
      </div>
      <button onClick={rightSlider} className={c.rigthBtn}>
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default MainSlider;
