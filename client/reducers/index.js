import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myCountsReducer from './myCountsReducer';
import countReducer from './countReducer';

export default combineReducers({
  routing: routerReducer,
  moCounts: myCountsReducer,
  count: countReducer,
});
