import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import Loader from '../modules/loader/Loader';

import routes from '../configs/routes';
import navRoute from '../configs/main-nav';

const MainPageAsync = lazy(() =>
  import('../pages/MainPage' /* webpackChunkName: "main-page" */),
);

const MenuPageAsync = lazy(() =>
  import('../pages/MenuPage' /* webpackChunkName: "menu-page" */),
);

const ItemPageAsync = lazy(() =>
  import('../pages/ItemPage' /* webpackChunkName: "item-page" */),
);

const AddPageAsync = lazy(() =>
  import('../pages/AddPage' /* webpackChunkName: "Add-item-page" */),
);

const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Nav routes={navRoute} />
      <Switch>
        <Route exact path={routes.MAIN} component={MainPageAsync} />
        <Route exact path={routes.MENU} component={MenuPageAsync} />
        <Route exact path={routes.ADD_ITEM_MENU} component={AddPageAsync} />
        <Route exact path={routes.MENU_ITEM} component={ItemPageAsync} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
