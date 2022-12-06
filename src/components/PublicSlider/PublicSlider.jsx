import c from './PublicSlider.module.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';
import phone from '../../assets/images/smartfon.svg';
import cleaner from '../../assets/images/pilesos.svg';
import planshet from '../../assets/images/planshet.svg';
import freeze from '../../assets/images/xolodilnik.svg';
import cool from '../../assets/images/klimaticheskaya-texnika.svg';
import tv from '../../assets/images/lg.svg';
import fen from '../../assets/images/feni.svg';
import washingMechine from '../../assets/images/stiralnaya_mashina.svg';
const PublicSlider = () => {
  const [sPosition, setSPosition] = useState(0);
  const lSlider = () => {
    if (sPosition < 0) setSPosition(sPosition + 1);
  };
  const rSlider = () => {
    if (sPosition > -3) setSPosition(sPosition - 1);
  };
  return (
    <div>
      <p>Ommabop kategoriyalar</p>
      <div className={c.publicSlider}>
        <button onClick={lSlider} className={c.leftBtn}>
          <AiOutlineLeft />
        </button>
        <div
          style={{ left: `${sPosition * 230}px` }}
          className={c.publicSliderWrap}
        >
          <div className={c.publicSliderItem}>
            <img src={phone} alt="" />
            <p>Smartfonlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={cleaner} alt="" />
            <p>Changyutgichlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={planshet} alt="" />
            <p>Planshetlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={freeze} alt="" />
            <p>Muzlatgichlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={cool} alt="" />
            <p>Havo sovitgichlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={tv} alt="" />
            <p>Televizorlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={fen} alt="" />
            <p>Fenlar</p>
          </div>
          <div className={c.publicSliderItem}>
            <img src={washingMechine} alt="" />
            <p>Kir yuvish mashinasi</p>
          </div>
        </div>
        <button onClick={rSlider} className={c.rigthBtn}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default PublicSlider;
