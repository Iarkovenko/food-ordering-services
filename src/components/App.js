import React, { Fragment } from 'react';
import Header from './header/Header';
import OrderHistory from './order-history';
import MenuList from './menu-card/menuList';
import SignUp from './authform/signup';
import SignIn from './authform/signin';

const App = () => (
  <Fragment>
    <Header />
    <OrderHistory />
    <MenuList />
    <SignUp />
    <SignIn />
  </Fragment>
);

export default App;
