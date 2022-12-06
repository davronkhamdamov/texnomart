import c from './Category.module.css';
import categoryData from '../../json/category.json';
import left from '../../assets/images/left.svg';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Category = () => {
  const [category, setCategory] = useState(null);
  const changeCategory = (el) => {
    setCategory(el);
  };
  return (
    <>
      <div className={c.categoryModal}>
        <div className={c.categoryNavigator}>
          {categoryData.map((el) => {
            return (
              <div
                key={uuidv4()}
                onMouseOver={() => changeCategory(el)}
                className={c.categorynavbar}
              >
                <img src={el?.img} alt="" />
                <p>{el.name}</p>
                <img className={c.rigthIcon} src={left} alt="" />
              </div>
            );
          })}
        </div>
        <div className={c.wrapper}>
          <h3>{category?.name}</h3>
          <div className={c.categoryList}>
            {category?.item.map((el) => {
              return (
                <div key={uuidv4()} className={c.categoryleftWrap}>
                  <p className={c.categoryTitle}>{el?.title}</p>
                  <div className={c.categorytextWrap}>
                    {el?.list?.map((e) => {
                      return (
                        <p key={uuidv4()} className={c.categoryText}>
                          {e}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
