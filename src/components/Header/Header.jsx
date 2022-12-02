import c from './Header.module.css';
import location from '../../assets/images/location.svg';
import world from '../../assets/images/world.svg';
import dawn from '../../assets/images/dawn.svg';
import texnomartLogo from '../../assets/images/texnomart-logo.svg';
import { useState } from 'react';
import searchIcon from '../../assets/images/search.svg';
import voiceicon from '../../assets/images/voice.svg';
import orderIcon from '../../assets/images/order.svg';
import loginIcon from '../../assets/images/login.svg';
import taqqoslaIcon from '../../assets/images/taqqoslash.svg';
import sevimliIcon from '../../assets/images/sevimlilar.svg';
import shopIcon from '../../assets/images/shop.svg';
import Shop from '../shop/Shop';
import { Container } from '../../utils/index';
import Login from '../Login/Login';
import HeaderCategory from '../HeaderCategory/HeaderCategory';
const Header = () => {
  const initianalRegionValue = 'Toshkent';
  const initianalValue = 'Barcha kategoriyalar';
  const [changeLanguagevalue, setChangeLanguageValue] = useState("O'Z");
  const [shopOpen, setShopOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [changeRegionValue, setChangeRegionValue] =
    useState(initianalRegionValue);
  const [changeSelect, setChangeSelect] = useState(initianalValue);
  const changeValue = (e) => {
    setChangeSelect(e.target.textContent);
  };
  const changeRegion = (e) => {
    setChangeRegionValue(e.target.textContent);
  };
  const changelanguage = (e) => {
    setChangeLanguageValue(e.target.textContent);
  };
  const ShopOpenfunc = () => {
    setShopOpen(true);
  };
  const loginOpenfunc = () => {
    setLoginOpen(true);
  };
  return (
    <header>
      <div className={c.headerWrapper}>
        <div className={c.headerHero}>
          <div className={c.location}>
            <img src={location} alt="" />
            <p className={c.locationTitle}> {changeRegionValue}</p>
            <ul className={c.locationModalItem}>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Toshkent</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Toshkent viloyati</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Buxoro viloyati</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Farg'ona viloyati</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Andijon viloyati</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Namangan viloyati</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>Samarqand viloyati</p>
              </li>
            </ul>
          </div>
          <div className={c.HeaderHeroText}>
            <p>Bizning do'konlarimiz</p>
          </div>
          <div className={c.HeaderHerobg}>
            <p>B2B savdosi</p>
          </div>
          <div className={c.HeaderHeroText}>
            <p>Muddatli to'lovga sotib olish</p>
          </div>
          <div className={c.HeaderHeroText}>
            <p>To'lov usullari</p>
          </div>
          <div className={c.HeaderHeroText}>
            <p>Mahsulotlar uchun kafolat</p>
          </div>
        </div>
        <div className={c.contact}>
          <div className={c.contactPhone}>
            <p>Aloqa markazi : </p>
            <span> +99871 209 99 44</span>
          </div>
          <div className={c.langunge}>
            <img src={world} alt="" />
            <p>{changeLanguagevalue}</p>
            <img src={dawn} alt="" />
            <div className={c.langungeModal}>
              <p onClick={(e) => changelanguage(e)}>RU</p>
              <p onClick={(e) => changelanguage(e)}>O'Z</p>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <nav>
          <div className={c.navBar}>
            <img src={texnomartLogo} alt="" />
            <div className={c.navSearchBar}>
              <div className={c.selectBar}>
                <div className={c.optionBar}>
                  <p className={c.selecttext}>{changeSelect}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M4.99978 5.6367C4.92301 5.63715 4.84691 5.62243 4.77584 5.59341C4.70477 5.56438 4.64012 5.5216 4.58562 5.46754L1.08562 1.96754C1.03123 1.91315 0.988083 1.84858 0.958648 1.77752C0.929213 1.70645 0.914063 1.63029 0.914062 1.55337C0.914062 1.47645 0.929213 1.40029 0.958648 1.32923C0.988083 1.25816 1.03123 1.19359 1.08562 1.13921C1.14001 1.08482 1.20457 1.04167 1.27564 1.01224C1.3467 0.982802 1.42286 0.967651 1.49978 0.967651C1.5767 0.967651 1.65287 0.982802 1.72393 1.01224C1.79499 1.04167 1.85956 1.08482 1.91395 1.13921L4.99978 4.23087L8.08562 1.13921C8.19546 1.02936 8.34444 0.967651 8.49978 0.967651C8.65513 0.967651 8.80411 1.02936 8.91395 1.13921C9.02379 1.24905 9.0855 1.39803 9.0855 1.55337C9.0855 1.70871 9.02379 1.85769 8.91395 1.96754L5.41395 5.46754C5.35944 5.5216 5.2948 5.56438 5.22373 5.59341C5.15266 5.62243 5.07655 5.63715 4.99978 5.6367Z"
                    fill="#000"
                  ></path>
                </svg>
                <div className={c.optionlist}>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Barcha kategoriyalar</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Maishiy texnika</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Ofis jihoslari</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Oshxona uchun texnika</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Uy uchun idishlar</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Avtomobil uchun mahsulotlar</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Iqlim texnikasi</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Televizor va telekartalar</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>Telefon va gatjetlar</p>
                  </div>
                </div>
              </div>
              <input type="text" name="" id="" />
              <img className={c.voiceIcon} src={voiceicon} alt="" />
              <button className={c.searchBtn}>
                <img src={searchIcon} alt="" />
              </button>
            </div>
            <div className={c.NavNavigator}>
              <div>
                <img src={orderIcon} alt="" />
                <p>Buyurtma holati</p>
              </div>
              <div onClick={loginOpenfunc}>
                <img src={loginIcon} alt="" />
                <p>Kirish</p>
              </div>
              <div>
                <img src={taqqoslaIcon} alt="" />
                <p>Taqqoslash</p>
              </div>
              <div>
                <img src={sevimliIcon} alt="" />
                <p>Sevimlilar</p>
              </div>
              <div onClick={ShopOpenfunc}>
                <img src={shopIcon} alt="" />
                <p>Savatcha</p>
              </div>
            </div>
          </div>
        </nav>
        <HeaderCategory />
      </Container>
      {shopOpen && <Shop shopOpen={setShopOpen} />}
      {loginOpen && <Login loginOpen={setLoginOpen} />}
    </header>
  );
};

export default Header;
