import React from 'react';

import s from './MenuItem.module.css';

const MenuItem = ({
  dataOfitem: { name, description, image, price, category, ingredients },
  goBackToList,
  children,
}) => (
  <div className={s.itemBlock}>
    <h1>{name}</h1>
    <img src={image} alt={category} width="300px" height="250px" />
    <div className={s.categoryText}>
      <p>
        <span>Категория: </span>
        {category}
      </p>
    </div>
    <div className={s.descriptionBlock}>
      <h3>Описание:</h3>
      <p className={s.descriptionText}>{description}</p>
    </div>
    <p>{ingredients}</p>
    <p>
      <b>{price} UAH</b>
    </p>
    <button type="button" onClick={goBackToList}>
      Назад
    </button>
    {children}
  </div>
);

export default MenuItem;
