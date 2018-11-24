import React from 'react';
import ComentSection from './comentSection';

const MenuItem = ({ id, name, description, image, price, ingredients }) => (
  <li key={id}>
    <div>
      <img src={image} width="170px" height="170px" alt="img of menu item" />
      <h4>{name}</h4>
      <p>{price} UAH</p>
    </div>
    <div>
      <p>{description}</p>
      <p>{ingredients}</p>
    </div>
    <ComentSection />
  </li>
);

export default MenuItem;
