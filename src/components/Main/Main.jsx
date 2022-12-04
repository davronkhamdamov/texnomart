// import c from './Main.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '../../utils/index';
import HeroSlider from '../HeroSlider/HeroSlider';
import App from '../App/App';
import Service from '../Servise/Service';
import MobileApp from '../MobileApp/MobileApp';
const Main = () => {
  const [mainData, setMainData] = useState([]);
  const [filterData, setFilterdata] = useState([]);
  console.log('====================================');
  console.log(filterData);
  console.log('====================================');
  useEffect(() => {
    axios
      .get('http://localhost:8000/v2/allproducts')
      .then((res) => setMainData(res.data));
  }, []);
  useEffect(() => {
    let flilter = mainData.filter((el) => el.productCategory === 'smartphones');
    setFilterdata(flilter);
  }, [mainData]);
  return (
    <div>
      <MobileApp />
      <HeroSlider />
      <Container>
        <App />
        <Service />
      </Container>
    </div>
  );
};

export default Main;
