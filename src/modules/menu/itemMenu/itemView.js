import React from 'react';

const MenuItem = ({
  dataOfitem: { name, description, image, price, category, ingredients },
  goBackToList,
  children,
}) => (
  <div>
    <h1>{name}</h1>
    <span>{category}</span>
    <img src={image} alt={category} width="300px" height="250px" />
    <p>
      <b>Описание</b>
      {description}
    </p>
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
