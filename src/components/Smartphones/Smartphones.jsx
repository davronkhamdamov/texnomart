import c from './Smartphones.module.css';
import { useEffect, useState, useRef } from 'react';
import shop from '../../assets/images/shop.svg';
import { v4 as uuidv4 } from 'uuid';
import navigator from '../../assets/images/left.svg';

const Smartphones = ({ mainData }) => {
  const categories = useRef();
  const [filterData, setFilterdata] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  console.log(imgCount);
  useEffect(() => {
    categories.current.scrollLeft = imgCount * 400;
  }, [imgCount]);

  useEffect(() => {
    let filter = mainData.filter((el) => el.productCategory === 'smartphones');
    setFilterdata(filter);
  }, [mainData]);

  const scrollLeft = () => {
    if (imgCount > 0) setImgCount(imgCount - 1);
  };
  console.log(imgCount);
  const scrollRigth = () => {
    setImgCount(imgCount + 1);
  };

  return (
    <div className={c.category}>
      <h2>Smartphones</h2>
      <button onClick={scrollLeft} className={c.leftBtn}>
        <img className={c.navigatorIcon} src={navigator} alt="" />
      </button>
      <div ref={categories} className={c.categorySlider}>
        <div className={c.categoryWrapper}>
          {filterData?.map((el) => (
            <div key={uuidv4()} className={c.categoryItem}>
              <div className={c.categoryImg}>
                <img src={el?.image[0]?.url} alt="" />
              </div>
              <p className={c.categoryText}>{el.name}</p>
              <div className={c.categoryDes}>
                <p>{el.price} $</p>
                <div className={c.btnGroup}>
                  <button className={c.shopBtn}>
                    <img src={shop} alt="" />
                    Savatchaga
                  </button>
                  <img
                    src="https://texnomart.uz/_nuxt/img/like-default.103ba85.svg"
                    alt=""
                  />
                  <img
                    src="https://texnomart.uz/_nuxt/img/compare-default.2d0981d.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollRigth} className={c.rigthBtn}>
        <img className={c.navigatorIcon} src={navigator} alt="" />
      </button>
    </div>
  );
};

export default Smartphones;
