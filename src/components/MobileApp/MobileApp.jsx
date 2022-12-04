import c from './MobileApp.module.css';
import close from '../../assets/images/close.svg';
import texnomartIcon from '../../assets/images/texnomart-logo.svg';
import texnoicon from '../../assets/images/logo-gold.6c751c6.svg';
import { useState } from 'react';

const MobileApp = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  return (
    <>
      {isMobileOpen && (
        <div className={c.mobileAppWrapper}>
          <img onClick={() => setIsMobileOpen(false)} src={close} alt="" />
          <div className={c.mobileProg}>
            <img src={texnoicon} alt="" />
            <div className={c.mobileAppwrap}>
              <p>Приложение</p>
              <img className={c.texnoIcon} src={texnomartIcon} alt="" />
            </div>
          </div>
          <button className={c.mobileAppBtn}>УСТАНОВИТЬ</button>
        </div>
      )}
    </>
  );
};

export default MobileApp;
