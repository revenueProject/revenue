import { createReducer } from 'redux-act';
import { getCountSuccess, getLogsSuccess } from '../actions/count';

const initialState = {
  count: {},
  logs: [],
};

export default createReducer({
  [getCountSuccess]: (state, result) => ({ ...state, count: result }),
  [getLogsSuccess]: (state, result) => ({ ...state, logs: result }),
}, initialState);

