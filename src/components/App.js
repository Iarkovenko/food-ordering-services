import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../modules/header/header';
import Loader from '../modules/loader/Loader';

import routes from '../configs/routes';

const MainPageAsync = lazy(() =>
  import('../pages/MainPage' /* webpackChunkName: "main-page" */),
);

const MenuPageAsync = lazy(() =>
  import('../pages/MenuPage' /* webpackChunkName: "menu-page" */),
);

const ItemPageAsync = lazy(() =>
  import('../pages/ItemPage' /* webpackChunkName: "item-page" */),
);

const UserCartAsync = lazy(() =>
  import('../pages/UserCartPage' /* webpackChunkName: "UserCart-page" */),
);

const UserAccountAsync = lazy(() =>
  import('../pages/AccountPage' /* webpackChunkName: "UserAccount-page" */),
);

const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Header />
      <Switch>
        <Route exact path={routes.MAIN} component={MainPageAsync} />
        <Route exact path={routes.MENU} component={MenuPageAsync} />
        <Route exact path={routes.MENU_ITEM} component={ItemPageAsync} />
        <Route exact path={routes.CART} component={UserCartAsync} />
        <Route exact path={routes.ACCOUNT} component={UserAccountAsync} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
