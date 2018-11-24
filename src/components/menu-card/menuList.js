import React from 'react';
import MenuItem from './cardMenuItem';
import menu from '../../data/menu.json';
import Filter from './filterInput';

const MenuList = () => (
  <div>
    <h1>MENU LIST</h1>
    <Filter />
    <ul>
      {menu.map(({ id, name, description, image, price, ingredients }) => (
        <MenuItem
          id={id}
          name={name}
          description={description}
          image={image}
          price={price}
          ingredients={ingredients}
        />
      ))}
    </ul>
  </div>
);

export default MenuList;
