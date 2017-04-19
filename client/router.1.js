import React from 'react';
import { Router, Route } from 'react-router';

import mainLayout from './views/layouts/main';
import MyCountsContainer from './views/containers/MyCountsContainer';
import MyTargetContainer from './views/containers/MyTargetContainer';
import CountContainer from './views/containers/CountContainer';


export default (history) => (
  <Router history={history} >
    <Route path="/" component={mainLayout}>
      <Route path="/counts" component={MyCountsContainer} />
      <Route path="/targets" component={MyTargetContainer} />
      <Route path="/counts/:countId" component={CountContainer} />
    </Route>
  </Router>
);
