import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import MainPage from '../pages/MainPage';
import MenuPage from '../pages/MenuPage';
import ItemPage from '../pages/ItemPage';
import AddPage from '../pages/AddPage';

import routes from '../configs/routes';
import navRoute from '../configs/main-nav';

const App = () => (
  <>
    <Nav routes={navRoute} />
    <Switch>
      <Route exact path={routes.MAIN} component={MainPage} />
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route exact path={routes.ADD_ITEM_MENU} component={AddPage} />
      <Route exact path={routes.MENU_ITEM} component={ItemPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
