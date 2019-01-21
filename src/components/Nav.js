import React from 'react';
import { Link } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = ({ routes }) => (
  <ul className={s.listStyle}>
    {routes.map(route => (
      <li key={route.name} className={s.link}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
);

export default Nav;
