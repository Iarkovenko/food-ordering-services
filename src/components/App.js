import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Nav from './Nav';

import routes from '../configs/routes';
import navRoute from '../configs/main-nav';

const MainPageAsync = Loadable({
  loader: () => import('../pages/MainPage' /* webpackChunkName: "main-page" */),
  loading() {
    return <h1>Loading ...</h1>;
  },
});

const MenuPageAsync = Loadable({
  loader: () => import('../pages/MenuPage' /* webpackChunkName: "menu-page" */),
  loading() {
    return <h1>Loading ...</h1>;
  },
});

const ItemPageAsync = Loadable({
  loader: () => import('../pages/ItemPage' /* webpackChunkName: "item-page" */),
  loading() {
    return <h1>Loading ...</h1>;
  },
});

const AddPageAsync = Loadable({
  loader: () =>
    import('../pages/AddPage' /* webpackChunkName: "Add-item-page" */),
  loading() {
    return <h1>Loading ...</h1>;
  },
});

const App = () => (
  <>
    <Nav routes={navRoute} />
    <Switch>
      <Route exact path={routes.MAIN} component={MainPageAsync} />
      <Route exact path={routes.MENU} component={MenuPageAsync} />
      <Route exact path={routes.ADD_ITEM_MENU} component={AddPageAsync} />
      <Route exact path={routes.MENU_ITEM} component={ItemPageAsync} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
