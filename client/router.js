import React from 'react';
import { Router, Route } from 'react-router';

import mainLayout from './views/layouts/main';


export default (history) => (
  <Router history={history} >
    <Route path="/" component={mainLayout} />
  </Router>
);
