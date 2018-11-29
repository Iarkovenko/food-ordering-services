import React, { Fragment } from 'react';
import Header from './header/Header';
import OrderHistory from './order-history';
import MenuList from './menu-card/MenuList';
import SignUp from './authform/signup';
import SignIn from './authform/signin';
import dataOrderHistory from '../data/order-history.json';

const App = () => (
  <Fragment>
    <Header />
    <OrderHistory dataOrderHistory={dataOrderHistory} />
    <MenuList />
    <SignUp />
    <SignIn />
  </Fragment>
);

export default App;
