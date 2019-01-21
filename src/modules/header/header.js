import React from 'react';

import navRoute from '../../configs/main-nav';

import Nav from '../../components/Nav';

import s from './Header.module.css';

const Header = () => (
  <div className={s.header}>
    <Nav routes={navRoute} />
  </div>
);

export default Header;
