import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';


export default() => {
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
  });

  const reduxRouterMiddleware = routerMiddleware(hashHistory);

  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    loggerMiddleware,
    thunkMiddleware,
  )(createStore);

  return createStoreWithMiddleware(reducers);
};
