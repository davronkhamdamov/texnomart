import './index.css';
import chatLogo from '../assets/images/chat.svg';
import { useState } from 'react';
const Container = (props) => {
  return <div className="container">{props.children}</div>;
};
const BackToTop = () => {
  const scrollToTop = (e) => {
    window.scrollTo(0, 0);
  };
  const [scrollTopCheck, setScrollTopCheck] = useState(false);
  window.addEventListener('scroll', () => {
    setScrollTopCheck(window.scrollY > 200);
  });
  return (
    <div className="fixedItem">
      {scrollTopCheck && (
        <div onClick={(e) => scrollToTop(e)} className="back-to-top">
          <img
            src="https://texnomart.uz/_nuxt/img/scroll-top.5927360.svg"
            alt="top"
          />
        </div>
      )}
      <a className="telegram" href="https://t.me/pro_username">
        <img
          className="telegramLogo"
          src="https://texnomart.uz/_nuxt/img/telegram-fixed.a5368ed.svg"
          alt=""
        />
      </a>
      <div className="center">
        <div className="circle">
          <img src={chatLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Container, BackToTop };
