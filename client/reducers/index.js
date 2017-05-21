import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myCountsReducer from './myCountsReducer';
import countReducer from './countReducer';
import myTargetsReducer from './myTargetsReducer';
import targetReducer from './targetReducer';
import reportsReducer from './reportsReducer';
import reportReducer from './reportReducer';

export default combineReducers({
  routing: routerReducer,
  moCounts: myCountsReducer,
  myTargets: myTargetsReducer,
  count: countReducer,
  target: targetReducer,
  reports: reportsReducer,
  reportState: reportReducer,
});
