import { createReducer } from 'redux-act';
import { saveCountSuccess, getCountsSuccess } from '../actions/myCounts';

const initialState = {
  counts: [],
};

export default createReducer({
  [saveCountSuccess]: (state, result) => {return {...state, counts: [...state.counts, result]}},
  [getCountsSuccess]: (state, result) => {return {...state, counts: result}},
}, initialState);

