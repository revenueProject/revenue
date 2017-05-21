import { createReducer } from 'redux-act';
import { getMothsSuccess } from '../actions/reports';


const initialState = {
  months: [],
};

export default createReducer({
  [getMothsSuccess]: (state, result) => ({ ...state, months: result }),
}, initialState);
