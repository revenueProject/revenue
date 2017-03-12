import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myCountsReducer from './myCountsReducer';

export default combineReducers({
  routing: routerReducer,
  moCounts: myCountsReducer,
});
