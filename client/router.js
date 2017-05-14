import React from 'react';
import { Router, Route } from 'react-router';

import mainLayout from './views/layouts/main';
import MyCountsContainer from './views/containers/MyCountsContainer';
import MyTargetsContainer from './views/containers/MyTargetsContainer';
import CountContainer from './views/containers/CountContainer';
import TargetContainer from './views/containers/TargetContainer';


export default (history) => (
  <Router history={history} >
    <Route path="/" component={mainLayout}>
      <Route path="/counts" component={MyCountsContainer} />
      <Route path="/targets" component={MyTargetsContainer} />
      <Route path="/counts/:countId" component={CountContainer} />
      <Route path="/targets/:targetId" component={TargetContainer} />
    </Route>
  </Router>
);
