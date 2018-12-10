import React from 'react';

const MenuItem = ({
  dataOfitem: { name, description, image, price, category, ingredients },
}) => (
  <div>
    <h1>{name}</h1>
    <span>{category}</span>
    <img src={image} alt={category} width="300px" height="250px" />
    <p>{description}</p>
    <p>{ingredients}</p>
    <p>
      <b>{price} UAH</b>
    </p>
  </div>
);

export default MenuItem;
