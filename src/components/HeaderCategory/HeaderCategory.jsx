import katalogIcon from '../../assets/images/catalog.svg';
import closeIcon from '../../assets/images/close.svg';
import lightIcon from '../../assets/images/svg.svg';
import Category from '../Category/Category';
import c from './HeaderCategory.module.css';
const HeaderCategory = ({ isCatalogOpen, setIsCatalogOpen }) => {
  return (
    <div className={c.category}>
      <div className={c.categoryItem}>
        <div
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
          className={c.catalogdropdawn}
        >
          <img src={`${isCatalogOpen ? closeIcon : katalogIcon}`} alt="" />
          <p>Katalog</p>
        </div>
        <div className={c.categoryList}>
          <div className={c.yellowFriday}>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.589 7.146a.834.834 0 00-.755-.48h-3.652l1.897-3.794a.833.833 0 00-.745-1.205h-5a.833.833 0 00-.728.428l-4.167 7.5a.833.833 0 00.728 1.238h3.961l-1.44 6.486a.833.833 0 001.453.714l8.333-10a.834.834 0 00.115-.886z' fill='url(%23paint0_linear_10480_621432)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_10480_621432' x1='5.037' y1='4.619' x2='13.298' y2='12.881' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FD0'/%3E%3Cstop offset='1' stop-color='%23FEB100'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
              alt=""
            />
            <p>Sariq Hafta</p>
          </div>
          <div className={c.action}>
            <img src={lightIcon} alt="" />
            <p>Aksiyalar</p>
          </div>
          <div className={c.categoryListItem}>
            <p>SMARTFONLAR</p>
          </div>
          <div className={c.categoryListItem}>
            <p>MUZLATGICHLAR</p>
          </div>
          <div className={c.categoryListItem}>
            <p>СHANGYUTGICHLAR</p>
          </div>
          <div className={c.categoryListItem}>
            <p>XAVO SOVUTGICHLAR</p>
          </div>
          <div className={c.categoryListItem}>
            <p>TELEVIZORLAR</p>
          </div>
          <div className={c.categoryListItem}>
            <p>BARCHA KATEGORIYALAR</p>
          </div>
        </div>
      </div>
      {isCatalogOpen && <Category />}
    </div>
  );
};

export default HeaderCategory;
