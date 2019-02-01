import React from 'react';
import { Link } from 'react-router-dom';

import s from './Item.module.css';

const MenuList = ({ items, match, location, addingToCart }) => (
  <>
    <div className={s.containerMenu}>
      {items.map(({ id, name, image, price, category }) => (
        <div key={id} className={s.cartBlock}>
          <Link
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            <h4>{name}</h4>
          </Link>
          <img src={image} width="150px" height="100px" alt={category} />
          <p>
            <b>{price} UAH</b>
          </p>
          <p>
            <button type="button" onClick={() => addingToCart(id)}>
              Добавить в корзину
            </button>
          </p>
        </div>
      ))}
    </div>
  </>
);

export default MenuList;
