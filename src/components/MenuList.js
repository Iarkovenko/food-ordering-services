import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MenuList = ({ items, match, location }) => (
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
      </li>
    ))}
  </ul>
);

export default withRouter(MenuList);
