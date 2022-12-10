import c from './Shop.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { delItemAction } from '../../redux/reduser';
import { useTranslation } from 'react-i18next';

const Shop = ({ shopOpen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((data) => data.data);
  const [productCost, setProductCost] = useState(0);
  console.log(data);
  useEffect(() => {
    data.forEach((e) => {
      setProductCost((productCost) => productCost + e.price);
    });
  }, [data]);
  return (
    <>
      <div className={c.shopWrapper}>
        <div className={c.shopheader}>
          <p>{t('nowShopping')}</p>
          <button className={c.closeBtn} onClick={() => shopOpen(false)}>
            <IoCloseOutline className={c.closeIcon} />
          </button>
        </div>
        {data.length === 0 ? (
          <div className={c.emptycard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.125 2.10002C1.125 1.4925 1.6175 1 2.22502 1H5.18101C5.70188 1 6.15135 1.36532 6.2578 1.8752L6.99374 5.40007H20.9253C22.1404 5.40007 23.1254 6.38506 23.1254 7.60011V12.3577C23.1254 13.3992 22.3952 14.2979 21.3757 14.5112L9.42209 17.0113C8.2327 17.26 7.06687 16.4975 6.81821 15.308L4.28693 3.20004H2.22502C1.6175 3.20004 1.125 2.70754 1.125 2.10002ZM8.74366 13.7815C8.86785 14.3763 9.4508 14.7578 10.0456 14.6335L20.0505 12.5416C20.5601 12.435 20.9253 11.9855 20.9253 11.4648V8.70012C20.9253 8.09261 20.4328 7.60011 19.8253 7.60011H7.45307L8.74366 13.7815Z"
                fill="#ccc"
              ></path>
              <path
                d="M8.12503 22.9999C9.22962 22.9999 10.1251 22.1045 10.1251 20.9999C10.1251 19.8953 9.22962 18.9999 8.12503 18.9999C7.02044 18.9999 6.125 19.8953 6.125 20.9999C6.125 22.1045 7.02044 22.9999 8.12503 22.9999Z"
                fill="#ccc"
              ></path>
              <path
                d="M18.125 22.9999C19.2296 22.9999 20.1251 22.1045 20.1251 20.9999C20.1251 19.8953 19.2296 18.9999 18.125 18.9999C17.0204 18.9999 16.125 19.8953 16.125 20.9999C16.125 22.1045 17.0204 22.9999 18.125 22.9999Z"
                fill="#ccc"
              ></path>
            </svg>
            <p>{t('emptyshopMessage')}</p>
            <button onClick={() => shopOpen(false)} className={c.emptyCardBtn}>
              {t('shoppingCon')}
            </button>
          </div>
        ) : (
          <div className={c.shopWrap}>
            {data.map((el) => {
              return (
                <div key={uuidv4()} className={c.shopItem}>
                  <div className={c.shopImg}>
                    <img src={el.image[0].url} alt="" />
                  </div>
                  <div className={c.shopInfo}>
                    <p>{el.name}</p>
                    <p>{el.author}</p>
                    <p>{el.price} $</p>
                  </div>
                  <button
                    className={c.delBtn}
                    onClick={() => dispatch(delItemAction(el._id))}
                  >
                    O'chirish
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {data.length !== 0 ? (
          <div className={c.allProduct}>
            <div className={c.allProductDes}>
              <p>{`Jami  ${data.length} ta mahsulot `}</p>
              <p className={c.allProductText}>{productCost} $</p>
            </div>
            <div className={c.btnGroup}>
              <button className={c.buyingCon} onClick={() => shopOpen(false)}>
                Xaridni davom ettirish
              </button>
              <button className={c.allBuyBtn}>Xaridni Rasmiylashtirish</button>
            </div>
          </div>
        ) : null}
      </div>
      <div onClick={() => shopOpen(false)} className={c.view}></div>
    </>
  );
};

export default Shop;
