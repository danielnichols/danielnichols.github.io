import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import ComingSoon from '~components/ComingSoon';
import Homepage from '~components/Homepage';
import PortfolioItemPage from '~components/PortfolioItemPage';

import { AppFrame } from './AppFrame';
import PageNotFound from './PageNotFound';

const isDev = process.env.NODE_ENV !== 'production';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/soon" exact component={ ComingSoon } />

      {
        !isDev
          ? <Route path="/"><Redirect to="/soon" /></Route>
          : ''
      }

      <Route path="/" exact>
        <AppFrame>
          <Homepage />
        </AppFrame>
      </Route>

      <Route path="/portfolio" exact>
        <AppFrame>
          <Homepage />
        </AppFrame>
      </Route>

      <Route path="/portfolio/item/:itemName">
        <AppFrame>
          <PortfolioItemPage />
        </AppFrame>
      </Route>
      <Route path="/404">
        <PageNotFound />
      </Route>
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
