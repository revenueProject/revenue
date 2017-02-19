import React from 'react';
import { Router, Route } from 'react-router';

import mainLayout from './views/layouts/main';
import MyCountsContainer from './views/containers/MyCountsContainer';


export default (history) => (
  <Router history={history} >
    <Route path="/" component={mainLayout}>
      <Route path="/counts" component={MyCountsContainer} />
    </Route>
  </Router>
);
