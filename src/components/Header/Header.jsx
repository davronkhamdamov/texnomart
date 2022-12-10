import c from './Header.module.css';
import location from '../../assets/images/location.svg';
import darklocation from '../../assets/images/darkLocation.svg';
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
import darkphoneIcon from '../../assets/images/headerDarkIcon.svg';
import phoneIcon from '../../assets/images/header-phone.79fbca0.svg';
import Shop from '../shop/Shop';
import { Container } from '../../utils/index';
import Login from '../Login/Login';
import HeaderCategory from '../HeaderCategory/HeaderCategory';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import MobileNavbar from '../MobileBottomNavbar/MobileNavbar';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const initianalRegionValue = 'toshkent';
  const initianalValue = 'allCatagory';
  const [shopOpen, setShopOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [changeRegionValue, setChangeRegionValue] =
    useState(initianalRegionValue);
  const [changeSelect, setChangeSelect] = useState(initianalValue);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [changeLanguagevalue, setChangeLanguageValue] = useState('UZ');
  const data = useSelector((data) => data.data);
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
  const [scrollTopCheck, setScrollTopCheck] = useState(false);
  window.addEventListener('scroll', () => {
    setScrollTopCheck(window.scrollY > 90);
  });
  return (
    <header>
      <div className={c.headerWrapper}>
        <div className={c.headerHero}>
          <div className={c.location}>
            <img className={c.lightmode} src={location} alt="" />
            <img className={c.darkmode} src={darklocation} alt="" />
            <p className={c.locationTitle}> {t(changeRegionValue)}</p>
            <ul className={c.locationModalItem}>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('toshkent')}</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('toshkentViloyati')}</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('Buxoro')}</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('Fargana')}</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('Andijon')}</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('Namangan')}</p>
              </li>
              <li onClick={(e) => changeRegion(e)} className={c.locationList}>
                <p>{t('Samarqand')}</p>
              </li>
            </ul>
          </div>
          <img className={c.mobileImg} src={texnomartLogo} alt="" />
          <div className={c.HeaderHeroText}>
            <p>{t('weShop')}</p>
          </div>
          <div className={c.HeaderHerobg}>
            <p>{t('B2B')}</p>
          </div>
          <div className={c.HeaderHeroText}>
            <p>{t('kredit')}</p>
          </div>
          <div className={c.HeaderHeroText}>
            <p>{t('PaymentMethod')}</p>
          </div>
          <div className={c.HeaderHeroText}>
            <p>{t('security')}</p>
          </div>
        </div>
        <div className={c.contact}>
          <div className={c.contactPhone}>
            <p>{t('contact')} </p>
            <img className={c.darkmodePhone} src={darkphoneIcon} alt="" />
            <img className={c.lightmodePhone} src={phoneIcon} alt="" />
            <span> +99871 209 99 44</span>
          </div>
          <div className={c.mobileLocation}>
            <img className={c.lightmode} src={location} alt="" />
            <img className={c.darkmode} src={darklocation} alt="" />
            <p className={c.locationTitle}> {changeRegionValue}</p>
            <ul className={c.MobilelocationModalItem}>
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
          <div className={c.langunge}>
            <img src={world} alt="" />
            <p>{changeLanguagevalue}</p>
            <img src={dawn} alt="" />
            <div className={c.langungeModal}>
              <p
                onClick={(e) => {
                  i18n.changeLanguage('RU');
                  changelanguage(e);
                }}
              >
                RU
              </p>
              <p
                onClick={(e) => {
                  i18n.changeLanguage('UZ');
                  changelanguage(e);
                }}
              >
                UZ
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <nav>
          <div className={`${c.navBar} ${scrollTopCheck ? c.fixed : ''}`}>
            <img className={c.navBarimg} src={texnomartLogo} alt="" />
            <div className={c.navSearchBar}>
              <div className={c.selectBar}>
                <div className={c.optionBar}>
                  <p className={c.selecttext}>{t(changeSelect)}</p>
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
                    <p>{t('allCatagory')}</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>{t('texnika')}</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>{t('ofis')}</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>{t('oshxona')}</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>{t('forHome')}</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>{t('forCar')}</p>
                  </div>
                  <div onClick={(e) => changeValue(e)}>
                    <p>{t('iqlim')}</p>
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
                <p>{t('orderState')}</p>
              </div>
              <div onClick={loginOpenfunc}>
                <img src={loginIcon} alt="" />
                <p>{t('login')}</p>
              </div>
              <div>
                <img src={taqqoslaIcon} alt="" />
                <p>{t('compare')}</p>
              </div>
              <div>
                <img src={sevimliIcon} alt="" />
                <p>{t('favorite')}</p>
              </div>
              <div className={c.shopOption} onClick={ShopOpenfunc}>
                <img src={shopIcon} alt="" />
                <span className={c.shopCount}>{data.length}</span>
                <p>{t('shop')}</p>
              </div>
            </div>
          </div>
          <div className={c.mobileNavbar}>
            <button onClick={() => setIsMobileOpen(true)}>
              <HiOutlineMenuAlt1 className={c.mobilemenu} />
            </button>
            <input type="text" />
            <img className={c.voiceIcon} src={voiceicon} alt="" />
          </div>
        </nav>
        <HeaderCategory
          isCatalogOpen={isCatalogOpen}
          setIsCatalogOpen={setIsCatalogOpen}
        />
      </Container>
      {isCatalogOpen && (
        <div
          onClick={() => setIsCatalogOpen(false)}
          className={c.owerlay}
        ></div>
      )}
      {shopOpen && <Shop shopOpen={setShopOpen} />}
      {loginOpen && <Login loginOpen={setLoginOpen} />}
      <MobileSidebar
        IsMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <MobileNavbar loginOpen={setLoginOpen} shopOpen={setShopOpen} />
    </header>
  );
};

export default Header;
