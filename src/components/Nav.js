import React from 'react';
import { Link } from 'react-router-dom';

import navRoute from '../configs/main-nav';

const Nav = () => (
  <ul>
    {navRoute.map(route => (
      <li key={route.name}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
);

export default Nav;
