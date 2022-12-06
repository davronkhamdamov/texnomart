// import c from './Main.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '../../utils/index';
import HeroSlider from '../HeroSlider/HeroSlider';
import App from '../App/App';
import Service from '../Servise/Service';
import MobileApp from '../MobileApp/MobileApp';
import MainSlider from '../MainSlider/MainSlider';
import PublicSlider from '../PublicSlider/PublicSlider';
import Smartphones from '../Smartphones/Smartphones';
import Laptops from '../Laptops/Laptops';
import Accessories from '../Accessories/Accessories';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/v2/allproducts')
      .then((res) => setMainData(res.data));
  }, []);
  return (
    <div>
      <MobileApp />
      <HeroSlider />
      <Container>
        <MainSlider />
        <PublicSlider />
        <Smartphones mainData={mainData} />
        <Laptops mainData={mainData} />
        <Accessories mainData={mainData} />
        <App />
        <Service />
      </Container>
    </div>
  );
};

export default Main;
