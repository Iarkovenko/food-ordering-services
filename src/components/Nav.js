import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <Link exact to="/">
        Главная
      </Link>
    </li>
    <li>
      <Link exact to="/menu">
        Меню
      </Link>
    </li>
  </ul>
);

export default Nav;
