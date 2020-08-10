import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import ComingSoon from '~components/ComingSoon';

const isDev = process.env.NODE_ENV !== 'production';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        {
          !isDev
            ? <Redirect to="/soon" />
            : <p>Homepage</p>
        }
      </Route>
      <Route path="/soon" exact>
        <ComingSoon />
      </Route>
      <Route path="/404">
        <p>Page not found.</p>
      </Route>
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
