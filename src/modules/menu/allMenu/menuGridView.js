import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({ items, match, location, handleDelete, handleEditItem }) => (
  <>
    <Link
      exact
      to={{
        pathname: `${match.url}/add`,
        state: { from: location },
      }}
    >
      Добавить Новый
    </Link>

    <ul>
      {items.map(({ id, name, image, price, category }) => (
        <li key={id}>
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
            <button type="button" onClick={handleEditItem}>
              Изменить
            </button>
            <button type="button" onClick={() => handleDelete(id)}>
              Удалить
            </button>
          </p>
        </li>
      ))}
    </ul>
  </>
);

export default MenuList;
