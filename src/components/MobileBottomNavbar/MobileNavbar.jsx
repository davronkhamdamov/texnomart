import c from './MobileNavbar.module.css';
import mobileCard from '../../assets/images/mobile-card.svg';
import mobileCampare from '../../assets/images/mobile-compare.svg';
import mobileFavorite from '../../assets/images/mobile-favorite.svg';
import mobileProfil from '../../assets/images/mobile-profil.svg';
import mobileCategory from '../../assets/images/mobile-categorysvg.svg';
const MobileNavbar = ({ loginOpen, shopOpen }) => {
  return (
    <div className={c.mobileNavbar}>
      <div className={c.navbarWrap}>
        <img src={mobileCategory} alt="" />
        <p>Katalog</p>
      </div>
      <div className={c.navbarWrap}>
        <img src={mobileCampare} alt="" />
        <p>Taqqoslash</p>
      </div>
      <div className={c.navbarWrap} onClick={() => shopOpen(true)}>
        <img src={mobileCard} alt="" />
        <p>Savatcha</p>
      </div>
      <div className={c.navbarWrap}>
        <img src={mobileFavorite} alt="" />
        <p>Sevimlilar</p>
      </div>
      <div onClick={() => loginOpen(true)} className={c.navbarWrap}>
        <img src={mobileProfil} alt="" />
        <p>Kirish</p>
      </div>
    </div>
  );
};

export default MobileNavbar;
