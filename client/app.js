import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import './style.css';
import Datastore from 'nedb';
import path from 'path';
import createStore from './store';
import router from './router';


const store = createStore();
const history = syncHistoryWithStore(hashHistory, store);

window.db = new Datastore({ filename: process.env.DB, autoload: true});

ReactDOM.render(
  <Provider store={store} >
    {router(history)}
  </Provider>,
  document.getElementById('root'),
);
