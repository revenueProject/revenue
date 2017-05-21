import { createReducer } from 'redux-act';
import { getLogsSuccess } from '../actions/report';


const initialState = {
  logs: [],
};

export default createReducer({
  [getLogsSuccess]: (state, result) => ({ ...state, logs: result }),
}, initialState);
