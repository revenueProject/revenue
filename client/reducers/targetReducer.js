import { createReducer } from 'redux-act';
import { getTargetSuccess } from '../actions/target';

const initialState = {
  target: {},
};

export default createReducer({
  [getTargetSuccess]: (state, result) => ({ ...state, target: result }),
}, initialState);

