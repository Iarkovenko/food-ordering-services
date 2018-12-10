import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Nav from './Nav';
import MenuPage from '../pages/MenuPage';
import ItemPage from '../pages/ItemPage';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route path="/menu/:id" component={ItemPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
