import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myCountsReducer from './myCountsReducer';
import countReducer from './countReducer';
import myTargetsReducer from './myTargetsReducer';

export default combineReducers({
  routing: routerReducer,
  moCounts: myCountsReducer,
  myTargets: myTargetsReducer,
  count: countReducer,
});
