import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import UserMenu from './UserMenu';
import mainLogo from '../../data/react-logo.png';
import userLogoDefault from '../../data/userLogo.png';

const Header = () => (
  <header>
    <Logo srcLogo={mainLogo} logoWidth="150px" logoHeight="150px" />
    <Nav />
    <UserMenu
      srcUserLogo={userLogoDefault}
      logoWidth="35px"
      logoHeight="35px"
    />
  </header>
);

export default Header;
